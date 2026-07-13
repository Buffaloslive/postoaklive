document.getElementById('year').textContent = new Date().getFullYear();
const header = document.querySelector('.site-header');
if (header && !header.classList.contains('solid')) {
  const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 18);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });
}

const CHAMPIONSHIP_TIME_ZONE = 'America/Chicago';
const CHAMPIONSHIP_DATE = { year: 2026, month: 7, day: 14, hour: 18, minute: 0 };

function getCentralParts(date) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: CHAMPIONSHIP_TIME_ZONE,
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false
  });
  return Object.fromEntries(formatter.formatToParts(date).filter(part => part.type !== 'literal').map(part => [part.type, Number(part.value)]));
}

function getChampionshipPhase(now = new Date()) {
  const central = getCentralParts(now);
  const currentDay = central.year * 10000 + central.month * 100 + central.day;
  const gameDay = CHAMPIONSHIP_DATE.year * 10000 + CHAMPIONSHIP_DATE.month * 100 + CHAMPIONSHIP_DATE.day;
  const currentMinutes = central.hour * 60 + central.minute;
  const firstPitchMinutes = CHAMPIONSHIP_DATE.hour * 60 + CHAMPIONSHIP_DATE.minute;

  if (currentDay < gameDay) return 'before';
  if (currentDay === gameDay && currentMinutes < firstPitchMinutes) return 'today';
  return 'live';
}

function applyChampionshipTiming() {
  const params = new URLSearchParams(window.location.search);
  const testTime = params.get('championshipTime');
  const now = testTime ? new Date(testTime) : new Date();
  const phase = getChampionshipPhase(now);

  const badge = document.getElementById('championship-status-badge');
  const badgeLabel = document.querySelector('[data-championship-badge-label]');
  const badgeTime = document.querySelector('[data-championship-badge-time]');
  const heading = document.querySelector('[data-championship-heading]');
  const storyLede = document.querySelector('[data-team-story-lede]');

  if (phase === 'live') {
    if (badge && badge.dataset.liveHref && badge.tagName !== 'A') {
      const liveBadge = document.createElement('a');
      liveBadge.className = badge.className;
      liveBadge.id = badge.id;
      liveBadge.href = badge.dataset.liveHref;
      liveBadge.setAttribute('aria-label', 'Championship status: live now. Open the live broadcast.');
      liveBadge.dataset.liveHref = badge.dataset.liveHref;
      liveBadge.innerHTML = '<strong data-championship-badge-label>LIVE NOW</strong>';
      badge.replaceWith(liveBadge);
    } else if (badgeLabel) {
      badgeLabel.textContent = 'LIVE NOW';
      if (badgeTime) badgeTime.remove();
    }
    if (heading) heading.textContent = 'The State Championship Is Here.';
    if (storyLede) storyLede.textContent = 'Twelve boys. Endless practices. District Champions. Section Champions. Tonight they play for the Texas East Little League State Championship.';
    return;
  }

  if (badgeLabel) badgeLabel.textContent = phase === 'today' ? 'TODAY' : 'TOMORROW';
  if (badgeTime) badgeTime.textContent = '6:00 PM';
  if (heading) heading.textContent = phase === 'today' ? 'The season comes down to tonight.' : 'The season comes down to tomorrow night.';
  if (storyLede) storyLede.textContent = `Twelve boys. Endless practices. District Champions. Section Champions. ${phase === 'today' ? 'Today' : 'Tomorrow'} they play for the Texas East Little League State Championship.`;
}

applyChampionshipTiming();

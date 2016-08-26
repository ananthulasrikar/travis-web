import PageObject from 'travis/tests/page-object';

let {
  visitable,
  clickable,
  isVisible,
  text
} = PageObject;

export default PageObject.create({
  visit: visitable('travis-ci/travis-web/jobs/1'),

  branch: text('.commit-branch'),
  message: text('.build-title'),
  state: text('.build-status'),
  author: text('.commit-author'),
  log: text('#log'),
  logError: text('.job-log .notice'),

  hasTruncatedLog: isVisible('.log-container p.warning'),

  restartJob: clickable('.button-circle-trigger'),
  cancelJob: clickable('.button-circle-cancel'),
  restartedNotification: text('p.flash-message'),
  cancelledNotification: text('p.flash-message')
});

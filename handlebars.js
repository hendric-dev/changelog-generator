module.exports = function (Handlebars) {
  Handlebars.registerHelper('sort', function (array) {
    return array.sort((a, b) => a.commit.subject.localeCompare(b.commit.subject));
  });
};

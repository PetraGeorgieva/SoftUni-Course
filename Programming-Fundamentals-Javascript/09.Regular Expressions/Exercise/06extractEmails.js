function extractEmails(params) {
    let pattern = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/g;
    params.match(pattern).forEach(function(email) {
        console.log(email);
      });
}
extractEmails('Please contact us at: support@github.com.');
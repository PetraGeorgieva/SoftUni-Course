function browserHistory(object, stringArray) {
    for (let command of stringArray) {
        let data = command.split(' ');
        let currentCommand = data[0];
        let site = data[1];

        if (currentCommand === 'Open') {
            openTab(object, site);
        } else if (currentCommand === 'Close') {
            close(object, site);
        } else if (command === 'Clear History and Cache') {
            deleteObject(object);
        }
    }

    console.log(object['Browser Name']);
    console.log(`Open Tabs: ${object['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${object['Recently Closed'].join(', ')}`);
    console.log(`Browser Logs: ${object['Browser Logs'].join(', ')}`);

    function openTab(obj, site) {
        obj['Open Tabs'].push(site);
        object['Browser Logs'].push('Open ' + site)

    }
    function close(obj, site) {
        if (obj['Open Tabs'].includes(site)) {
            let index = obj['Open Tabs'].indexOf(site);
            let result = obj['Open Tabs'].splice(index, 1);
            obj['Recently Closed'].push(result[0]);
            obj['Browser Logs'].push('Close ' + site)
        }
    }

    function deleteObject(obj) {
        obj['Open Tabs'] = [];
        obj['Recently Closed'] = [];
        obj['Browser Logs'] = [];
    }
}
browserHistory({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]

);
function fromJSONTtoHTMLTable(json) {
    let arr = JSON.parse(json);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(arr));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');

    return outputArr.join('\n');

    function makeKeyRow(arr) {
        let result = '  <tr>';
        Object.keys(arr[0]).forEach(key => {
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }

    function makeValueRow(obj) {
        let result = '  <tr>';
        Object.values(obj).forEach(value => {
            result += `<td>${escapeHtml(value.toString())}</td>`;
        });
        result += '</tr>';
        return result;
    }

    function escapeHtml(value) {
        return value.replace(/[<> &"]/g, (result) => {
            const map = {
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                " ": "&nbsp;",
                "\"": "&quot;",
            }
            if (map[result]) {
                return map[result];
            }
            return result;

        });
    }
}
fromJSONTtoHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`
)


function foo(input) {
    const data = {}

    const instr = {
        create: (name, inherits, n2) =>
            (data[name] = inherits ? Object.create(data[n2]) : {}),
        set: (name, key, value) => (data[name][key] = value),
        print: name => {
            const entry = []
            for (const keys in data[name]) {
                entry.push(`${keys}:${data[name][keys]}`)
            }
            console.log(entry.join(","))
        },
    }

    input.forEach(el => {
        const [command, name, key, value] = el.split(" ")

        instr[command](name, key, value)
    })
}
foo(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)
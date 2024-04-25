const envInput = document.querySelector("#env-input");
const envOutput = document.querySelector("#env-output");
const convertBtn = document.querySelector("#convert-env");
const copy = document.querySelector("#copy");
const copied = document.querySelector("#copied");

function convert() {
    const value = envInput.value;
    const lines = value.split("\n");
    let joined = [];
    lines.forEach((line) => {
        line = line.split("=");
        if (line.length === 2) {
            line = `"${line[0]}": "${line[1]}"`;
        }
        joined = [...joined, line]
    });
    const output = `{\n  "env":  {\n  ${joined.join("\n")}\n  }\n}`;
    envOutput.innerHTML = output;
    envOutput.classList.remove("hidden");
    return output;
}

const listener = envInput.addEventListener("input", function () {
    if (!envInput.length > 0) {
        if (convertBtn.attributes.getNamedItem("disabled")) {
            convertBtn.attributes.removeNamedItem("disabled");
        }
        if (copy.attributes.getNamedItem("disabled")) {
            copy.attributes.removeNamedItem("disabled");
        }
    }
})

convertBtn.addEventListener("click", convert)
copy.addEventListener("click", function () {
    const output = convert();
    navigator.clipboard.writeText(output);
    if (copied.classList.contains("hidden")) {
        copied.classList.remove("hidden");
    }
    setTimeout(() => {
        if (!copied.classList.contains("hidden")) {
            copied.classList.add("hidden");
        }
    }, 3000);
    console.log(copied.classList.contains("hidden"));
})

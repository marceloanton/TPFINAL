// Definir colores utilizando códigos de escape ANSI
const propertiesText = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    bold: "\x1b[1m",
    italy: "\x1b[3m",
    underline: "\x1b[4m",
    strikethrough: "\x1b[9m",
    inverse: "\x1b[7m",
    dim: "\x1b[2m",
    hidden: "\x1b[8m",
    clear: "\x1b[0m"
};

module.exports = { propertiesText };
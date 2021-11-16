export default class Lumifier {
    static calcLuma(hexColor: string) {
        if (!hexColor) return 0;
        hexColor = hexColor.replace("#", "");
        // handle possible color variations
        if (hexColor.length < 6) {
            if (hexColor.length === 3) {
                hexColor =
                    hexColor[0] +
                    hexColor[0] +
                    hexColor[1] +
                    hexColor[1] +
                    hexColor[2] +
                    hexColor[2];
            } else {
                return 0;
            }
        } else if (hexColor.length > 6) {
            hexColor = hexColor.slice(2, 8);
        }
        let r = Number.parseInt(hexColor.slice(0, 2), 16);
        let g = Number.parseInt(hexColor.slice(2, 4), 16);
        let b = Number.parseInt(hexColor.slice(4, 6), 16);
        return (0.299 * r + 0.587 * g + 0.144 * b) / 255;
    }

    static textColor(hexColor: string) {
        const l = Lumifier.calcLuma(hexColor);
        return `color: hsl(0, 0%, calc((${l} - 0.6) * -10000000%));`;
    }

    static lightenDarkenColor(col: string, amt: number) {

        var usePound = false;

        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }

        var num = parseInt(col, 16);

        var r = (num >> 16) + amt;

        if (r > 255) r = 255;
        else if (r < 0) r = 0;

        var b = ((num >> 8) & 0x00FF) + amt;

        if (b > 255) b = 255;
        else if (b < 0) b = 0;

        var g = (num & 0x0000FF) + amt;

        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }
}
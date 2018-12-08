/**
 * Generates a NACA 4 digit family airfoil.
 * @class
 * @author: Seçgin Karagülle <scgn.krgll@outlook.com>
 */
class Naca4DigitAirfoilGenerator {
    /**
     * Define an airfoil.
     * @param {string} profileCode - The profile code.
     * @param {number} numberOfPoints - Number of points
     * @param {boolean} closedTrailingEdge - Trailing edge case.
     */
    constructor(profileCode, numberOfPoints = 360, closedTrailingEdge = true) {

        this.profileCode = profileCode
        this.numberOfPoints = Math.floor(numberOfPoints * 0.5)
        this.closedTrailingEdge = closedTrailingEdge

        // define equation constants
        this.a0 = 0.2969
        this.a1 = -0.1260
        this.a2 = -0.3516
        this.a3 = 0.2843
        this.a4 = this.closedTrailingEdge ? -0.1036 : -0.1015

        // create non-uniform cosine spacing
        this.nonUniformSpace = this.createNonUniformSpace(this.numberOfPoints)
    }
    /**
     * Returns parsed max camber, max camber position and thickness
     * @param {string} profileCode 
     * @returns {Object} An object contains m, p, t
     */
    parseProfileCode(profileCode) {
        profileCode = profileCode.split('').map(char => parseInt(char))

        return {
            // m: max camber
            m: profileCode[0] * 0.01,
            // p: max camber pos
            p: profileCode[1] * 0.1,
            // t: thickness 
            t: profileCode[2] * 0.1 + profileCode[3] * 0.01
        }
    }

    /**
     * Returns a non-uniform cosine space
     * @param {number} numberOfPoints 
     * @returns {Array} spacing
     */
    createNonUniformSpace(numberOfPoints) {
        const nonUniformSpace = []
        const degree = Math.PI / (numberOfPoints - 1)

        for (let i = 0; i < numberOfPoints; i++) {
            nonUniformSpace.push((1 - Math.cos(degree * i)) / 2)
        }

        return nonUniformSpace
    }

    /**
     * Returns the generated airfoil abscissas and ordinates and camber line
     * @returns {Object} - Generated airfoil abscissas and ordinates and camber line
     */
    generate() {
        const { m, p, t } = this.parseProfileCode(this.profileCode)
        // camber line
        const yc = x => {
            // Front: 0 < x < p 
            if (x >= 0 && x < p)
                return (m / p ** 2) * ((2 * p * x) - x ** 2)
            // Back: p < x < 1
            else if (x >= p && x <= 1)
                return (m / (1 - p) ** 2) * (1 - (2 * p) + (2 * p * x) - (x ** 2))
        }

        // graident d(y_c)/dx
        const dyc_dx = x => {
            // Front: 0 < x < p
            if (x >= 0 && x < p)
                return ((2 * m) / (p ** 2)) * (p - x)
            // Back: p < x < 1
            else if (x >= p && x <= 1)
                return ((2 * m) / ((1 - p) ** 2)) * (p - x)
        }

        // thickness distribution
        const yt = x => t / 0.2 * (
            (this.a0 * Math.sqrt(x)) +
            (this.a1 * x) + (this.a2 * x ** 2) +
            (this.a3 * x ** 3) +
            (this.a4 * x ** 4))

        const theta = x => Math.atan(dyc_dx(x))

        // upper surface part
        const xu = x => x - yt(x) * Math.sin(theta(x))
        const yu = x => yc(x) + yt(x) * Math.cos(theta(x))

        // lower surface part
        const xl = x => x + yt(x) * Math.sin(theta(x))
        const yl = x => yc(x) - yt(x) * Math.cos(theta(x))

        const trace = {
            upperPart: [],
            lowerPart: [],
            camberLine: []
        }

        for (let i = 0; i < this.numberOfPoints; i++) {
            trace.upperPart.push({
                x: xu(this.nonUniformSpace[i]),
                y: yu(this.nonUniformSpace[i])
            })
            trace.lowerPart.push({
                x: xl(this.nonUniformSpace[i]),
                y: yl(this.nonUniformSpace[i])
            })
            trace.camberLine.push({
                x: this.nonUniformSpace[i],
                y: yc(this.nonUniformSpace[i])
            })
        }

        return trace
    }
}
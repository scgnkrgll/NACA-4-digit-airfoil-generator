const svg = document.querySelector('#chart')
const {width: viewBoxWidth, height: viewBoxHeight} = svg.viewBox.baseVal

const xOff = (viewBoxWidth - 1) * 0.5
const yOff = viewBoxHeight * 0.5

const naca4DigitGenerator = new Naca4DigitAirfoilGenerator("6412",360,true)
const coordinates = naca4DigitGenerator.generate()

const renderLine = (coords, xOff, yOff, polyLineId) => {
    const svgPolyLine = document.getElementById(polyLineId)
    let points = ""

    coords.forEach(coordinate => {
        points += `${coordinate.x + xOff}, ${yOff - coordinate.y} `
    })

    svgPolyLine.setAttribute('points', points)
}

renderLine(coordinates.upperPart.reverse().concat(coordinates.lowerPart), xOff, yOff, 'airfoil')
renderLine(coordinates.camberLine, xOff, yOff, 'camberLine')

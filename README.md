<a name="Naca4DigitAirfoilGenerator"></a>

## Naca4DigitAirfoilGenerator
Generates a NACA 4 digit family airfoil.

**Kind**: global class
**Author:**: Seçgin Karagülle <scgn.krgll@outlook.com>

* [Naca4DigitAirfoilGenerator](#Naca4DigitAirfoilGenerator)
    * [new Naca4DigitAirfoilGenerator(profileCode, numberOfPoints, closedTrailingEdge)](#new_Naca4DigitAirfoilGenerator_new)
    * [.parseProfileCode(profileCode)](#Naca4DigitAirfoilGenerator+parseProfileCode) ⇒ <code>Object</code>
    * [.createNonUniformSpace(numberOfPoints)](#Naca4DigitAirfoilGenerator+createNonUniformSpace) ⇒ <code>Array</code>
    * [.generate()](#Naca4DigitAirfoilGenerator+generate) ⇒ <code>Object</code>

<a name="new_Naca4DigitAirfoilGenerator_new"></a>

### new Naca4DigitAirfoilGenerator(profileCode, numberOfPoints, closedTrailingEdge)
Define an airfoil.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profileCode | <code>string</code> |  | The profile code. |
| numberOfPoints | <code>number</code> | <code>360</code> | Number of points |
| closedTrailingEdge | <code>boolean</code> | <code>true</code> | Trailing edge case. |

<a name="Naca4DigitAirfoilGenerator+parseProfileCode"></a>

### naca4DigitAirfoilGenerator.parseProfileCode(profileCode) ⇒ <code>Object</code>
Returns parsed max camber, max camber position and thickness

**Kind**: instance method of [<code>Naca4DigitAirfoilGenerator</code>](#Naca4DigitAirfoilGenerator)
**Returns**: <code>Object</code> - An object contains m, p, t

| Param | Type |
| --- | --- |
| profileCode | <code>string</code> |

<a name="Naca4DigitAirfoilGenerator+createNonUniformSpace"></a>

### naca4DigitAirfoilGenerator.createNonUniformSpace(numberOfPoints) ⇒ <code>Array</code>
Returns a non-uniform cosine space

**Kind**: instance method of [<code>Naca4DigitAirfoilGenerator</code>](#Naca4DigitAirfoilGenerator)
**Returns**: <code>Array</code> - spacing

| Param | Type |
| --- | --- |
| numberOfPoints | <code>number</code> |

<a name="Naca4DigitAirfoilGenerator+generate"></a>

### naca4DigitAirfoilGenerator.generate() ⇒ <code>Object</code>
Returns the generated airfoil abscissas and ordinates and camber line

**Kind**: instance method of [<code>Naca4DigitAirfoilGenerator</code>](#Naca4DigitAirfoilGenerator)
**Returns**: <code>Object</code> - - Generated airfoil abscissas and ordinates and camber line
<a name="Naca4DigitGenerator"></a>

## Naca4DigitGenerator
Generates a NACA 4 digit family airfoil.

**Kind**: global class
**Author:**: Seçgin Karagülle <scgn.krgll@outlook.com>

* [Naca4DigitGenerator](#Naca4DigitGenerator)
    * [new Naca4DigitGenerator(profileCode, numberOfPoints, closedTrailingEdge)](#new_Naca4DigitGenerator_new)
    * [.parseProfileCode(profileCode)](#Naca4DigitGenerator+parseProfileCode) ⇒ <code>Object</code>
    * [.createNonUniformSpace(numberOfPoints)](#Naca4DigitGenerator+createNonUniformSpace) ⇒ <code>Array</code>
    * [.generate()](#Naca4DigitGenerator+generate) ⇒ <code>Object</code>

<a name="new_Naca4DigitGenerator_new"></a>

### new Naca4DigitGenerator(profileCode, numberOfPoints, closedTrailingEdge)
Define an airfoil.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| profileCode | <code>string</code> |  | The profile code. |
| numberOfPoints | <code>number</code> | <code>360</code> | Number of points |
| closedTrailingEdge | <code>boolean</code> | <code>true</code> | Trailing edge case. |

<a name="Naca4DigitGenerator+parseProfileCode"></a>

### naca4DigitGenerator.parseProfileCode(profileCode) ⇒ <code>Object</code>
Returns parsed max camber, max camber position and thickness

**Kind**: instance method of [<code>Naca4DigitGenerator</code>](#Naca4DigitGenerator)
**Returns**: <code>Object</code> - An object contains m, p, t

| Param | Type |
| --- | --- |
| profileCode | <code>string</code> |

<a name="Naca4DigitGenerator+createNonUniformSpace"></a>

### naca4DigitGenerator.createNonUniformSpace(numberOfPoints) ⇒ <code>Array</code>
Returns a non-uniform cosine space

**Kind**: instance method of [<code>Naca4DigitGenerator</code>](#Naca4DigitGenerator)
**Returns**: <code>Array</code> - spacing

| Param | Type |
| --- | --- |
| numberOfPoints | <code>number</code> |

<a name="Naca4DigitGenerator+generate"></a>

### naca4DigitGenerator.generate() ⇒ <code>Object</code>
Returns the generated airfoil abscissas and ordinates and camber line

**Kind**: instance method of [<code>Naca4DigitGenerator</code>](#Naca4DigitGenerator)
**Returns**: <code>Object</code> - - Generated airfoil abscissas and ordinates and camber line
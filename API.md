## Modules

<dl>
<dt><a href="#module_node-object-hash/objectSorter">node-object-hash/objectSorter</a> : <code><a href="#module_node-object-hash/objectSorter..makeObjectSorter..objectToString">objectToString</a></code></dt>
<dd><p>Object sorter module. Returns object sorter function constructor.</p>
</dd>
<dt><a href="#module_node-object-hash">node-object-hash</a> : <code><a href="#module_node-object-hash..apiConstructor">apiConstructor</a></code></dt>
<dd><p>Node object hash module.</p>
</dd>
</dl>

<a name="module_node-object-hash/objectSorter"></a>

## node-object-hash/objectSorter : <code>[objectToString](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString)</code>
Object sorter module. Returns object sorter function constructor.


* [node-object-hash/objectSorter](#module_node-object-hash/objectSorter) : <code>[objectToString](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString)</code>
    * [~_guessObjectType(obj)](#module_node-object-hash/objectSorter.._guessObjectType) ⇒ <code>string</code> ℗
    * [~_guessType(obj)](#module_node-object-hash/objectSorter.._guessType) ⇒ <code>string</code> ℗
    * [~makeObjectSorter([options])](#module_node-object-hash/objectSorter..makeObjectSorter) ⇒ <code>[objectToString](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString)</code> ℗
        * [~objectToString(obj)](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString) ⇒ <code>string</code> ℗

<a name="module_node-object-hash/objectSorter.._guessObjectType"></a>

### node-object-hash/objectSorter~_guessObjectType(obj) ⇒ <code>string</code> ℗
Guesses object's type

**Kind**: inner method of <code>[node-object-hash/objectSorter](#module_node-object-hash/objectSorter)</code>  
**Returns**: <code>string</code> - Object type  
**Access:** private  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object to guess type |

**Example**  
```js
var a = [];
_guessObjectType(a) === 'array'; // true
```
<a name="module_node-object-hash/objectSorter.._guessType"></a>

### node-object-hash/objectSorter~_guessType(obj) ⇒ <code>string</code> ℗
Guesses variable type

**Kind**: inner method of <code>[node-object-hash/objectSorter](#module_node-object-hash/objectSorter)</code>  
**Returns**: <code>string</code> - Variable type  
**Access:** private  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | Variable to guess type |

**Example**  
```js
var a = '';
_guessType(a) === 'string'; // true
```
<a name="module_node-object-hash/objectSorter..makeObjectSorter"></a>

### node-object-hash/objectSorter~makeObjectSorter([options]) ⇒ <code>[objectToString](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString)</code> ℗
Creates object sorter function

**Kind**: inner method of <code>[node-object-hash/objectSorter](#module_node-object-hash/objectSorter)</code>  
**Returns**: <code>[objectToString](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString)</code> - Object sorting function  
**Access:** private  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Sorter options |
| [options.coerce] | <code>boolean</code> | <code>&quot;true&quot;</code> | Performs type coercion |
| [options.sort] | <code>boolean</code> | <code>&quot;true&quot;</code> | Performs array, object, etc. sorting |

**Example**  
```js
// with coercion
var sorter = makeObjectSorter({coerce: true, sort: false});
sorter(1) === "1"; // true
// with sort
var sorter = makeObjectSorter({coerce: false, sort: true});
sorter([2, 3, 1]) === [1, 2, 3]; // true
```
<a name="module_node-object-hash/objectSorter..makeObjectSorter..objectToString"></a>

#### makeObjectSorter~objectToString(obj) ⇒ <code>string</code> ℗
Object sorting function

**Kind**: inner method of <code>[makeObjectSorter](#module_node-object-hash/objectSorter..makeObjectSorter)</code>  
**Returns**: <code>string</code> - Sorted string  
**Access:** private  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>Object</code> | Object to sort |

<a name="module_node-object-hash"></a>

## node-object-hash : <code>[apiConstructor](#module_node-object-hash..apiConstructor)</code>
Node object hash module.


* [node-object-hash](#module_node-object-hash) : <code>[apiConstructor](#module_node-object-hash..apiConstructor)</code>
    * _instance_
        * [.sort(obj)](#module_node-object-hash+sort) ⇒ <code>string</code>
        * [.hash(obj, [opts])](#module_node-object-hash+hash) ⇒ <code>string</code>
    * _inner_
        * [~apiConstructor([options])](#module_node-object-hash..apiConstructor) ⇒ <code>[API](#module_node-object-hash..API)</code>
        * [~API](#module_node-object-hash..API) : <code>Object</code>

<a name="module_node-object-hash+sort"></a>

### node-object-hash.sort(obj) ⇒ <code>string</code>
Creates sorted string from given object

**Kind**: instance method of <code>[node-object-hash](#module_node-object-hash)</code>  
**Returns**: <code>string</code> - Sorted object string  
**Access:** public  
**See**: [objectToString](#module_node-object-hash/objectSorter..makeObjectSorter..objectToString)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>\*</code> | JS object to be sorted |

<a name="module_node-object-hash+hash"></a>

### node-object-hash.hash(obj, [opts]) ⇒ <code>string</code>
Creates hash from given object

**Kind**: instance method of <code>[node-object-hash](#module_node-object-hash)</code>  
**Returns**: <code>string</code> - Object hash value  
**Access:** public  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| obj | <code>\*</code> |  | JS object to hash |
| [opts] | <code>Object</code> |  | Options |
| [opts.alg] | <code>string</code> | <code>&quot;sha256&quot;</code> | Crypto algorithm to use |
| [opts.enc] | <code>string</code> | <code>&quot;hex&quot;</code> | Hash string encoding |

<a name="module_node-object-hash..apiConstructor"></a>

### node-object-hash~apiConstructor([options]) ⇒ <code>[API](#module_node-object-hash..API)</code>
Generates node-object-hash API object

**Kind**: inner method of <code>[node-object-hash](#module_node-object-hash)</code>  
**Returns**: <code>[API](#module_node-object-hash..API)</code> - Node object hash API instance  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Library options |
| [options.coerce] | <code>boolean</code> | <code>true</code> | Performs type coercion |
| [options.sort] | <code>boolean</code> | <code>true</code> | Performs array, object, etc. sorting |
| [options.alg] | <code>string</code> | <code>&quot;sha256&quot;</code> | Default crypto algorithm to use (can be overridden) |
| [options.enc] | <code>string</code> | <code>&quot;hex&quot;</code> | Hash string encoding (can be overridden) |

<a name="module_node-object-hash..API"></a>

### node-object-hash~API : <code>Object</code>
Node object hash API object

**Kind**: inner typedef of <code>[node-object-hash](#module_node-object-hash)</code>  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| hash | <code>function</code> | Returns object hash string (see [hash](#module_node-object-hash+hash)) |
| sort | <code>function</code> | Returns sorted object string (see [sort](#module_node-object-hash+sort)) |


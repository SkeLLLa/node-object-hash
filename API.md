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
**See**: [module:node-object-hash/objectSorter~makeObjectSorter~objectToString](module:node-object-hash/objectSorter~makeObjectSorter~objectToString)  

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
| hash | <code>function</code> | Returns object hash string (see [module:node-object-hash+hash](module:node-object-hash+hash)) |
| sort | <code>function</code> | Returns sorted object string (see [module:node-object-hash+sort](module:node-object-hash+sort)) |


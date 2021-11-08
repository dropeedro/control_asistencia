/// <reference path="../mindfusion-common/jscommon.d.ts" />
/// <reference path="../gauges-library/jsgauges.d.ts" />
/**
 * Copyright (c) 2015-2021, MindFusion LLC - Bulgaria.
 *
 * This source code is provided to you as part of the MindFusion software components
 * package you have purchased. You may use the source code to trace and/or fix
 * problems or customize the library as needed for your application. To get permission
 * to use the source code in any other way, please contact us at support@mindfusion.eu.
 */
declare module "chart-library" { export = MindFusion.Charting; }
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    class AnimationTimer {
        constructor(callback: any, autoStart?: boolean);
        stop(): void;
        start(): void;
        repeat(): void;
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    /**
    * @class Represents a dispatcher for an generic event.
    */
    interface IEventDispatcher<T extends EventArgs> {
        /**
        * Subcribes an event listener to this event.
        */
        addEventListener: (handler: (sender: any, args: T) => void) => void;
        /**
        * Removes an event listener from this event.
        */
        removeEventListener: (handler: (sender: any, args: T) => void) => void;
    }
    /**
    * @class Notifies clients that a property value has changed.
    */
    interface INotifyPropertyChanged {
        /**
         * Occurs when a property value changes.
         * @event INotifyPropertyChanged.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {INotifyPropertyChanged} sender
         * @property {PropertyChangedEventArgs} args
         */
        propertyChanged: PropertyChangedEventDispatcher;
    }
    /**
    * @class Notifies clients that a collection has changed.
    */
    interface INotifyCollectionChanged {
        /**
         * Occurs when a collection changes.
         * @event INotifyCollectionChanged.collectionChanged
         * @type {NotifyCollectionChangedEventDispatcher}
         * @property {INotifyCollectionChanged} sender
         * @property {NotifyCollectionChangedEventArgs} args
         */
        collectionChanged: NotifyCollectionChangedEventDispatcher;
    }
    /**
    * @class Notifies clients that a collection is changing.
    */
    interface INotifyCollectionChanging {
        /**
         * Occurs just before a collection changes.
         * @event INotifyCollectionChanging.collectionChanging
         * @type {NotifyCollectionChangingEventDispatcher}
         * @property {INotifyCollectionChanging} sender
         * @property {NotifyCollectionChangingEventArgs} args
         */
        collectionChanging: NotifyCollectionChangingEventDispatcher;
    }
    /**
    * @class Notifies clients that a property has changed.
    */
    interface INotifyPropertyValueChanged {
        /**
         * Occurs when a property changes.
         * @event INotifyPropertyValueChanged.collectionChanging
         * @type {EventDispatcher}
         * @property {INotifyPropertyValueChanged} sender
         * @property {PropertyEventArgs} args
         */
        propertyValueChanged: EventDispatcher<PropertyEventArgs>;
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    /**
    * @class Represents a dispatcher for an event.
    */
    class EventDispatcher<T extends EventArgs> implements IEventDispatcher<EventArgs> {
        /**
        * Subcribes an event listener to this event.
        */
        addEventListener(handler: (sender: any, args: T) => void): void;
        /**
        * Removes an event listener from this event.
        */
        removeEventListener(handler: (sender: any, args: T) => void): void;
        /**
        * Raises this event.
        */
        raiseEvent(sender: any, args: T): void;
    }
    /**
    * @class Represents a dispatcher for PropertyChanged events.
    */
    class PropertyChangedEventDispatcher extends EventDispatcher<PropertyChangedEventArgs> {
    }
    /**
    * @class Represents a dispatcher for NotifyCollectionChanged events.
    */
    class NotifyCollectionChangedEventDispatcher extends EventDispatcher<NotifyCollectionChangedEventArgs> {
    }
    /**
    * @class Represents a dispatcher for NotifyCollectionChanging events.
    */
    class NotifyCollectionChangingEventDispatcher extends EventDispatcher<NotifyCollectionChangingEventArgs> {
    }
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    /**
    * Describes an action that triggered a INotifyCollectionChanged.collectionChanged event.
    * @enum
    * @name NotifyCollectionChangedAction
    * @param [Add] Item was added to the collection.
    * @param [Remove] One or more items were removed from the collection.
    * @param [Reset] he contents of the collection changed dramatically.
    */
    export enum NotifyCollectionChangedAction {
        /**
        * Item was added to the collection.
        */
        Add = 0,
        /**
        * One or more items were removed from the collection.
        */
        Remove = 1,
        /**
        * The contents of the collection changed dramatically.
        */
        Reset = 2
    }
    var EventArgs: typeof MindFusion.EventArgs;
    export class EmptyEventArgs extends EventArgs {
        /** Initializes a new instance of the EmptyEventArgs class. */
        constructor();
    }
    export class ElapsedEventArgs extends EventArgs {
        /** Initializes a new instance of the ElapsedEventArgs class. */
        constructor();
        signalTime: Date;
    }
    /**
    * @class Provides data for PropertyChanged events.
    */
    export class PropertyChangedEventArgs extends EventArgs {
        /** Initializes a new instance of the PropertyChangedEventArgs class. */
        constructor(propertyName: string);
        /**
        * Gets the name of the property that changed.
        * @returns {string} The name of the property.
        */
        get propertyName(): string;
    }
    /**
    * @class Provides data for CollectionChanged events.
    */
    export class NotifyCollectionChangedEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the NotifyCollectionChangedEventArgs class.
        * @param {NotifyCollectionChangedAction} action The action that caused the event.
        * @param {Array} [changes] The items affected by the change.
        * @param {Number} [index] The index where the change occurred.
        */
        constructor(action: NotifyCollectionChangedAction, changes?: Array<any>, index?: number);
        /**
        * Gets the action that caused the vent.
        * @returns {NotifyCollectionChangedAction} The action that caused the event.
        */
        get action(): NotifyCollectionChangedAction;
        /**
        * Gets a list of the items affected by a Remove action.
        * @returns {Array} The list of affected items.
        */
        get oldItems(): Array<any>;
        /**
        * Gets the list of new items involved in the change.
        * @returns {Array} The list of involed items.
        */
        get newItems(): Array<any>;
    }
    /**
    * @class Provides data for CollectionChanging events.
    */
    export class NotifyCollectionChangingEventArgs extends EventArgs {
        /**
        * Initializes a new instance of the NotifyCollectionChangingEventArgs class.
        * @param {NotifyCollectionChangedAction} action The action that caused the event.
        * @param {Array} [changes] The items affected by the change.
        * @param {Number} [index] The index where the change occurred.
        */
        constructor(action: NotifyCollectionChangedAction, changes?: Array<any>, index?: number);
        /**
        * Gets the action that caused the event.
        * @returns {NotifyCollectionChangedAction} The action that caused the event.
        */
        get action(): NotifyCollectionChangedAction;
        /**
        * Gets a list of the items affected by a Remove action.
        * @returns {Array} The list of affected items.
        */
        get oldItems(): Array<any>;
        /**
        * Gets the list of new items involved in the change.
        * @returns {Array} The list of involed items.
        */
        get newItems(): Array<any>;
        /**
        * Gets a value indicating whether to allow the current operation.
        * @returns {Boolean} true to cancel the operation; otherwise, false.
        */
        getCancel(): boolean;
        /**
        * Sets a value indicating whether to allow the current operation.
        * @param {Boolean} value true to cancel the operation; otherwise, false.
        */
        setCancel(value: boolean): void;
    }
    /**
    * @class Provides data for PropertyValueChanged events.
    */
    export class PropertyEventArgs extends EventArgs {
        /**
        * Initlializes a new instance of the PropertyEventArgs class.
        * @param {String} propertyName The name of the property that changed.
        * @param {Object} oldValue The old value of the property.
        * @param {Object} newValue The new value of the property.
        */
        constructor(propertyName: string, oldValue: any, newValue: any);
        /**
        * Gets the name of the property that changed.
        */
        get propertyName(): string;
        /**
        * Gets the value of the property before the change.
        */
        get oldValue(): any;
        /**
        * Gets the current value of the property.
        */
        get newValue(): any;
    }
    export {};
}
/**
* @namespace MindFusion.Charting.Common
*/
declare namespace MindFusion.Charting.Common {
    class Timer {
        constructor(callback: any, interval?: number, autoRepeat?: boolean);
        start(): void;
        stop(): void;
        interval: number;
    }
}
/**
* @namespace MindFusion.Charting.Collections
*/
declare namespace MindFusion.Charting.Collections {
    /**
     * @class Represents an array of arbitrary objects.
     */
    class IEnumerable<T> {
        /**
         * Initializes a new instance of the IEnumerable class.
         * @param {Array<T>} [items] The underlying array data structure of the collection.
         */
        constructor(items?: Array<T>);
        /**
         * Gets the collection as an array.
        * @returns {Array<T>} The underlying array data structure of the collection.
        */
        items(): T[];
        /**
        * Gets the collection as an array in reverse order.
        * @returns {Array<T>} The underlying array data structure of the collection in reverse order.
        */
        reverse(): T[];
        /**
        * Gets the element at the given index.
        * @param {Number} index The index.
        * @returns {T} The element at the given index.
        */
        item(index: number): T;
        /**
        * Gets the number of elements.
        * @returns {Number} The number of elements.
        */
        count(): number;
        /**
        * Checks if the given element is present in the collection.
        * @param {T} item The object to check for.
        * @returns {Boolean} True if the element is found, otherwise false.
        */
        contains(item: T): boolean;
        /**
        * Adds an object to the end of the collection.
        * @param {T} item The object to add.
        */
        add(item: T): void;
        /**
        * Removes an element from the collection.
        * @param {T} item The object to remove.
        */
        remove(item: any): void;
        /**
        * Removes a range of elements starting from the given index.
        * @param {Number} index The starting index of the range.
        * @param {Number} count The length of the range.
        */
        removeRange(index: number, count: number): Array<T>;
        /**
        * Removes the element at the given index.
        * @param {Number} index The index.
        */
        removeAt(itemIndex: number): void;
        /**
        * Clears the collection.
        */
        clear(): void;
        /**
        * Creates a copy of the collection.
        * @returns {IEnumerable<T>} A copy of this collection.
        */
        clone(): MindFusion.Charting.Collections.IEnumerable<T>;
        /**
        * Copies a range of elements from this collection to a destination collection.
        * @param {IEnumerable<T>} destination The destination collection.
        * @param {Number} length The length of the range to copy.
        * @param {Number} [sourceIndex] The starting index of the range to copy.
        * @param {Number} [destinationIndex] The index at which the range should be copied.
        */
        copyTo(destination: MindFusion.Charting.Collections.IEnumerable<T>, length: number, sourceIndex?: number, destinationIndex?: number): void;
        /**
        * Sorts the underlying array.
        * @param {Function} [compareFn] The comparing function.
        */
        sort(compareFn?: (a: T, b: T) => number): void;
        /**
        * Gets the index of a given object in a collection.
        * @param {T} obj The object to look for.
        * @param {Number} [fromIndex] The starting index to search from.
        * @returns {Number} The index of the object, or -1 if the object is not present in the collection.
        */
        indexOfItem(obj: T, fromIndex?: number): number;
        /**
        * Adds an element to the collection at the specified index.
        * @param {Number} index The index.
        * @param {T} item The object to add.
        */
        insert(index: number, item: T): void;
        /**
        * Returns a new Object array, containing the contents of the collection.
        * @returns {Array<T>} The array.
        */
        toArray(): Array<T>;
        /**
        * Invokes a transform function on each item and returns the
        * maximum value in a sequence of numbers.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The maximum number in the sequence.
        */
        max(selector: (item: T) => number): number;
        /**
        * Invokes a transform function on each item and returns the
        * minimum value in a sequence of numbers.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The minimum number in the sequence.
        */
        min(selector: (item: T) => number): number;
        /**
        * Computes the sum of the sequence of number values that are
        * obtained by invoking a transform function on each element.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {Number} The sum of the number values in the sequence.
        */
        sum(selector: (item: T) => number): number;
        /**
        * Projects each element of a sequence into a new form.
        * @param {Function} selector A transform function to invoke on each element.
        * @returns {IEnumerable<T>} An collection whose elements are the result
        * of invoking the transform function on each element.
        */
        select(selector: (item: T) => any): MindFusion.Charting.Collections.IEnumerable<T>;
    }
    /**
     * @class Represents an array of arbitrary objects.
     */
    class List<T> extends IEnumerable<T> {
        /**
         * Initializes a new instance of the List class.
         * @param {Array<T>} [items] The underlying array data structure of the list.
         */
        constructor(items?: Array<T>);
    }
    /**
     * @class Represents a collection of keys and values.
     */
    class Dictionary<TKey, TValue> {
        /**
         * Initializes a new instance of the Dictionary class.
         */
        constructor();
        /**
        * Associates the specified value with the specified key within the dictionary.
        * @param {TKey} key The key to associate the value with.
        * @param {TValue} value The value to associate.
        */
        set(key: TKey, value: TValue): void;
        /**
        * Gets the value associated with the specified key within the dictionary.
        * @param {TKey} key The key whose value to get.
        */
        get(key: TKey): TValue;
        /**
        * Determines whether the dictionary contains a specific key.
        * @param {TKey} key The key to locate in the dictionary.
        * @returns {Boolean} true if the element exists in the collection, otherwise false.
        */
        contains(key: TKey): boolean;
        /**
        * Removes the element with the specified key from the dictionary.
        * @param {TKey} key The key of the element to remove.
        */
        remove(key: any): void;
        /** Gets the number of key/value pairs contained in the dictionary */
        get count(): number;
        /** Gets an array with all keys in the dictionary. */
        get keys(): MindFusion.Charting.Collections.List<TKey>;
        /** Gets an array with all values in the dictionary. */
        get values(): MindFusion.Charting.Collections.List<TValue>;
    }
    /**
     * @class Represents a collection of arbitrary objects.
     */
    class ObservableCollection<T> extends List<T> implements MindFusion.Charting.Common.INotifyPropertyChanged, MindFusion.Charting.Common.INotifyCollectionChanged, MindFusion.Charting.Common.INotifyCollectionChanging {
        /**
         * Initializes a new instance of the ObservableCollection class.
         * @param {Array<T>} [items] The underlying array data structure of the collection.
         */
        constructor(items?: Array<T>);
        /**
        * Raises the collectionChanged event.
        * @param {NotifyCollectionChangedEventArgs} args An instance of the NotifyCollectionChangedEventArgs class.
        */
        protected onCollectionChanged(args: MindFusion.Charting.Common.NotifyCollectionChangedEventArgs): void;
        /**
         * Occurs when a collection changes.
         * @event ObservableCollection<T>.collectionChanged
         * @type {NotifyCollectionChangedEventDispatcher}
         * @property {ObservableCollection<T>} sender
         * @property {NotifyCollectionChangedEventArgs} args
         */
        get collectionChanged(): MindFusion.Charting.Common.NotifyCollectionChangedEventDispatcher;
        /**
        * Raises the propertyChanged event.
        * @param {PropertyChangedEventArgs} args An instance of the PropertyChangedEventArgs class.
        */
        protected onPropertyChanged(args: MindFusion.Charting.Common.PropertyChangedEventArgs): void;
        /**
         * Occurs when a property value changes.
         * @event ObservableCollection<T>.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {ObservableCollection<T>} sender
         * @property {PropertyChangedEventArgs} args
         */
        get propertyChanged(): MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        /**
        * Raises the collectionChanging validation event.
        * @param {NotifyCollectionChangingEventArgs} args An instance of the NotifyCollectionChangingEventArgs class.
        */
        protected onCollectionChanging(args: MindFusion.Charting.Common.NotifyCollectionChangingEventArgs): boolean;
        /**
         * Occurs just before an item is added, removed, changed, moved, or the entire list is refreshed.
         * @event ObservableCollection<T>collectionChanging
         * @type {NotifyCollectionChangingEventDispatcher}
         * @property {ObservableCollection<T>} sender
         * @property {NotifyCollectionChangingEventArgs} args
         */
        get collectionChanging(): MindFusion.Charting.Common.NotifyCollectionChangingEventDispatcher;
        /**
         * Adds an object to the collection.
         * @param {T} item The item to add.
         */
        add(item: T): void;
        /**
         * Deletes an object from the collection
         * @param {T} item The item to remove.
         */
        remove(item: T): void;
        /**
         * Deletes a range of elements from the collection
         * @param {Number} index The starting index of the range to remove.
         * @param {Number} count The length of the range to remove.
         */
        removeRange(index: number, count: number): Array<T>;
        /**
         * Delete the element at the specified index.
         * @param {Number} itemIndex The index to remove at.
         */
        removeAt(itemIndex: number): void;
        /**
         * Clears the collection
         */
        clear(): void;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a color.
    */
    class Color {
        /**
         * Initializes a new instance of the Color class.
         * @param {String} value A string representation of the color.
         */
        constructor(value: string);
        /**
         * Creates a Color instance from alpha, red, green and blue values.
         * @param {Number} alpha The alpha value.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {MindFusion.Charting.Drawing.Color} The new Color instance.
         */
        static fromArgb(a: number, r: number, g: number, b: number): MindFusion.Charting.Drawing.Color;
        /**
         * Creates a Color instance from red, green and blue values.
         * @param {Number} red The red value.
         * @param {Number} green The green value.
         * @param {Number} blue The blue value.
         * @returns {MindFusion.Charting.Drawing.Color} The new Color instance.
         */
        static fromArgb(r: number, g: number, b: number): MindFusion.Charting.Drawing.Color;
        value: string;
        R: number;
        G: number;
        B: number;
        A: number;
        rgbValue: string;
        /**
         * The list of color names as defined by the CSS specification.
         */
        static knownColors: {
            AliceBlue: string;
            AntiqueWhite: string;
            Aqua: string;
            Aquamarine: string;
            Azure: string;
            Beige: string;
            Bisque: string;
            Black: string;
            BlanchedAlmond: string;
            Blue: string;
            BlueViolet: string;
            Brown: string;
            BurlyWood: string;
            CadetBlue: string;
            Chartreuse: string;
            Chocolate: string;
            Coral: string;
            CornflowerBlue: string;
            Cornsilk: string;
            Crimson: string;
            Cyan: string;
            DarkBlue: string;
            DarkCyan: string;
            DarkGoldenRod: string;
            DarkGray: string;
            DarkGrey: string;
            DarkGreen: string;
            DarkKhaki: string;
            DarkMagenta: string;
            DarkOliveGreen: string;
            DarkOrange: string;
            DarkOrchid: string;
            DarkRed: string;
            DarkSalmon: string;
            DarkSeaGreen: string;
            DarkSlateBlue: string;
            DarkSlateGray: string;
            DarkSlateGrey: string;
            DarkTurquoise: string;
            DarkViolet: string;
            DeepPink: string;
            DeepSkyBlue: string;
            DimGray: string;
            DimGrey: string;
            DodgerBlue: string;
            Feldspar: string;
            FireBrick: string;
            FloralWhite: string;
            ForestGreen: string;
            Fuchsia: string;
            Gainsboro: string;
            GhostWhite: string;
            Gold: string;
            GoldenRod: string;
            Gray: string;
            Grey: string;
            Green: string;
            GreenYellow: string;
            HoneyDew: string;
            HotPink: string;
            IndianRed: string;
            Indigo: string;
            Ivory: string;
            Khaki: string;
            Lavender: string;
            LavenderBlush: string;
            LawnGreen: string;
            LemonChiffon: string;
            LightBlue: string;
            LightCoral: string;
            LightCyan: string;
            LightGoldenRodYellow: string;
            LightGray: string;
            LightGrey: string;
            LightGreen: string;
            LightPink: string;
            LightSalmon: string;
            LightSeaGreen: string;
            LightSkyBlue: string;
            LightSlateBlue: string;
            LightSlateGray: string;
            LightSlateGrey: string;
            LightSteelBlue: string;
            lightyellow: string;
            Lime: string;
            LimeGreen: string;
            Linen: string;
            Magenta: string;
            Maroon: string;
            MediumAquaMarine: string;
            MediumBlue: string;
            MediumOrchid: string;
            MediumPurple: string;
            MediumSeaGreen: string;
            MediumSlateBlue: string;
            MediumSpringGreen: string;
            MediumTurquoise: string;
            MediumVioletRed: string;
            MidnightBlue: string;
            MintCream: string;
            MistyRose: string;
            Moccasin: string;
            NavajoWhite: string;
            Navy: string;
            OldLace: string;
            Olive: string;
            OliveDrab: string;
            Orange: string;
            OrangeRed: string;
            Orchid: string;
            PaleGoldenRod: string;
            PaleGreen: string;
            PaleTurquoise: string;
            PaleVioletRed: string;
            PapayaWhip: string;
            PeachPuff: string;
            Peru: string;
            Pink: string;
            Plum: string;
            PowderBlue: string;
            Purple: string;
            Red: string;
            RosyBrown: string;
            RoyalBlue: string;
            SaddleBrown: string;
            Salmon: string;
            SandyBrown: string;
            SeaGreen: string;
            SeaShell: string;
            Sienna: string;
            Silver: string;
            SkyBlue: string;
            SlateBlue: string;
            SlateGray: string;
            SlateGrey: string;
            Snow: string;
            SpringGreen: string;
            SteelBlue: string;
            Tan: string;
            Teal: string;
            Thistle: string;
            Tomato: string;
            Turquoise: string;
            Violet: string;
            VioletRed: string;
            Wheat: string;
            White: string;
            WhiteSmoke: string;
            Yellow: string;
            YellowGreen: string;
            Transparent: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class Utilities {
        static get v(): string;
        static rotateRect(rect: MindFusion.Drawing.Rect, pivot: MindFusion.Drawing.Point, angle: number): MindFusion.Drawing.Rect;
        static rotateSize(size: MindFusion.Drawing.Size, angle: number): MindFusion.Drawing.Size;
        static getCenter(rect: MindFusion.Drawing.Rect): MindFusion.Drawing.Point;
        static shellSort(data: number[]): number[];
        static shellSortByX(data: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>): MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>;
        static calcCircumferenceCoord(center: MindFusion.Drawing.Point, radius: number, angleDegrees: number): MindFusion.Drawing.Point;
        static calcPieBoundingRect(maxLeftLabelWidth: number, maxRightLabelWidth: number, leftLabelAngle: number, rightLabelAngle: number, radius: number): MindFusion.Drawing.Rect;
        static distance(p1: MindFusion.Drawing.Point, p2: MindFusion.Drawing.Point): number;
        static rad(degree: number): number;
        static deg(radians: number): number;
        static rotatePoint(pointToRotate: MindFusion.Drawing.Point, centerPoint: MindFusion.Drawing.Point, angleInDegrees: number): MindFusion.Drawing.Point;
        static opacityBrush(brush: MindFusion.Charting.Drawing.Brush, opacity: number): MindFusion.Charting.Drawing.Brush;
        static getShapePoly(point: MindFusion.Drawing.Point, shape: ScatterType, shapeSize: number): MindFusion.Drawing.Point[];
        static formatDateTime(ticks: number, dateTimeFormat: DateTimeFormat, customDateTimeFormat: string, labelPrefix: string, labelSuffix: string): string;
        static isInfinity(value: number): boolean;
        static isNullOrEmpty(value: string): boolean;
        static pointInEllipse(pt: MindFusion.Drawing.Point, rc: MindFusion.Drawing.Rect): boolean;
        static normalizeRect(rc: MindFusion.Drawing.Rect): MindFusion.Drawing.Rect;
        static pointInPolygon(poly: Array<MindFusion.Drawing.Point>, ptTest: MindFusion.Drawing.Point): boolean;
        static polyToRect(poly: Array<MindFusion.Drawing.Point>): MindFusion.Drawing.Rect;
        static pointInPolyRect(poly: Array<MindFusion.Drawing.Point>, ptTest: MindFusion.Drawing.Point, /*ref*/ rBound: {
            value: MindFusion.Drawing.Rect;
        }): boolean;
        static pointInRect(pt: MindFusion.Drawing.Point, rc: MindFusion.Drawing.Rect): boolean;
        static pointInSegment(pt: MindFusion.Drawing.Point, sgm1: MindFusion.Drawing.Point, sgm2: MindFusion.Drawing.Point): boolean;
        static intersect(p1: MindFusion.Drawing.Point, p2: MindFusion.Drawing.Point, p3: MindFusion.Drawing.Point, p4: MindFusion.Drawing.Point): boolean;
        static ccw(p0: MindFusion.Drawing.Point, p1: MindFusion.Drawing.Point, p2: MindFusion.Drawing.Point): number;
        static cartesianToPolar(coordCenter: MindFusion.Drawing.Point, point: MindFusion.Drawing.Point): {
            a: number;
            r: number;
        };
        static polarToCartesian(coordCenter: MindFusion.Drawing.Point, a: number, r: number): MindFusion.Drawing.Point;
        static cartesianToPolarDegrees(center: any, point: any): {
            a: number;
            r: number;
        };
        static polarToCartesianDegrees(center: any, polar: any): MindFusion.Drawing.Point;
        static format(str: string, ...replacements: any[]): string;
        static compareTo(num: number, other: number): number;
        static isFloat(n: number): boolean;
        static isInteger(n: number): boolean;
        static parseType(typeName: string): any;
        static registerType(obj: any, typeName: string): void;
        static getType(obj: any): any;
        static genId(): number;
    }
    class Serializer {
        static componentsIn: MindFusion.Charting.Collections.Dictionary<number, any>;
        static componentsOut: MindFusion.Charting.Collections.Dictionary<any, number>;
        static serializeComponent(component: any): any;
        static deserializeComponent(obj: any): any;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a brush.
    * @property {MindFusion.Charting.Drawing.Color} color Gets or sets the color of this Brush object.
    */
    class Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} color The color of this brush.
         */
        constructor(color: MindFusion.Charting.Drawing.Color | string);
        /**
         * Creates a copy of this brush.
         * @returns {MindFusion.Charting.Drawing.Brush} The copy of this brush.
         */
        clone(): MindFusion.Charting.Drawing.Brush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a Brush from a JSON object or string describing this brush.
         * @returns {Brush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Brush;
        /**
        * Determines whether the specified object is equal to this Brush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this Brush; otherwise, false.
        */
        equals(obj: any): boolean;
        /**
         * Gets the color of this brush.
         * @returns {MindFusion.Charting.Drawing.Color} The color of this brush.
         */
        get color(): MindFusion.Charting.Drawing.Color;
        /**
         * Sets the color of this brush.
         * @param {MindFusion.Charting.Drawing.Color} value The color of this brush.
         */
        set color(value: MindFusion.Charting.Drawing.Color);
    }
    /**
    * @class Represents a linear gradient brush.
    * @property {MindFusion.Charting.Drawing.Color} startColor Gets or sets the start color of the gradient.
    * @property {MindFusion.Charting.Drawing.Color} endColor Gets or sets the end color of the gradient.
    * @property {Number} angle Gets or sets angle of gradient rotation.
    */
    class LinearGradientBrush extends Brush {
        /**
         * Initializes a new instance of the Brush class.
         * @param {Color | string} startColor The starting color of the gradient.
             * @param {Color | string} endColor The ending color of the gradient.
         * @param {Number} [angle] The angle of the gradient.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds of the gradient.
         */
        constructor(startColor: MindFusion.Charting.Drawing.Color | string, endColor: MindFusion.Charting.Drawing.Color | string, angle?: number, bounds?: MindFusion.Drawing.Rect);
        /**
         * Creates a copy of this brush.
         * @returns {LinearGradientBrush} The copy of this brush.
         */
        clone(): LinearGradientBrush;
        /**
         * Applies the brush properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         * @param {MindFusion.Drawing.Rect} bounds The bounds of the gradient.
         */
        apply(context: CanvasRenderingContext2D, bounds: MindFusion.Drawing.Rect): void;
        /**
         * Returns a JSON object describing this brush.
         * @returns {Object} The object describing this brush.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toObject(): Object;
        /**
         * Returns a LinearGradientBrush from a JSON object or string describing this brush.
         * @returns {LinearGradientBrush} The brush object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Brush;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;
        /**
         * Gets the starting color of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The starting color of the gradient.
         */
        get startColor(): MindFusion.Charting.Drawing.Color;
        /**
         * Sets the starting color of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The starting color of the gradient.
         */
        set startColor(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets the ending color of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The ending color of the gradient.
         */
        get endColor(): MindFusion.Charting.Drawing.Color;
        /**
         * Sets the ending color of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The ending color of the gradient.
         */
        set endColor(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets the angle of the gradient.
         * @returns {MindFusion.Charting.Drawing.Color} The angle of the gradient.
         */
        get angle(): number;
        /**
         * Sets the angle of the gradient.
         * @param {MindFusion.Charting.Drawing.Color} value The angle of the gradient.
         */
        set angle(value: number);
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * Specifies the dash pattern of lines.
    * @enum
    * @name DashStyle
    * @param [Solid] Specifies a solid line.
    * @param [Dash] Specifies a line consisting of dashes.
    * @param [Dot] Specifies a line consisting of dots.
    * @param [DashDot] Specifies a dash-dot pattern.
    * @param [DashDotDot] Specifies a dash-dot-dot pattern.
    */
    enum DashStyle {
        Solid = 0,
        Dash = 1,
        Dot = 2,
        DashDot = 3,
        DashDotDot = 4,
        Custom = 5
    }
    /**
    * Specifies font style attributes.
    * @enum
    * @name FontStyle
    * @param [Regular] Normal text.
    * @param [Bold] Bold text.
    * @param [Italic] Italic text.
    * @param [Underline] Underlined text.
    */
    enum FontStyle {
        Regular = 0,
        Bold = 1,
        Italic = 2,
        Underline = 4,
        Strikeout = 8
    }
    /**
    * Specifies the alignment of a text string relative to its layout rectangle.
    * @enum
    * @name StringAlignment
    * @param [Near] The text is drawn in the near corner of the layout rectangle.
    * @param [Center] The text is drawn in the center of the layout rectangle.
    * @param [Far] The text is drawn in the far corner of the layout rectangle.le.
    */
    enum StringAlignment {
        Near = 0,
        Center = 1,
        Far = 2
    }
    /**
    * Specifies the position and alignment of a picture in a node, or that of the background image.
    * @enum
    * @name ImageAlign
    * @param [Center] The image is centered in the node or diagram.
    * @param [Fit] The image is resized to fit the size of the object or  the component's client area.
    * @param [Stretch] The image is stretched to fill the object or the component's client area.
    * @param [Tile] The image is tiled to cover the node or the diagram.
    * @param [TopLeft] The image is aligned to the top left corner of the node or the diagram.
    * @param [BottomLeft] The image is aligned to the bottom left corner of the node or the diagram.
    * @param [TopRight] The image is aligned to the top right corner of the node or the diagram.
    * @param [BottomRight] The image is aligned to the bottom right corner of the node or the diagram.
    * @param [TopCenter] The image is centered horizontally and aligned to the top side.
    * @param [BottomCenter] The image is centered horizontally and aligned to the bottom side.
    * @param [MiddleLeft] The image is centered vertically and aligned to the left-hand side.
    * @param [MiddleRight] The image is centered vertically and aligned to the right-hand side.
    */
    enum ImageAlign {
        Center = 0,
        Fit = 1,
        Stretch = 2,
        Tile = 3,
        TopLeft = 4,
        BottomLeft = 5,
        TopRight = 6,
        BottomRight = 7,
        TopCenter = 8,
        BottomCenter = 9,
        MiddleLeft = 10,
        MiddleRight = 11
    }
    /**
    * Specifies how to join consecutive line or curve segments in a figure.
    * @enum
    * @name LineJoin
    * @param [Miter] Produces a sharp corner or a clipped corner, depending on whether the length of the miter exceeds the miter limit.
    * @param [Bevel] Produces a diagonal corner.
    * @param [Round] Produces a smooth, circular arc between the lines.
    */
    enum LineJoin {
        Miter = 0,
        Bevel = 1,
        Round = 2
    }
    /**
    * @class Encapsulates text layout information.
    * @property {MindFusion.Charting.Drawing.StringAlignment} alignment Gets or sets the horizontal alignment of the text.
    * @property {MindFusion.Charting.Drawing.StringAlignment} lineAlignment Gets or sets the vertical alignment of the text.
    */
    class StringFormat {
        /**
        * Initializes a new instance of the StringFormat class.
        */
        constructor();
        alignment: StringAlignment;
        lineAlignment: StringAlignment;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a font.
    * @property {String} name Gets or sets the name of this Font.
    * @property {Number} size Gets or sets the size of this Font.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of this Font.
    */
    class Font {
        /**
        * Initializes a new instance of the Font class with the specified attributes.
        * @param {String} name The font name.
        * @param {Number} size The font size.
        * @param {MindFusion.Charting.Drawing.FontStyle} [fontStyle] The FontStyle
        */
        constructor(name: string, size: number, fontStyle?: FontStyle);
        /**
         * Applies the font properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Returns a string representation of this font.
         * @returns {String} The string representation of this font.
         */
        toString(): string;
        /**
         * Gets the name of this font.
         * @returns {String} The name of this font.
         */
        get name(): string;
        /**
         * Sets the name of this font.
         * @param {String} value The name of this font.
         */
        set name(value: string);
        /**
         * Gets the size of this font.
         * @returns {Number} The size of this font.
         */
        get size(): number;
        /**
         * Sets the size of this font.
         * @param {Number} value The size of this font.
         */
        set size(value: number);
        /**
         * Gets the style of this font.
         * @returns {MindFusion.Charting.Drawing.FontStyle} The style of this font.
         */
        get fontStyle(): FontStyle;
        /**
         * Sets the style of this font.
         * @param {MindFusion.Charting.Drawing.FontStyle} value The style of this font.
         */
        set fontStyle(value: FontStyle);
        static defaultFont: Font;
        /**
         * Returns a JSON object describing this font.
         * @returns {Object} The object describing this font.
         */
        toObject(): Object;
        /**
         * Returns a Font from a JSON object or string describing this font.
         * @returns {Font} The font object.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Font;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Represents a pen.
    * @property {MindFusion.Charting.Drawing.Color} color Gets or sets the color of this Pen.
    * @property {Number} width Gets or sets the width of this Pen.
    * @property {MindFusion.Charting.Drawing.DashStyle} dashStyle Gets or sets the dash style of this Pen.
    */
    class Pen {
        /**
         * Initializes a new instance of the Pen class.
         * @param {Brush | Color | string} brush The color of this pen.
         * @param {Number} [width] The width of this pen.
         */
        constructor(brush: MindFusion.Charting.Drawing.Brush | Color | string, width?: number);
        /**
         * Applies the pen properties to a CanvasRenderingContext2D drawing object.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        apply(context: CanvasRenderingContext2D): void;
        /**
         * Returns a string representation of this pen.
         * @returns {String} The string representation of this pen.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        toString(): string;
        /**
         * Returns a Pen from a string describing this pen.
         * @returns {Pen} The pen object.
         * @remarks Used for backward compatibility with the JSLib class.
         */
        static fromObject(obj: any): MindFusion.Charting.Drawing.Pen;
        /**
        * Determines whether the specified object is equal to this LinearGradientBrush.
        * @param {Object} The object to compare with.
        * @returns {Boolean} true if the specified object is equal to this LinearGradientBrush; otherwise, false.
        */
        equals(obj: any): boolean;
        /**
         * Gets the color of this pen.
         * @returns {MindFusion.Charting.Drawing.Color} The color of this pen.
         */
        get color(): MindFusion.Charting.Drawing.Color;
        /**
         * Sets the  color of this pen.
         * @param {MindFusion.Charting.Drawing.Color} value The color of this pen.
         */
        set color(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets the width of this pen.
         * @returns {Number} The width of this pen.
         */
        get width(): number;
        /**
         * Sets the width of this pen.
         * @param {Number} value The width of this pen.
         */
        set width(value: number);
        /**
         * Gets the dash style of this pen.
         * @returns {MindFusion.Charting.Drawing.DashStyle} The dash style of this pen.
         */
        get dashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Sets the line join of this pen.
         * @param {MindFusion.Charting.Drawing.DashStyle} value The line join of this pen.
         */
        set dashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets the line join of this pen.
         * @returns {MindFusion.Charting.Drawing.LineJoin} The line join of this pen.
         */
        get lineJoin(): LineJoin;
        /**
         * Sets the line join of this pen.
         * @param {MindFusion.Charting.Drawing.LineJoin} value The line join of this pen.
         */
        set lineJoin(value: LineJoin);
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    class Utils {
        static getCursorPos(e: any, element: HTMLElement): MindFusion.Drawing.Point;
        static getBounds(element: HTMLElement): MindFusion.Drawing.Rect;
        static getPageScroll(): {
            scrollLeft: number;
            scrollTop: number;
        };
        static cartesianToPolar(coordCenter: MindFusion.Drawing.Point, point: MindFusion.Drawing.Point): {
            a: number;
            r: number;
        };
        static polarToCartesian(coordCenter: MindFusion.Drawing.Point, a: number, r: number): MindFusion.Drawing.Point;
        static rad(degree: any): number;
        static getBoundingBox(points: MindFusion.Drawing.Point[]): MindFusion.Drawing.Rect;
        static formatString(value: string, params: string[]): string;
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.Drawing {
    /**
    * @class Contains helper functions for drawing on a Canvas element.
    * @property {CanvasRenderingContext2D} context Gets or sets the underlying CanvasRenderingContext2D drawing object.
    */
    class Graphics {
        /**
         * Initializes a new instance of the Graphics class.
         * @param {CanvasRenderingContext2D} context The CanvasRenderingContext2D drawing object.
         */
        constructor(context: CanvasRenderingContext2D);
        /**
         * Clears the canvas.
         */
        clear(): void;
        /**
         * Starts a new figure.
         * @param {MindFusion.Charting.Drawing.Pen} [pen] The pen to stroke the figure with.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The brush to fill the figure with.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds to which the brush should be applied.
         */
        beginFigure(pen?: MindFusion.Charting.Drawing.Pen, brush?: MindFusion.Charting.Drawing.Brush, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Closes the current figure.
         * @param {MindFusion.Charting.Drawing.Pen} [pen] The pen to stroke the figure with.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The brush to fill the figure with.
         * @param {MindFusion.Drawing.Rect} [bounds] The bounds to which the brush should be applied.
         */
        closeFigure(pen?: MindFusion.Charting.Drawing.Pen, brush?: MindFusion.Charting.Drawing.Brush, bounds?: MindFusion.Drawing.Rect): void;
        /**
         * Draws a straight line.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the line with.
         * @param {MindFusion.Drawing.Point} point1 The starting point of the line.
         * @param {MindFusion.Drawing.Point} point2 The ending point of the line.
         */
        drawLine(pen: MindFusion.Charting.Drawing.Pen, point1: MindFusion.Drawing.Point, point2: MindFusion.Drawing.Point): any;
        /**
        * Draws a straight line.
        * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the line with.
        * @param {Number} x1 The X coordinate of the starting point of the line.
        * @param {Number} y1 The Y coordinate of the starting point of the line.
        * @param {Number} x2 The X coordinate of the ending point of the line.
        * @param {Number} y2 The Y coordinate of the ending point of the line.
        */
        drawLine(pen: MindFusion.Charting.Drawing.Pen, x1: number, y1: number, x2: number, y2: number): any;
        /**
         * Draws a series of straight lines.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the lines with.
         * @param {MindFusion.Drawing.Point[]} points The points of the lines to draw.
         */
        drawLines(pen: MindFusion.Charting.Drawing.Pen, points: MindFusion.Drawing.Point[]): void;
        /**
         * Draws a polygon.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to draw the polygon with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the polygon.
         */
        drawPolygon(pen: MindFusion.Charting.Drawing.Pen, points: MindFusion.Drawing.Point[]): void;
        /**
         * Fills a polygon.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the polygon with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the polygon.
         */
        fillPolygon(brush: MindFusion.Charting.Drawing.Brush, points: MindFusion.Drawing.Point[]): void;
        /**
         * Draws a string.
         * @param {String} text The string to draw.
         * @param {MindFusion.Drawing.Font} font The font to use.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to use.
         * @param {Point|Rect} location The position at which to draw.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] The format to use.
         */
        drawString(text: string, font: Font, brush: MindFusion.Charting.Drawing.Brush, location: MindFusion.Drawing.Point | MindFusion.Drawing.Rect, format?: StringFormat): void;
        /**
        * Draws a spline curve.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the curve with.
         * @param {MindFusion.Drawing.Point[]} points The points describing the curve.
        */
        drawCurve(pen: MindFusion.Charting.Drawing.Pen, points: MindFusion.Drawing.Point[]): void;
        /**
         * Draws a rectangle.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the rectangle with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle to draw.
         */
        drawRectangle(pen: MindFusion.Charting.Drawing.Pen, rect: MindFusion.Drawing.Rect): void;
        /**
         * Fills a rectangle.
         * @param {MindFusion.Charting.Drawing.Brush} brush The pen to fill the rectangle with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle to fill.
         */
        fillRectangle(brush: MindFusion.Charting.Drawing.Brush, rect: MindFusion.Drawing.Rect): void;
        /**
         * Draws an ellipse.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the ellipse with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle describing the ellipse.
         */
        drawEllipse(pen: MindFusion.Charting.Drawing.Pen, rect: MindFusion.Drawing.Rect): void;
        /**
         * Fills an ellipse.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the ellipse with.
         * @param {MindFusion.Drawing.Rect} rect The rectangle describing the ellipse.
         */
        fillEllipse(brush: MindFusion.Charting.Drawing.Brush, rect: MindFusion.Drawing.Rect): void;
        /**
         * Draws a pie.
         * @param {MindFusion.Charting.Drawing.Pen} pen The pen to stroke the pie with.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        drawPie(pen: MindFusion.Charting.Drawing.Pen, rect: MindFusion.Drawing.Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Fills a pie.
         * @param {MindFusion.Charting.Drawing.Brush} brush The brush to fill the pie with.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie should be a doughnut, otherwise false.
         */
        fillPie(brush: MindFusion.Charting.Drawing.Brush, rect: MindFusion.Drawing.Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): void;
        /**
         * Draws an image.
         * @param {HTMLImageElement} image The image to draw.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the image.
         * @param {MindFusion.Charting.Drawing.ImageAlign} align The align to use.
         */
        drawImage(image: HTMLImageElement, rect: MindFusion.Drawing.Rect, align: ImageAlign): void;
        /**
         * Checks if the given point is within the bounds of the given polygon.
         * @param {MindFusion.Drawing.Point} point The point to check.
         * @param {MindFusion.Drawing.Point[]} poly The points describing the polygon.
         * @returns {boolean] True if the point lies within polygon bounds, otherwise false.
         */
        pointInPoly(point: MindFusion.Drawing.Point, poly: MindFusion.Drawing.Point[]): boolean;
        /**
         * Checks if the given point is within the bounds of the given pie.
         * @param {MindFusion.Drawing.Point} point The point to check.
         * @param {MindFusion.Drawing.Rect} rect The bounds of the pie.
         * @param {Number} radius The radius of the pie.
         * @param {Number} startAngle The startAngle of the pie.
         * @param {Number} endAngle The endAngle of the pie.
         * @param {Boolean} [doughnut] True if the pie is a doughnut, otherwise false.
         * @returns {Boolean} True if the point lies within pie bounds, otherwise false.
         */
        pointInPie(point: MindFusion.Drawing.Point, rect: MindFusion.Drawing.Rect, radius: number, startAngle: number, endAngle: number, doughnut?: boolean): boolean;
        /**
         * Saves the current graphics state.
         */
        save(): void;
        /**
         * Restores to a previously saved graphics state.
         */
        restore(): void;
        /**
         * Sets the clip rectangle.
         * @param {MindFusion.Drawing.Rect} rect The clip rectangle
         */
        clip(rect: MindFusion.Drawing.Rect): void;
        /**
         * Sets a translate transform.
         * @param {Number} x The distance to translate along the x-axis.
         * @param {Number} y The distance to translate along the y-axis.
         */
        translate(x: number, y: number): void;
        /**
         * Sets a transform.
         * @param {MindFusion.Drawing.Matrix} transform The transform matrix.
         */
        setTransform(transform: MindFusion.Drawing.Matrix): void;
        /**
         * Gets the size of the specified string.
         * @param {String} text The string to measure.
         * @param {MindFusion.Drawing.Font} font The font to use.
         * @param {Number} [width] The maximum width.
         * @returns {MindFusion.Drawing.Size} The size of the given string when drawn with the given font.
         */
        measureString(text: string, font: Font, width?: number): MindFusion.Drawing.Size;
        /**
         * Gets the underlying CanvasRenderingContext2D object.
         * @returns {CanvasRenderingContext2D} The underlying CanvasRenderingContext2D object.
         */
        get context(): CanvasRenderingContext2D;
        /**
         * Sets the underlying CanvasRenderingContext2D object.
         * @param {CanvasRenderingContext2D} value The underlying CanvasRenderingContext2D object.
         */
        set context(value: CanvasRenderingContext2D);
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    /**
     * @class Represents an action that modifies an object and whose effects can be undone.
     */
    abstract class Command {
        /**
         * Initializes a new instance of the Command class.
         * @param {UndoManager} manager The UndoManager that contains this command.
         */
        constructor(manager: UndoManager);
        /**
         * A shortcut method for executing the command through the undo engine.
         */
        commit(): void;
        /**
         * Carries out an action that changes the workbook in some way.
         */
        abstract execute(): boolean;
        /**
         * Undoes an action, restoring the workbook to the state it was in
         * before carrying out the action.
         */
        abstract undo(): void;
        /**
         * Repeats an action that has been undone.
         */
        abstract redo(): void;
        /**
         * Gets the UndoManager that contains this command.
         */
        get manager(): UndoManager;
        /**
         * Sets the UndoManager that contains this command.
         */
        set manager(value: UndoManager);
        /**
         * Gets a value indicating whether the command does anything.
         */
        get hasEffect(): boolean;
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    /**
     * @class Represents a command that implements the IDisposable interface.
     */
    abstract class DisposableCommand extends Command {
        /**
         * Initializes a new instance of the DisposableCommand class.
         * @param {UndoManager} manager The UndoManager that contains this command.
         */
        constructor(manager: UndoManager);
        /**
         * IDisposable.Dispose implementation.
         */
        dispose(): void;
        /**
         * Disposes of this command.
         */
        clean(): void;
        /**
         * Command.Execute override.
         */
        execute(): boolean;
        /**
         * Cancels the command.
         */
        cancel(): void;
        /**
         * Command.Undo override.
         */
        undo(): void;
        /**
         * Command.Redo override.
         */
        redo(): void;
        get executed(): boolean;
        set executed(value: boolean);
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    abstract class ObjectChange {
        abstract apply(): void;
        abstract revert(): void;
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    class PropertyChange extends ObjectChange {
        constructor(target: Object, propertyName: string, oldValue: Object, newValue: Object);
        apply(): void;
        revert(): void;
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    /**
     * @class Represents a command that can track and undo changes of
     * INotifyPropertyValueChanged objects.
     */
    class TrackChangesCommand extends DisposableCommand {
        constructor(manager: UndoManager, target: MindFusion.Charting.Common.INotifyPropertyValueChanged);
        clean(): void;
        registerChange(change: ObjectChange): void;
        /**
         * DisposableCommand.Undo override.
         */
        undo(): void;
        /**
         * DisposableCommand.Redo override.
         */
        redo(): void;
        /**
         * Called before undoing or redoing the command.
         */
        beginChange(): void;
        /**
         * Called after undoing or redoing the command.
         */
        endChange(): void;
        /**
         * Command.HasEffect override.
         */
        get hasEffect(): boolean;
    }
    interface ISupportInitialize {
        beginInit(): void;
        endInit(): void;
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare var EventArgs: typeof MindFusion.EventArgs;
declare namespace MindFusion.Charting.Commands {
    /**
     * @class Contains the arguments passed to the ActionUndone and ActionRedone event handlers.
     */
    class UndoEventArgs extends EventArgs {
        /**
         * Initializes a new instance of the UndoEventArgs class.
         * @param {Command} command The Command related to the event.
         */
        constructor(command: Command);
        /**
         * Gets a reference to the Command instance related to the event being handled.
         */
        get command(): Command;
        /**
         * Gets a reference to the Command instance related to the event being handled.
         */
        set command(value: Command);
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    class UndoManager {
        constructor();
        executeCommand(command: Command): void;
        startComposite(): CompositeCommand;
        endComposite(addToHistory?: boolean): void;
        /**
         * Creates a Command object to track subsequent changes on the specified target.
         * @param {INotifyPropertyValueChanged} target The object to track.
         * @returns {TrackChangesCommand} A TrackChangesCommand that is used to track the changes, or null, if undo is disabled.
         *
         */
        startChangeOperation(target: any): TrackChangesCommand;
        /**
         * Stops tracking changes by the specified command and reverts all changes done so far.
         */
        cancelChangeOperation(command: TrackChangesCommand): void;
        /**
         * Stops tracking changes by the specified command and saves the command in the history queue.
         */
        commitChangeOperation(command: TrackChangesCommand): void;
        undo(): void;
        redo(): void;
        raiseActionUndone(c: Command): void;
        raiseActionRedone(c: Command): void;
        onActionUndone(e: UndoEventArgs): void;
        onActionRedone(e: UndoEventArgs): void;
        get canUndo(): boolean;
        get canRedo(): boolean;
        get actionRedone(): Common.EventDispatcher<UndoEventArgs>;
        get actionUndone(): Common.EventDispatcher<UndoEventArgs>;
    }
}
/**
* @namespace MindFusion.Charting.Commands
*/
declare namespace MindFusion.Charting.Commands {
    /**
     * @class Represents a set of Command instances as a single operation.
     * Undoing or redoing the composite action, respectively undoes or
     * redoes all its constituent subactions at the same time.
     */
    class CompositeCommand extends DisposableCommand {
        /**
         * Initializes a new instance of the CompositeCommand class.
         * @param {UndoManager} manager The UndoManager that contains this command.
         */
        constructor(manager: UndoManager);
        /**
         * DisposableCommand.Execute override.
         */
        execute(): boolean;
        /**
         * Command.Undo override.
         */
        undo(): void;
        /**
         * Command.Redo override.
         */
        redo(): void;
        /**
         * Gets a list containing the child Command objects.
         */
        get commands(): MindFusion.Charting.Collections.List<Command>;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    interface AutoSize {
        measuredSize(): number;
        relativeSize(): boolean;
        setPos(value: number): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Contains arguments passed to the CustomDraw event of buttons.
    * @property {MindFusion.Charting.Drawing.Graphics} graphics Gets the Graphics surface where the event handler should draw.
    * @property {MindFusion.Drawing.Rect} clipBounds Gets the current clip rectangle.
     */
    class ButtonDrawEventArgs extends EventArgs {
        constructor(graphics: MindFusion.Charting.Drawing.Graphics, clipBounds: MindFusion.Drawing.Rect);
        /**
         * Gets the Graphics surface where the event handler should draw.
         */
        get graphics(): MindFusion.Charting.Drawing.Graphics;
        /**
         * Gets the Graphics surface where the event handler should draw.
         */
        set graphics(value: MindFusion.Charting.Drawing.Graphics);
        /**
         * Gets the current clip rectangle.
         */
        get clipBounds(): MindFusion.Drawing.Rect;
        /**
         * Gets the current clip rectangle.
         */
        set clipBounds(value: MindFusion.Drawing.Rect);
    }
    /**
    * @class Represents a dispatcher for ButtonDraw events.
    */
    class ButtonDrawEventDispatcher extends MindFusion.Charting.Common.EventDispatcher<ButtonDrawEventArgs> {
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a user interface component.
    * @property {Number} desiredWidth Gets a nullable number value specifying the component's desired width. Valid only after calling measure.
    * @property {Number} desiredHeight Gets a nullable number value specifying the component's desired height. Valid only after calling measure.
    * @property {Number} actualWidth Gets a number value specifying the component's assigned width. Valid only after calling arrange.
    * @property {Number} actualHeight Gets a number value specifying the component's assigned height. Valid only after calling arrange.
    * @property {Number} xInParent Gets a number value specifying the component's horizontal position relative to its parent.
    * @property {Number} yInParent Gets a number value specifying the component's vertical position relative to its parent.
    * @property {Number} rectInParent Gets the boundaries of this component relative to its parent.
    * @property {Number} gridRow Gets or sets the row index of this component when placed inside a GridPanel.
    * @property {Number} gridColumn Gets or sets the column index of this component when placed inside a GridPanel.
    * @property {LayoutAlignment} horizontalAlignment Gets or sets the horizontal alignment of this component inside the layout rectangle allocated by its parent panel.
    * @property {LayoutAlignment} verticalAlignment Gets or sets the vertical alignment of this component inside the layout rectangle allocated by its parent panel.
    * @property {Margins} margin Gets the margin space around this component relative to the layout rectangle allocated by its parent panel.
    * @property {Visibility} visibility Gets or sets the visibility of this component.
    * @property {HitTestVisibility} hitTestVisibility Gets or sets the hit-test visibility of this component.
    * @property {String} toolTip Gets or sets the component's tooltip text.
    * @property {Number} width Gets or sets a fixed width for this component.
    * @property {Number} height Gets or sets a fixed height for this component.
    */
    abstract class Component {
        /**
         * Initializes a new instance of the Component class.
         */
        constructor();
        /**
         * Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Arranges a child component in specified layout rectangle.
         * @param {Component} child A Component instance specifying the child to arrange.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Number} x Layout rectangle's horizontal position.
         * @param {Number} y Layout rectangle's vertical position.
         * @param {Number} w Layout rectangle's width.
         * @param {Number} h Layout rectangle's height.
         */
        arrangeInRect(child: Component, context: RenderContext, x: number, y: number, w: number, h: number): void;
        /**
         * Returns a ComponentController used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        /**
         * Invoked while the mouse is moved to let your application set the mouse cursor.
         * @param {Number} x A double value specifying the horizontal position of mouse pointer.
         * @param {Number} y A double value specifying the vertical position of mouse pointer.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): CursorHint;
        /**
         * Sums specified nullable number values.
         * @param {Number} value1 The first term to sum.
         * @param {Number} value2 The second term to sum.
         * @returns {Number} A nullable number value representing the sum.
         */
        add(value1?: number, value2?: number): number;
        /**
         * Returns the larger of specified values.
         * @param {Number} value1 The first value to compare.
         * @param {Number} value2 The second value to compare.
         * @returns {Number} A nullable number value representing the larger value.
         */
        max(value1?: number, value2?: number): number;
        /**
         * Implements the visitor design pattern.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Returns the component containing specified point.
         * @param {Number} x X coordinate of the point to test.
         * @param {Number} y Y coordinate of the point to test.
         * @returns {Component} A Component instance if one contains the point, or null otherwise.
         */
        hitTest(x: number, y: number): Component;
        localToParent(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        parentToLocal(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Transforms the specified point to the coordinate system of the root panel.
         * @param {MindFusion.Drawing.Point} point A Point instance containing coordinates local to this component.
         * @returns {MindFusion.Drawing.Point} A Point instance containing coordinates relative to the root panel.
         */
        localToRoot(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Transforms the specified point to the coordinate system of this component.
         * @param {MindFusion.Drawing.Point} point A Point instance containing coordinates relative to the root panel.
         * @returns {MindFusion.Drawing.Point} A Point instance containing coordinates local to this component.
         */
        rootToLocal(point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Invalidates the current layout and runs a new layout pass before next draw operation.
         */
        invalidateLayout(): void;
        /**
         * Invalidates the appearance of this component and calls its Draw method at next draw operation.
         * @param {MindFusion.Drawing.Rect} [rect] A RectD instance specifying the invalid rectangle.
         */
        invalidate(rect?: MindFusion.Drawing.Rect): void;
        /**
         * Gets a nullable number value specifying the component's desired width. Valid only after calling Measure.
         */
        get desiredWidth(): number;
        /**
         * Sets a nullable number value specifying the component's desired width. Valid only after calling Measure.
         */
        set desiredWidth(value: number);
        /**
         * Gets a nullable number value specifying the component's desired height. Valid only after calling Measure.
         */
        get desiredHeight(): number;
        /**
         * Sets a nullable number value specifying the component's desired height. Valid only after calling Measure.
         */
        set desiredHeight(value: number);
        /**
         * TGets a number value specifying the component's assigned width. Valid only after calling Arrange.
         */
        get actualWidth(): number;
        /**
         * Sets a number value specifying the component's assigned width. Valid only after calling Arrange.
         */
        set actualWidth(value: number);
        /**
         * Gets a number value specifying the component's assigned height. Valid only after calling Arrange.
         */
        get actualHeight(): number;
        /**
         * Sets a number value specifying the component's assigned height. Valid only after calling Arrange.
         */
        set actualHeight(value: number);
        /**
         * Gets a number value specifying the component's horizontal position relative to its parent.
         */
        get xInParent(): number;
        /**
         * Sets a number value specifying the component's horizontal position relative to its parent.
         */
        set xInParent(value: number);
        /**
         * A number value specifying the component's vertical position relative to its parent.
         */
        get yInParent(): number;
        /**
         * A number value specifying the component's vertical position relative to its parent.
         */
        set yInParent(value: number);
        /**
         * Gets the boundaries of this component relative to its parent.
         */
        get rectInParent(): MindFusion.Drawing.Rect;
        /**
         * Gets or sets the row index of this component when placed inside a GridPanel.
         */
        get gridRow(): number;
        /**
         * Gets or sets the row index of this component when placed inside a GridPanel.
         */
        set gridRow(value: number);
        /**
         * Gets or sets the column index of this component when placed inside a GridPanel.
         */
        get gridColumn(): number;
        /**
         * Gets or sets the column index of this component when placed inside a GridPanel.
         */
        set gridColumn(value: number);
        get parent(): Component;
        set parent(value: Component);
        /**
         * Gets the horizontal alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        get horizontalAlignment(): LayoutAlignment;
        /**
         * Sets the horizontal alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        set horizontalAlignment(value: LayoutAlignment);
        /**
         * Gets the vertical alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        get verticalAlignment(): LayoutAlignment;
        /**
         * Sets the vertical alignment of this component inside the
         * layout rectangle allocated by its parent panel.
         */
        set verticalAlignment(value: LayoutAlignment);
        /**
         * Gets the margin space around this component relative to the
         * layout rectangle allocated by its parent panel.
         */
        get margin(): Margins;
        /**
         * Sets the margin space around this component relative to the
         * layout rectangle allocated by its parent panel.
         */
        set margin(value: Margins);
        /**
         * Gets the visibility of this component.
         */
        get visibility(): Visibility;
        /**
         * Sets the visibility of this component.
         */
        set visibility(value: Visibility);
        /**
         * Gets the hit-test visibility of this component.
         */
        get hitTestVisibility(): HitTestVisibility;
        /**
         * Sets the hit-test visibility of this component.
         */
        set hitTestVisibility(value: HitTestVisibility);
        /**
         * Gets the component's tooltip text.
         */
        get toolTip(): string;
        /**
         * Sets the component's tooltip text.
         */
        set toolTip(value: string);
        /**
         * Gets a fixed width for this component.
         */
        get width(): number;
        /**
         * Sets a fixed width for this component.
         */
        set width(value: number);
        /**
         * Gets or sets a fixed height for this component.
         */
        get height(): number;
        /**
         * Gets or sets a fixed height for this component.
         */
        set height(value: number);
        desiredWidthMargins(): number;
        desiredHeightMargins(): number;
        effectiveMeasuredWidth(): number;
        effectiveMeasuredHeight(): number;
        m_id: number;
        id(): number;
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Represents an animation.
     */
    interface ComponentAnimation {
        /**
         * Stops this animation.
         */
        stop(): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Defines the interface that controller classes should implement
     * to get user input from the Dashboard control.
     */
    interface ComponentController {
        /**
         * Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * Called when the user scrolls with the middle mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Draws a representation of the current state of user interaction on specified Graphics surface.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
        /**
         * Invoked while the mouse is moved to let your application set the mouse cursor.
         * @param {Number} x A double value specifying the horizontal position of mouse pointer.
         * @param {Number} y A double value specifying the vertical position of mouse pointer.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): CursorHint;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): ComponentAnimation;
        /**
         * Gets the component modified by this ComponentController.
         */
        component: Component;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Defines the base visitor class for hierarchy of Component objects.
     */
    class ComponentVisitor {
        constructor();
        /**
         * Visits a Panel component.
         * @param panel A Panel instance.
         */
        visitPanel(panel: Panel): void;
        /**
         * Visits a Plot component.
         * @param {Plot} plot A Plot instance.
         */
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Specifies what mouse cursor to display while a user interacts with the control.
    * @enum
    * @name CursorHint
    * @param [Move] Indicates the cursor specified by the MoveCursor property.
    * @param [Rotate] Indicates the cursor specified by the RotateCursor property.
    * @param [HorizontalResize] Indicates the cursor specified by the HorizontalResizeCursor property.
    * @param [VerticalResize] Indicates the cursor specified by the VerticalResize property.
    * @param [DiagonalResize] Indicates the cursor specified by the DiagonalResize property.
    * @param [CounterDiagonalResize] Indicates the cursor specified by the CounterDiagonalResize property.
    * @param [Pointer] Indicates the cursor specified by the PointerCursor property.
    * @param [Disallow] Indicates the cursor specified by the DisallowCursor property.
    * @param [DontChange] Indicates the cursor specified by the Cursor property.
    */
    enum CursorHint {
        /**
         * Indicates the cursor specified by the MoveCursor property.
         */
        Move,
        /**
         * Indicates the cursor specified by the RotateCursor property.
         */
        Rotate,
        /**
        * Indicates the cursor specified by the HorizontalResizeCursor property.
        */
        HorizontalResize,
        /**
         * Indicates the cursor specified by the VerticalResizeCursor property.
         */
        VerticalResize,
        /**
        * Indicates the cursor specified by the DiagonalResizeCursor property.
        */
        DiagonalResize,
        /**
         * Indicates the cursor specified by the CounterDiagonalResizeCursor property.
         */
        CounterDiagonalResize,
        /**
        * Indicates the cursor specified by the PointerCursor property.
        */
        Pointer,
        /**
         * Indicates the cursor specified by the DisallowCursor property.
         */
        NotAllowed,
        /**
        * Indicates the cursor specified by the Cursor property.
        */
        DontChange,
        /**
        * Indicates the default browser cursor
        */
        Default
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Identifies hit-test visibility of a component.
    * @enum
    * @name HitTestVisibility
    * @param [HitTestVisibility] Do not participate in hit-testing.
    * @param [Children] Only hit-test child components.
    * @param [SelfAndChildren] Hit-test this component and its children.
    */
    enum HitTestVisibility {
        /**
         * Do not participate in hit-testing.
         */
        Hidden = 0,
        /**
         * Only hit-test child components.
         */
        Children = 1,
        /**
         * Hit-test this component and its children.
         */
        SelfAndChildren = 2
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Indicates how child components are aligned within the layout rectangle
    * allocated to them by their parent component.
    * @enum
    * @name LayoutAlignment
    * @param [Near] Align the child component to the left or top side.
    * @param [Center] Center the child component.
    * @param [Far] Align the child component to the right or bottom side.
    * @param [Stretch] Stretch the child component.
    */
    enum LayoutAlignment {
        /**
         * Align the child component to the left or top side.
         */
        Near = 0,
        /**
         * Center the child component.
         */
        Center = 1,
        /**
         * Align the child component to the right or bottom side.
         */
        Far = 2,
        /**
         * Stretch the child component.
         */
        Stretch = 3
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Indicates how GridPanel determines dimensions of its rows and columns.
    * @enum
    * @name LengthType
    * @param [Auto] The row or column is auto-sized to fit its child components.
    * @param [Relative] The size of relative elements is calculated from available space in the GridPanel proportionally to the number of other relative elements.
    */
    enum LengthType {
        /**
        * The row or column is auto-sized to fit its child components.
        */
        Auto = 0,
        /**
        * The size of relative elements is calculated from available space in the GridPanel
        * proportionally to the number of other relative elements.
        */
        Relative = 1
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Identifies layout orientation.
    * @enum
    * @name Orientation
    * @param [Horizontal] Horizontal orientation.
    * @param [Vertical] Vertical orientation.
    */
    enum Orientation {
        /**
         * Horizontal orientation.
         */
        Horizontal = 0,
        /**
         * Vertical orientation.
         */
        Vertical = 1
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a control that handles zooming and scrolling of axes.
    * @property {Axis} axis Gets or sets the Axis that will be handled by this component.
    * @property {Number} minValue Gets or sets the smallest value of the displayed range.
    * @property {Number} maxValue Gets or sets the largest value of the displayed range.
    * @property {Number} size Gets or sets the width or height of the component.
    * @property {Number} handleSize Gets or sets the width or height of resize handles.
    * @property {Brush} brush Gets or sets the Brush used to paint the component's background.
    * @property {Brush} thumbBrush Gets or sets the Brush used to paint the thumb.
    * @property {Brush} handleBrush Gets or sets the Brush used to paint resize handles.
    * @property {Orientation} orientation Gets or sets the orientation of the component.
    * @property {SeriesContainer} axesSource Gets or sets the object whose Axes will be handled by this component.
    */
    class RangeSelector extends Component {
        /**
         * Initializes a new instance of the RangeSelector class.
         */
        constructor(axis: Axis, minValue: number, maxValue: number);
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        getCursorHint(x: number, y: number): CursorHint;
        getZoomMode(x: number, y: number): MindFusion.Charting.Drawing.StringAlignment;
        /**
         * Component.CreateController override. Returns a controller used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        get effectiveMinValue(): number;
        get effectiveMaxValue(): number;
        /**
        * Gets the object whose Axes will be handled by this component.
        */
        get axesSource(): SeriesContainer;
        /**
         * Gets the object whose Axes will be handled by this component.
         */
        set axesSource(value: SeriesContainer);
        /**
         * Gets the Axis that will be handled by this component.
         */
        get axis(): Axis;
        /**
         * Sets the Axis that will be handled by this component.
         */
        set axis(value: Axis);
        /**
         * Gets the orientation of the component.
         */
        get orientation(): Orientation;
        /**
         * Sets the orientation of the component.
         */
        set orientation(value: Orientation);
        /**
         * Gets the smallest value of the displayed range.
         */
        get minValue(): number;
        /**
         * Sets the smallest value of the displayed range.
         */
        set minValue(value: number);
        /**
         * Gets the largest value of the displayed range.
         */
        get maxValue(): number;
        /**
         * Sets the largest value of the displayed range.
         */
        set maxValue(value: number);
        /**
         * Gets the width or height of the component.
         */
        get size(): number;
        /**
         * Sets the width or height of the component.
         */
        set size(value: number);
        /**
         * Gets the width or height of resize handles.
         */
        get handleSize(): number;
        /**
         * Sets the width or height of resize handles.
         */
        set handleSize(value: number);
        /**
         * Gets the Brush used to paint the component's background.
         */
        get brush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Sets the Brush used to paint the component's background.
         */
        set brush(value: MindFusion.Charting.Drawing.Brush);
        /**
        * Gets the Brush used to paint the thumb.
        */
        get thumbBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Sets the Brush used to paint the thumb.
         */
        set thumbBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
        * Gets the Brush used to paint the resize handles.
        */
        get handleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Sets the Brush used to paint the resize handles.
         */
        set handleBrush(value: MindFusion.Charting.Drawing.Brush);
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Interface used to communicate with host DOM element.
     */
    interface RootControl {
        /**
         * Invalidates the specified region of a component.
         * @param rect The area to invalidate and redraw.
         * @param panel The reference Component.
         */
        invalidate(rect: MindFusion.Drawing.Rect, panel: Component): void;
        /**
         * Invalidates layout of specified component.
         * @param panel The component to invalidate.
         */
        invalidateLayout(panel: Component): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * Identifies visibility of components.
    * @enum
    * @name Visibility
    * @param [Hidden] The component is hidden but participates in layout measurements.c
    * @param [Collapsed] The component is hidden and does not participate in layout measurements.
    * @param [Visible] The component is visible.
    */
    enum Visibility {
        /**
        * The component is hidden but participates in layout measurements.
        */
        Hidden = 0,
        /**
        * The component is hidden and does not participate in layout measurements.
        */
        Collapsed = 1,
        /**
        * The component is visible.
        */
        Visible = 2
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    type RenderContext = MindFusion.Charting.RenderContext;
    /**
    * @class Represents a border UI component.
    * @property {Component} content Gets or sets the Component displayed inside this border.
    * @property {Number} padding Gets or sets the padding space between this border and its Content.
    * @property {Number} borderThickness Gets or sets the border thickness.
    * @property {MindFusion.Charting.Drawing.Brush} borderBrush Gets or sets the Brush used to draw the border outlines.
    */
    export class BorderComponent extends Component {
        /**
         * Initializes a new instance of the BorderComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this border and its Content.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this border and arranges its Content.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this border in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets the Component displayed inside this border.
         */
        get content(): Component;
        /**
         * Gets or sets the Component displayed inside this border.
         */
        set content(value: Component);
        /**
         * Gets or sets the padding space between this border and its Content.
         */
        get padding(): number;
        /**
         * Gets or sets the padding space between this border and its Content.
         */
        set padding(value: number);
        /**
         * Gets or sets the border thickness.
         */
        get borderThickness(): number;
        /**
         * Gets or sets the border thickness.
         */
        set borderThickness(value: number);
        /**
         * Gets or sets the Brush used to draw the border outlines.
         */
        get borderBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw the border outlines.
         */
        set borderBrush(value: MindFusion.Charting.Drawing.Brush);
    }
    export {};
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a button UI component.
    * @property {Component} content Gets or sets the Component displayed inside this border.
    * @property {Number} padding Gets or sets the padding space between this border and its Content.
    */
    class ButtonComponent extends Component {
        /**
         * Initializes a new instance of the ButtonComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this button.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this button relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws this button in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.CreateController override. Returns a controller used to interact with this button.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of a ComponentController -derived class.
         */
        createController(context: RenderContext): ComponentController;
        raiseClicked(): void;
        /**
         * Raises the Clicked event.
         * @param {EventArgs} e An instance of the EventArgs class.
         */
        onClicked(e: EventArgs): void;
        /**
         * Raises the CustomDraw event.
         * @param {ButtonDrawEventArgs} e An instance of the ButtonDrawEventArgs class.
         */
        onCustomDraw(e: ButtonDrawEventArgs): void;
        /**
         * Raised when the user clicks on this button.
         * @event ButtonComponent.clicked
         * @type {EventDispatcher}
         * @property {ButtonComponent} sender
         * @property {EventArgs} args
         */
        get clicked(): MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        /**
         * Raised to let you custom-draw button graphics.
         * @event ButtonComponent.customDraw
         * @type {ButtonDrawEventDispatcher}
         * @property {ButtonComponent} sender
         * @property {ButtonDrawEventArgs} args
         */
        get customDraw(): ButtonDrawEventDispatcher;
        /**
         * Gets or sets the content displayed inside this button.
         */
        get content(): Component;
        /**
         * Gets or sets the content displayed inside this button.
         */
        set content(value: Component);
        /**
         * Gets or sets the padding space between button's content and its borders.
         */
        get padding(): number;
        /**
         * Gets or sets the padding space between button's content and its borders.
         */
        set padding(value: number);
        get isPressed(): boolean;
        set isPressed(value: boolean);
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a column in a GridPanel.
    * @property {LengthType} lengthType Gets or sets the column's sizing mode.
    * @property {Number} width Gets or sets fixed width for this column.
    */
    class GridColumn implements AutoSize {
        constructor();
        /**
         * Returns the column's measured width.
         * @returns {Number} A number value representing the column's width.
         */
        measuredSize(): number;
        /**
         * Sets the column's position.
         * @param {Number} value X coordinate of the column.
         */
        setPos(value: number): void;
        /**
         * Gets or sets the column's sizing mode.
         */
        get lengthType(): LengthType;
        /**
         * Gets or sets the column's sizing mode.
         */
        set lengthType(value: LengthType);
        /**
         * Gets whether the column should be sized relatively to other columns in the grid panel.
         * @returns {Boolean} true to apply relative size to this column, or false otherwise.
         */
        relativeSize(): boolean;
        /**
         * Gets or sets fixed width for this column.
         */
        get width(): number;
        /**
         * Gets or sets fixed width for this column.
         */
        set width(value: number);
        get xInParent(): number;
        set xInParent(value: number);
        get measuredWidth(): number;
        set measuredWidth(value: number);
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a row in a GridPanel.
    * @property {LengthType} lengthType Gets or sets the row's sizing mode.
    * @property {Number} height Gets or sets fixed height for this row.
    */
    class GridRow implements AutoSize {
        constructor();
        /**
         * Returns the row's measured height.
         * @return A number value representing the row's height.
         */
        measuredSize(): number;
        /**
         * Sets the row's position.
         * @param value Y coordinate of the row.
         */
        setPos(value: number): void;
        /**
         * Gets or sets the row's sizing mode.
         */
        get lengthType(): LengthType;
        /**
         * Gets or sets the row's sizing mode.
         */
        set lengthType(value: LengthType);
        /**
         * Gets whether the row should be sized relatively to other rows in the grid panel.
         * @return true to apply relative size to this row, or false otherwise.
         */
        relativeSize(): boolean;
        /**
         * Gets or sets fixed height for this row.
         */
        get height(): number;
        /**
         * Gets or sets fixed height for this row.
         */
        set height(value: number);
        get yInParent(): number;
        set yInParent(value: number);
        get measuredHeight(): number;
        set measuredHeight(value: number);
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a component that draws a bitmap image.
    * @property {String} location Gets or sets Image by its file location.
    * @property {Boolean} autoSize Gets or sets a value indicating whether the component should auto-size to match the dimensions of its Image.
    * @property {MindFusion.Charting.Drawing.ImageAlign} imageAlign Gets or sets the image alignment relative to the component.
    */
    class ImageComponent extends Component {
        /**
         * Initializes a new instance of the ImageComponent class.
         */
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws associated Image in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets Image by its file location.
         */
        get location(): string;
        /**
         * Gets or sets Image by its file location.
         */
        set location(value: string);
        /**
         * Gets or sets a value indicating whether the component
         * should auto-size to match the dimensions of its Image.
         */
        get autoSize(): boolean;
        /**
         * Gets or sets a value indicating whether the component
         * should auto-size to match the dimensions of its Image.
         */
        set autoSize(value: boolean);
        /**
         * Gets or sets the image alignment relative to the component.
         */
        get imageAlign(): MindFusion.Charting.Drawing.ImageAlign;
        /**
         * Gets or sets the image alignment relative to the component.
         */
        set imageAlign(value: MindFusion.Charting.Drawing.ImageAlign);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a Component that draws text.
    * @property {String} text Gets or sets the text that should be drawn inside this component.
    * @property {String} fontName Gets or sets the name of the font that should be used to draw the component's text.
    * @property {Number} fontSize Gets or sets the size of the font that should be used to draw the component's text.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of the font that should be used to draw the component's text.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the Brush that should be used to draw the component's text.
    * @property {TextStyleHint} styleHint Gets or sets a value indicating which attribute values this component should inherit from current Theme if its local text appearance properties are not set.
    */
    class TextComponent extends Component {
        constructor();
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws associated Text in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets the text that should be drawn inside this component.
         */
        get text(): string;
        /**
         * Gets or sets the text that should be drawn inside this component.
         */
        set text(value: string);
        /**
         * Gets or sets the name of the font that should be used to draw the component's text.
         */
        get fontName(): string;
        /**
         * Gets or sets the name of the font that should be used to draw the component's text.
         */
        set fontName(value: string);
        /**
         * Gets or sets the size of the font that should be used to draw the component's text.
         */
        get fontSize(): number;
        /**
         * Gets or sets the size of the font that should be used to draw the component's text.
         */
        set fontSize(value: number);
        /**
         * Gets or sets the style of the font that should be used to draw the component's text.
         */
        get fontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of the font that should be used to draw the component's text.
         */
        set fontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush that should be used to draw the component's text.
         */
        get textBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw the component's text.
         */
        set textBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a value indicating which attribute values this component should inherit
         * from current Theme if its local text appearance properties are not set.
         */
        get styleHint(): MindFusion.Charting.TextStyleHint;
        /**
         * Gets or sets a value indicating which attribute values this component should inherit
         * from current Theme if its local text appearance properties are not set.
         */
        set styleHint(value: MindFusion.Charting.TextStyleHint);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a component that contains multiple child components and manages their layout.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Component>} children Gets the list of child components of this panel.
    * @property {RootControl} parentControl Gets or sets a reference to the control containing this panel.
    */
    class Panel extends Component {
        /**
         * Initializes a new instance of the Panel class.
         */
        constructor();
        /**
         * Component.Draw override. Draws child components in specified RenderContext.
         * @param context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this panel and its child components.
         * @param maxWidth The maximum width provided by parent component.
         * @param maxHeight The maximum height provided by parent component.
         * @param context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Visit override. Implements the visitor design pattern.
         * @param visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: ComponentVisitor): void;
        /**
         * Component.HitTest override. Returns the component containing specified point.
         * @param {Number} x X coordinate of the point to test.
         * @param {Number} y Y coordinate of the point to test.
         * @returns {Component} A Component instance if one contains the point, or null otherwise.
         */
        hitTest(x: number, y: number): Component;
        /**
         * Component.Invalidate override. Invalidates the appearance
         * of this panel and calls its Draw method at next draw operation.
         * @param {MindFusion.Drawing.Rect} [rect] A Rect instance specifying the invalid rectangle.
         */
        invalidate(rect?: MindFusion.Drawing.Rect): void;
        /**
         * Component.InvalidateLayout override. Invalidates the current layout
         * and runs a new layout pass before next draw operation.
         */
        invalidateLayout(): void;
        measureChild(child: Component, maxWidth: number, maxHeight: number, context: RenderContext): MindFusion.Drawing.Size;
        /**
        * Gets the list of child components of this panel.
        */
        get children(): MindFusion.Charting.Collections.ObservableCollection<Component>;
        /**
         * Gets or sets a reference to the control containing this panel.
         */
        get parentControl(): RootControl;
        /**
         * Gets or sets a reference to the control containing this panel.
         */
        set parentControl(value: RootControl);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a layout panel that arranges its child components in a grid.
    * @property {MindFusion.Charting.Collections.List<GridRow>} rows Gets or sets a list of GridRow objects specifying row attributes.
    * @property {MindFusion.Charting.Collections.List<GridColumn>} columns Gets or sets a list of GridColumn objects specifying column attributes.
    */
    class GridPanel extends Panel {
        /**
         * Initializes a new instance of the GridPanel class.
         */
        constructor();
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param maxWidth The maximum width provided by parent component.
         * @param maxHeight The maximum height provided by parent component.
         * @param context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param x A number value specifying horizontal position.
         * @param y A number value specifying vertical position.
         * @param w A number value specifying the component's width.
         * @param h A number value specifying the component's height.
         * @param context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Gets or sets a list of GridRow objects specifying row attributes.
         */
        get rows(): MindFusion.Charting.Collections.List<GridRow>;
        /**
         * Gets or sets a list of GridRow objects specifying row attributes.
         */
        set rows(value: MindFusion.Charting.Collections.List<GridRow>);
        /**
         * Gets or sets a list of GridColumn objects specifying column attributes.
         */
        get columns(): MindFusion.Charting.Collections.List<GridColumn>;
        /**
         * Gets or sets a list of GridColumn objects specifying column attributes.
         */
        set columns(value: MindFusion.Charting.Collections.List<GridColumn>);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
     * @class Represents a layout panel that arranges its child components over each other.
     */
    class SimplePanel extends Panel {
        constructor();
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting.Components
*/
declare namespace MindFusion.Charting.Components {
    /**
    * @class Represents a layout panel that arranges its child components in a stack.
    * @property {Orientation} orientation Gets or sets the stack orientation.
    */
    class StackPanel extends Panel {
        constructor();
        /**
         * Panel.Measure override. Measures the desired size of this panel and its child components.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size
         * of this panel and arranges its child components.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: RenderContext): void;
        /**
         * Gets or sets the stack orientation.
         */
        get orientation(): Orientation;
        /**
         * Gets or sets the stack orientation.
         */
        set orientation(value: Orientation);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
    * @class Represents a a mathematical matrix, specialized in 3D transformations.
    */
    class Matrix3D extends Array {
        /**
         * Initializes a new instance of the Matrix3D class.
         * @param {number} width The width of the matrix.
         * @param {number} height The height of the matrix.
         */
        constructor(width: number, height: number);
        /**
         * Fills the matrix with zeros.
         */
        nullify(): void;
        /**
         * Fills the matrix with an array, starting from the top left, filling horisontally.
         * @param {number[]} array The array to be filled in the matrix.
         */
        fill(array: any, start?: any, end?: any): this;
        /**
         * @return {Float32Array} An array version of the matrix staring top left, going horisontally.
         */
        getArray(): Float32Array;
        /**
         * Multiplys 2 matrices.
         * @param {Matrix3D} m The left matrix.
         * @param {Matrix3D} n The right matrix.
         * @return {Matrix3D} The two matrices multiplyed.
         */
        static multiply(m: Matrix3D, n: Matrix3D): Matrix3D;
        /**
         * Multiplys the current matrix times a second matrix.
         * @param {Matrix3D} mat The right matrix.
         */
        multiply(mat: Matrix3D): void;
        /**
        * A 4x4 Identety Matrix
        * @return {Matrix3D} Identety Matrix:
        */
        static Identety: () => Matrix3D;
        /**
        * A 4x4 matrix, allowing scaling.
        * @param {number} width The amount of scaling on the X axis in percent/100.
        * @param {number} height The amount of scaling on the Y axis in percent/100.
        * @param {number} depth The amount of scaling on the Z axis in percent/100.
        * @return {Matrix3D} Scale Matrix:
        */
        static Scale: (width: number, height: number, depth: number) => Matrix3D;
        /**
        * A 4x4 matrix, allowing translation.
        * @param {number} x The amount of translation on the X axis.
        * @param {number} y The amount of translation on the Y axis.
        * @param {number} z The amount of translation on the Z axis.
        * @return {Matrix3D} Translate Matrix:
        */
        static Translate(x: number, y: number, z: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing rotation around the X axis.
        * @param {number} angle The amount of rotation around the X axis in radians.
        * @return {Matrix3D} RotateX Matrix:
        */
        static RotateX(angle: number): Matrix3D;
        /**
         * A 4x4 matrix, allowing rotation around the Y axis.
        * @param {number} angle The amount of rotation around the Y axis in radians.
        * @return {Matrix3D} RotateY Matrix:
        */
        static RotateY(angle: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing rotation around the Z axis.
        * @param {number} angle The amount of rotation around the Z axis in radians.
        * @return {Matrix3D} RotateZ Matrix:
        */
        static RotateZ(angle: number): Matrix3D;
        /**
        * A 4x4 matrix, allowing perspective and vercitile coordinates.
        * @param {number} filedOfView The angle of the camera.
        * @param {number} aspectRatio The width devided by height of the viewing window.
        * @param {number} near The nearest coordinate, where the object will still be drawn.
        * @param {number} far The furthest coordinate, where the object will still be drawn.
        * @return {Matrix3D} Perspective Matrix:
        */
        static Perspective(fieldOfView: number, aspectRatio: number, near: number, far: number): Matrix3D;
        width: number;
        height: number;
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
     * @class Represents a three-dimensional model.
     */
    class Model3D {
        /**
         * Initializes a new instance of the Model3D class.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] The Brush used to fill this model's projection.
         */
        constructor(brush?: Drawing.Brush);
        get brush(): MindFusion.Charting.Drawing.Brush;
        set brush(value: MindFusion.Charting.Drawing.Brush);
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
     * @class Defines the interface of 3D model projections.
     */
    interface Projection {
        /**
         * Draws the projections in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawAsProjection(context: RenderContext): void;
        /**
         * A value by which projections are sorted in depth buffer.
         */
        zSort: number;
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
    * @class Represents a 3D scene.
    * @property {MindFusion.Charting.Collections.List<Model3D>} models Gets or sets a list of models in this scene.
    * @property {MindFusion.Charting.Collections.List<Projection>} projections Gets or sets a list of projections in this scene.
    * @property {Point3D} cameraPosition Gets or sets the camera position.
    * @property {Point3D} cameraOrientation Gets or sets the camera orientation.
    * @property {Number} focalLength Gets or sets the camera focal length.
    * @property {MindFusion.Drawing.Point} viewportCenter Gets or sets the viewport center.
    */
    class Scene3D {
        /**
         * Initializes a new instance of the Scene3D class.
         */
        constructor();
        /**
         * Adds a cuboid model to the scene.
         * @param {Point3D} p1 A corner point of the cuboid.
         * @param {Point3D} p2 The diametrically opposite corner of specified point.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint the cuboid model.
         */
        addCuboid(p1: Point3D, p2: Point3D, brush: MindFusion.Charting.Drawing.Brush): void;
        /**
         * Adds a cuboid model to the scene.
         * @param {Number} x1 X coordinate of a corner point of the cuboid.
         * @param {Number} y1 Y coordinate of a corner point of the cuboid.
         * @param {Number} z1 Z coordinate of a corner point of the cuboid.
         * @param {Number} x2 X coordinate of diametrically opposite corner.
         * @param {Number} y2 Y coordinate of diametrically opposite corner.
         * @param {Number} z2 Z coordinate of diametrically opposite corner.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint the cuboid model.
         */
        addCuboid(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, brush: MindFusion.Charting.Drawing.Brush): void;
        /**
         * Creates a cuboid model.
         * @param {Number} x1 X coordinate of a corner point of the cuboid.
         * @param {Number} y1 Y coordinate of a corner point of the cuboid.
         * @param {Number} z1 Z coordinate of a corner point of the cuboid.
         * @param {Number} x2 X coordinate of diametrically opposite corner.
         * @param {Number} y2 Y coordinate of diametrically opposite corner.
         * @param {Number} z2 Z coordinate of diametrically opposite corner.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint the cuboid model.
         * @returns {Mesh3D} A Mesh3D containing the cuboid faces.
         */
        buildCuboid(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, brush: MindFusion.Charting.Drawing.Brush): Mesh3D;
        buildCylinder(x: number, z: number, y: number, rad: number, hei: number, res: number, brush: MindFusion.Charting.Drawing.Brush): Mesh3D;
        /**
         * Draws a projection of this scene in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Projects specified point on projection plane.
         * @param {Point3D} point A Point3D to project.
         * @returns {Point3D} A Point3D containing projection coordinates.
         */
        project(point: Point3D): Point3D;
        /**
         * Projects specified model on projection plane.
         * @param {Model3D} model A Model3D to project.
         * @returns {IEnumerable<Projection>} Enumeration of Projection objects.
         */
        project(model: Model3D): MindFusion.Charting.Collections.List<Projection>;
        /**
         * Projects specified polygon on projection plane.
         * @param {Polygon3D} polygon A Polygon3D to project.
         * @returns {Polygon3D} A Polygon3D containing projection coordinates.
         */
        project(polygon: Polygon3D): Polygon3D;
        /**
         * Gets or sets a list of models in this scene.
         */
        get models(): MindFusion.Charting.Collections.List<Model3D>;
        /**
         * Gets or sets a list of models in this scene.
         */
        set models(value: MindFusion.Charting.Collections.List<Model3D>);
        /**
         * Gets or sets a list of projections in this scene.
         */
        get projections(): MindFusion.Charting.Collections.List<Projection>;
        /**
         * Gets or sets a list of projections in this scene.
         */
        set projections(value: MindFusion.Charting.Collections.List<Projection>);
        /**
         * Gets or sets the camera position.
         */
        get cameraPosition(): Point3D;
        /**
         * Gets or sets the camera position.
         */
        set cameraPosition(value: Point3D);
        /**
         * Gets or sets the camera orientation.
         */
        get cameraOrientation(): Point3D;
        /**
         * Gets or sets the camera orientation.
         */
        set cameraOrientation(value: Point3D);
        /**
         * Gets or sets the camera focal length.
         */
        get focalLength(): number;
        /**
         * Gets or sets the camera focal length.
         */
        set focalLength(value: number);
        /**
         * Gets or sets the viewport center.
         */
        get viewportCenter(): MindFusion.Drawing.Point;
        /**
         * Gets or sets the viewport center.
         */
        set viewportCenter(value: MindFusion.Drawing.Point);
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
    * @class Represents a three-dimensional vector.
    * @property {Number} x Gets or sets the X component of this vector.
    * @property {Number} y Gets or sets the Y component of this vector.
    * @property {Number} z Gets or sets the Z component of this vector.
    */
    class Vector3D {
        /**
         * Initializes a new instance of the Vector3D class.
         */
        constructor();
        /**
         * Initializes a new instance of the Vector3D class.
         * @param {Number} x X component of the vector.
         * @param {Number} y Y component of the vector.
         * @param {Number} z Z component of the vector.
         */
        constructor(x: number, y: number, z: number);
        /**
         * Initializes a new instance of the Vector3D class.
         * @param {Point3D} p1 Start point of the vector.
         * @param {Point3D} p2 End point of the vector.
         */
        constructor(p1: Point3D, p2: Point3D);
        /**
         * Calculates the cross-product of two vectors.
         * @param {Vector3D} a A Vector3D instance.
         * @param {Vector3D} b A Vector3D instance.
         * @returns {Vector3D} A Vector3D representing the cross-product of specified vectors.
         */
        static crossProduct(a: Vector3D, b: Vector3D): Vector3D;
        /**
         * Calculates the length of this vector.
         * @returns {Number} A double value representing the vector length.
         */
        length(): number;
        /**
         * Divides the vector by specified measure.
         * @param {Number} s A double value representing the divisor.
         * @returns {Vector3D} A Vector3D representing the result.
         */
        div(s: number): Vector3D;
        /**
         * Gets or sets the X component of this vector.
         */
        get x(): number;
        /**
         * Gets or sets the X component of this vector.
         */
        set x(value: number);
        /**
         * Gets or sets the Y component of this vector.
         */
        get y(): number;
        /**
         * Gets or sets the Y component of this vector.
         */
        set y(value: number);
        /**
         * Gets or sets the Z component of this vector.
         */
        get z(): number;
        /**
         * Gets or sets the Z component of this vector.
         */
        set z(value: number);
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    type Point3D = MindFusion.Charting.Point3D;
    /**
    * @class Represents a text label in 3D scene.
    * @property {Point3D} topRight Gets or sets the top-right corner of label's layout rectangle.
    * @property {Point3D} bottomLeft Gets or sets the bottom-left corner of label's layout rectangle.
    * @property {String} text Gets or sets the label's text.
    * @property {MindFusion.Drawing.Font} font Gets or sets the label's font.
    * @property {Number} rotationAngle Gets or sets the label's rotation angle.
    */
    export class Label3D extends Model3D {
        /**
         * Gets or sets the top-right corner of label's layout rectangle.
         */
        get topRight(): Point3D;
        /**
         * Gets or sets the top-right corner of label's layout rectangle.
         */
        set topRight(value: Point3D);
        /**
         * Gets or sets the bottom-left corner of label's layout rectangle.
         */
        get bottomLeft(): Point3D;
        /**
         * Gets or sets the bottom-left corner of label's layout rectangle.
         */
        set bottomLeft(value: Point3D);
        /**
         * Gets or sets the label's text.
         */
        get text(): string;
        /**
         * Gets or sets the label's text.
         */
        set text(value: string);
        /**
         * Gets or sets the label's font.
         */
        get font(): MindFusion.Charting.Drawing.Font;
        /**
         * Gets or sets the label's font.
         */
        set font(value: MindFusion.Charting.Drawing.Font);
        /**
         * Gets or sets the label's rotation angle.
         */
        get rotationAngle(): number;
        /**
         * Gets or sets the label's rotation angle.
         */
        set rotationAngle(value: number);
        drawLabel: DrawLabelDelegate;
    }
    /**
    * Gets or sets the signature of callback methods used to render text at projected point.
    */
    export interface DrawLabelDelegate {
        (bounds: MindFusion.Drawing.Rect): void;
    }
    export {};
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
    * @class Represents the projection of a Label3D on the projection plane.
    * @property {Label3D} label Gets ot sets the projected Label3D.
    * @property {Point3D} projectionTopLeft Gets or sets the projection of top-left corner of label's layout rectangle.
    * @property {Point3D} projectionBottomRight Gets or sets the projection of bottom-right corner of label's layout rectangle.
    * @property {Number} zSort Gets or sets a value by which projections are sorted in depth buffer.
    */
    class LabelProjection implements Projection {
        /**
         * Initializes a new instance of the LabelProjection class.
         * @param {Label3D} label The projected Label3D.
         * @param {Point3D} projTL Projection of top-left corner of Label3D's layout rectangle.
         * @param {Point3D} projBR Projection of bottom-right corner of Label3D's layout rectangle.
         */
        constructor(label: Label3D, projTL: Point3D, projBR: Point3D);
        /**
         * Gets ot sets the projected Label3D.
         */
        get label(): Label3D;
        /**
         * Gets ot sets the projected Label3D.
         */
        set label(value: Label3D);
        /**
         * Gets or sets the projection of top-left corner of label's layout rectangle.
         */
        get projectionTopLeft(): Point3D;
        /**
         * Gets or sets the projection of top-left corner of label's layout rectangle.
         */
        set projectionTopLeft(value: Point3D);
        /**
         * Gets or sets the projection of bottom-right corner of label's layout rectangle.
         */
        get projectionBottomRight(): Point3D;
        /**
         * Gets or sets the projection of bottom-right corner of label's layout rectangle.
         */
        set projectionBottomRight(value: Point3D);
        /**
         * A value by which projections are sorted in depth buffer.
         */
        get zSort(): number;
        /**
         * A value by which projections are sorted in depth buffer.
         */
        set zSort(value: number);
        /**
         * Draws this projection in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawAsProjection(context: MindFusion.Charting.RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
    * @class Represents a 3D mesh.
    * @property {MindFusion.Charting.Collections.List<Polygon3D>} faces Gets or sets the mesh faces.
    */
    class Mesh3D extends Model3D {
        /**
         * Initializes a new instance of the Mesh3D class.
         * @param {MindFusion.Charting.Collections.List<List<Point3D>>} facePoints Lists of points defining mesh faces.
         * @param {MindFusion.Charting.Drawing.Brush} brush The Brush used to paint this mesh.
         * @param {Array<Array<Vector3D>>} [normals] An array with the normal vectors in each vertex.
         */
        constructor(facePoints: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<Point3D>>, brush: MindFusion.Charting.Drawing.Brush, normals?: Vector3D[][]);
        get pen(): MindFusion.Charting.Drawing.Pen;
        set pen(value: MindFusion.Charting.Drawing.Pen);
        /**
         * Gets or sets the mesh faces.
         */
        get faces(): MindFusion.Charting.Collections.List<Polygon3D>;
        /**
         * Gets or sets the mesh faces.
         */
        set faces(value: MindFusion.Charting.Collections.List<Polygon3D>);
    }
}
/**
* @namespace MindFusion.Charting.ThreeD
*/
declare namespace MindFusion.Charting.ThreeD {
    /**
    * @class Represents a polygon in 3D space.
    * @property {MindFusion.Charting.Collections.List<Point3D>} points Gets or sets the polygon's vertices.
    * @property {Number} zSort Gets or sets a value by which projections are sorted in depth buffer.
    */
    class Polygon3D implements Projection {
        /**
         * Initializes a new instance of the Polygon3D class.
         * @param {IEnumerable<Point3D>} [points] A list of 3D points.
         * @param {MindFusion.Charting.Drawing.Brush} [brush] A Brush used to fill the polygon.
         * @param {Array<Vector3D>} [normals] An array with the normal vectors in each vertex.
         */
        constructor(points?: MindFusion.Charting.Collections.List<Point3D>, brush?: MindFusion.Charting.Drawing.Brush, normals?: Vector3D[]);
        /**
         * Draws this projection in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawAsProjection(context: RenderContext): void;
        /**
         * Gets the polygon's normal vector.
         * @returns {Vector3D} A Vector3D representing the polygon's normal vector.
         */
        normal(): Vector3D;
        /**
         * Gets the distance from specified point to polygon's plane.
         * @param {Point3D} p A Point3D instance.
         * @returns {Number} A number value representing the distance.
         */
        pointToPlaneDist(p: Point3D): number;
        /**
         * Gets the distance from specified point to specified plane.
         * @param {Point3D} p A Point3D instance.
         * @param {Point3D} planePoint A point from the plane.
         * @param {Vector3D} planeNormal The plane's normal vector.
         * @returns {Number} A number value representing the distance.
         */
        static pointToPlaneDist(p: Point3D, planePoint: Point3D, planeNormal: Vector3D): number;
        /**
         * Returns the polygon's middle point.
         * @returns {Point3D} A Point3D instance representing the middle point.
         */
        midPoint(): Point3D;
        calculateIllumination(): void;
        /**
         * Gets or sets the polygon's vertices.
         */
        get points(): MindFusion.Charting.Collections.List<Point3D>;
        /**
         * Gets or sets the polygon's vertices.
         */
        set points(value: MindFusion.Charting.Collections.List<Point3D>);
        normals: Vector3D[];
        get owner(): Object;
        set owner(value: Object);
        /**
         * A value by which projections are sorted in depth buffer.
         */
        get zSort(): number;
        /**
         * A value by which projections are sorted in depth buffer.
         */
        set zSort(value: number);
        get brush(): MindFusion.Charting.Drawing.Brush;
        set brush(value: MindFusion.Charting.Drawing.Brush);
        get pen(): MindFusion.Charting.Drawing.Pen;
        set pen(value: MindFusion.Charting.Drawing.Pen);
    }
}
/**
* @namespace MindFusion.Charting.Drawing
*/
declare namespace MindFusion.Charting.ThreeD {
    class Graphics3D {
        constructor(context: WebGLRenderingContext, flength: number, width: number, height: number);
        loadObject(poly: Polygon3D): {
            buffer: WebGLBuffer;
            numItems: number;
            itemSize: number;
            normal: any;
            color: Drawing.Brush;
            model: Matrix3D;
        };
        drawObject(obj: any): void;
        getMatrices(): Matrix3D;
        moveCamera(mat: Matrix3D): void;
        reloadScene(): void;
        projection: Matrix3D;
        context: WebGLRenderingContext;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines an interface for enumerating all series associated with a component of the dashboard.
     */
    interface SeriesContainer {
        /**
         * Enumerates the series associated with this component.
         * @returns An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
        * Gets the index of the dimension whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        toJson(): any;
        fromJson(json: any): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Base class for renderer objects that draw data series inside a Plot.
    * @property {SeriesStyle} seriesStyle A SeriesStyle instance specifying the appearance of series associated with this renderer.
    * @property {String} labelFontName Gets or sets the name of font that should be used to draw labels of data items.
    * @property {Number} labelFontSize Gets or sets the size of font that should be used to draw labels of data items.
    * @property {MindFusion.Charting.Drawing.FontStyle} labelFontStyle Gets or sets the style of font that should be used to draw labels of data items.
    * @property {MindFusion.Charting.Drawing.Brush} labelBrush Gets or sets the Brush that should be used to draw labels of data items.
    * @property {Boolean} showDataLabels Gets or sets the kind of data labels to draw.
    * @property {Boolean} showHighlight Gets or sets a value indicating whether to show highlights on data items.
    * @property {Boolean} showToolTips Gets or sets a value indicating whether to show tooltips.
    */
    abstract class SeriesRenderer implements SeriesContainer, MindFusion.Charting.Common.INotifyPropertyChanged {
        /**
         * Initializes a new instance of the SeriesRenderer class.
         */
        constructor();
        dataReader: DataReader;
        /**
         * Gets the brush that should be used to fill the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the brush that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveStroke(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of the pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveStrokeThickness(seriesIndex: number, dataIndex: number, context: RenderContext): number;
        /**
         * Gets the dash style of the pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets the Pen that should be used to stroke the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveStrokePen(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * A SeriesStyle instance specifying the appearance of series associated with this renderer.
         */
        get seriesStyle(): SeriesStyle;
        /**
         * A SeriesStyle instance specifying the appearance of series associated with this renderer.
         */
        set seriesStyle(value: SeriesStyle);
        /**
         * Returns a SeriesStyle object that meets specified criteria.
         * @param check A StyleCheck delegate that tests SeriesStyle for some criteria.
         * @param context A RenderContext instance used to access styles and theme from the dashboard hierarchy.
         * @returns A SeriesStyle instance, or null if none meets spcified criteria.
         */
        searchStyle(check: StyleCheck, context: RenderContext): SeriesStyle;
        /**
         * Draws the series data in specified RenderContext.
         * @param context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Draws highlighted data item in specified RenderContext.
         * @param context A RenderContext instance.
         * @param hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Sets tooltip text and lcoation.
         * @param text A string specifying tooltip text.
         * @param location A Point specifying tooltip location.
         */
        setToolTip(text: string, location: MindFusion.Drawing.Point): void;
        /**
         * Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Measures the data range of rendered series and assigns it to the
         * associated Axis objects if their MinValue and MaxValue are not set.
         * @param context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * Adjusts the data range of associated Axis objects after initial measure pass.
         * @param context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * Called to reset measure accumulators at the beginning of a measure pass.
         * @param context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Gets or sets the name of font that should be used to draw labels of data items.
         */
        get labelFontName(): string;
        /**
         * Gets or sets the name of font that should be used to draw labels of data items.
         */
        set labelFontName(value: string);
        /**
         * Gets or sets the size of font that should be used to draw labels of data items.
         */
        get labelFontSize(): number;
        /**
         * Gets or sets the size of font that should be used to draw labels of data items.
         */
        set labelFontSize(value: number);
        /**
         * Gets or sets the style of font that should be used to draw labels of data items.
         */
        get labelFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font that should be used to draw labels of data items.
         */
        set labelFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush that should be used to draw labels of data items.
         */
        get labelBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw labels of data items.
         */
        set labelBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the kind of data labels to draw.
         */
        get showDataLabels(): LabelKinds;
        /**
         * Gets or sets the kind of data labels to draw.
         */
        set showDataLabels(value: LabelKinds);
        /**
        * Gets a value indicating whether to show highlights on data items.
        */
        get showHighlight(): boolean;
        /**
        * Sets a value indicating whether to show highlights on data items.
        */
        set showHighlight(value: boolean);
        /**
        * Gets a value indicating whether to show tooltips.
        */
        get showToolTips(): boolean;
        /**
        * Sets a value indicating whether to show tooltips.
        */
        set showToolTips(value: boolean);
        renderDataLabels(series: Series, kind: LabelKinds): boolean;
        /**
         * Gets the Font that should be used to draw labels of data items.
         * @param context A RenderContext instance used to find styles and theme from dashboard hierarchy.
         * @returns A Font instance.
         */
        effectiveLabelFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the System.Drawing.Brush that should be used to draw labels of data items.
         * @param context A RenderContext instance used to find styles and theme from dashboard hierarchy.
         * @returns A System.Drawing.Brush instance.
         */
        effectiveLabelBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        protected effectiveLabelBackground(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        protected effectiveLabelBorderPen(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        createTextRenderer(context: RenderContext): TextRenderer;
        drawIn3DPlot(): boolean;
        getFillAt(index: number): MindFusion.Charting.Drawing.Brush;
        getStrokeAt(index: number): MindFusion.Charting.Drawing.Pen;
        /**
         * Raises the PropertyChanged event.
         * @param propertyName Specifies the name of changed property.
         */
        protected onPropertyChanged(propertyName: string): void;
        /**
         * Occurs when a property value changes.
         * @event SeriesRenderer.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {SeriesRenderer} sender
         * @property {PropertyChangedEventArgs} args
         */
        get propertyChanged(): MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        /**
         * Implements the SeriesContainer interface. Enumerates the series associated with this component.
         * @returns An instance of the IEnumerable&lt;Series&gt; class.
         */
        abstract enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
        * Implements the SeriesContainer interface. Gets the index of the dimension
        * whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        /**
         * Subscribes to the DataChanged event of specified Series.
         * @param {Series} series A Series instance.
         */
        protected subscribe(series: Series): void;
        /**
         * Unsubscribes from the DataChanged event of specified Series.
         * @param {Series} series A Series instance.
         */
        protected unsubscribe(series: Series): void;
        /**
         * Called when Series raise their DataChanged event.
         * @param {Object} sender The Series raising the event.
         * @param {EventArgs} e An EventArgs instance.
         */
        protected onSeriesDataChanged(e: EventArgs): void;
        /**
         * Raised when Series raise their DataChanged event.
         * @event SeriesRenderer.dataChanged
         * @type {EventDispatcher}
         * @property {SeriesRenderer} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        m_id: number;
        id(): number;
        fromJson(obj: any): any;
        toJson(): any;
        static seriesFromJson(obj: any): Series | MindFusion.Charting.Collections.ObservableCollection<Series>;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A base class for series renderers that draw in two dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets a list of Series drawn by this Renderer2D.
    * @property {MindFusion.Charting.Axis} xAxis Gets the X axis associated with this Renderer2D.
    * @property {MindFusion.Charting.Axis} yAxis Gets the Y axis associated with this Renderer2D.
    */
    class Renderer2D extends SeriesRenderer {
        /**
         * Initializes a new instance of the Renderer2D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a list of Series drawn by this Renderer2D.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets a list of Series drawn by this Renderer2D.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePoints1(context: RenderContext, process: ProcessPoint): void;
        domainAxis(context: RenderContext): Axis;
        imageAxis(context: RenderContext): Axis;
        domainSorted(seriesIndex: number): boolean;
        domainMin(s: Series): number;
        domainMax(s: Series): number;
        /**
         * Gets the domain axis coordinate (input value) of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        domainData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets the image axis coordinate (output value) of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        imageData(seriesIndex: number, dataIndex: number): number;
        get yDomain(): boolean;
        set yDomain(value: boolean);
        plotLen(context: RenderContext): number;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Boolean} frontToBack true if the series list should be enumerated from front to back, or false otherwise.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePoints(context: RenderContext, frontToBack: boolean, process: ProcessPoint): void;
        rangeMargin: number;
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoints} process A ProcessPoints callback.
         * @remarks The signature of the ProcessPoints delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point1 A Point instance containing the Plot2D coordinates corresponding to previous data item.
         * param {Point} point2 A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumVisiblePointPairs(context: RenderContext, process: ProcessPoints): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessRange} process A ProcessRange callback.
         * @remarks The signature of the ProcessRange delegate is as follows:
         * 'function(seriesIndex, points)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {List<Point>} points A list of Point values containing the Plot2D coordinates corresponding to data items in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleRanges(context: RenderContext, process: ProcessRange): void;
        /**
         * SeriesRenderer.StartMeasureData override. Called to reset measure
         * accumulators at the beginning of a measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        findDomainMin(): number;
        findDomainMax(): number;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
         * Gets the X axis associated with this Renderer2D.
         */
        get xAxis(): Axis;
        /**
         * Gets the X axis associated with this Renderer2D.
         */
        set xAxis(value: Axis);
        /**
         * Gets the Y axis associated with this Renderer2D.
         */
        get yAxis(): Axis;
        /**
         * Gets the Y axis associated with this Renderer2D.
         */
        set yAxis(value: Axis);
        /**
         * SeriesRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        fitExponent(range: number): number;
        adjustForNonEmptyBars(context: RenderContext): void;
        /**
         * Gets the X value of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        xData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets the Y value of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        yData(seriesIndex: number, dataIndex: number): number;
        /**
         * Gets a value indicating whether values of specified series increase monotonously in X dimension.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @returns {Boolean} true if specified series is sorted, or false otherwise.
         */
        xSorted(seriesIndex: number): boolean;
        /**
         * Gets a value indicating whether values of specified series increase monotonously in Y dimension.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @returns {Boolean} true if specified series is sorted, or false otherwise.
         */
        ySorted(seriesIndex: number): boolean;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.Axis} xAxis An Axis reference specifying the X axis.
         * @param {MindFusion.Charting.Axis} yAxis An Axis reference specifying the Y axis.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point} A Point containing Plot2D coordinates corresponding to specified data item.
         */
        getPixel(seriesIndex: number, dataIndex: number, xAxis: Axis, yAxis: Axis, component: MindFusion.Charting.Components.Component): MindFusion.Drawing.Point;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} valueX The X value of data item in logical coordinate system.
         * @param {MindFusion.Charting.Axis} xAxis The X Axis from which logical value is mapped to plot's actual width.
         * @param {Number} valueY The Y value of data item in logical coordinate system.
         * @param {MindFusion.Charting.Axis} yAxis The Y Axis from which logical value is mapped to plot's actual height.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point}
         */
        getPixel1(valueX: number, xAxis: Axis, valueY: number, yAxis: Axis, component: MindFusion.Charting.Components.Component): MindFusion.Drawing.Point;
        /**
         * Gets the maximum sum of X data values locates at same index in all series.
         * @returns {Number} A number value containing the maximum sum.
         */
        getMaxXSum(): number;
        /**
         * Gets the maximum sum of Y data values locates at same index in all series.
         * @returns {Number} A number value containing the maximum sum.
         */
        getMaxYSum(): number;
        getMaxXSumPositive(origin: number): number;
        getMinXSumNegative(origin: number): number;
        getMaxYSumPositive(origin: number): number;
        getMinYSumNegative(origin: number): number;
        /**
         * Gets the index of first data item in currently visible plot range.
         * @param {Number} s An integer value specifying index in Series list.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} An integer index of first visible data item.
         */
        getFirstInRange(s: number, context: RenderContext): number;
        getFirstInRange(s: number, axis: Axis): number;
        /**
         * Gets the index of last data item in currently visible plot range.
         * @param {Number} s An integer value specifying index in Series list.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} An integer index of last visible data item.
         */
        getLastInRange(s: number, context: RenderContext): number;
        getLastInRange(s: number, axis: Axis): number;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        midX(rect: MindFusion.Drawing.Rect): number;
        midY(rect: MindFusion.Drawing.Rect): number;
        fromJson(json: any): any;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process a data point one element at a time.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
    */
    interface ProcessPoint {
        (seriesIndex: number, dataIndex: number, point: MindFusion.Drawing.Point): any;
    }
    /**
    * Defines the signature of delegates called to process data points in pairs.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {Point} point1 A Point instance containing the Plot2D coordinates corresponding to previous data item.
    * @param {Point} point2 A Point instance containing the Plot2D coordinates corresponding to current data item.
    */
    interface ProcessPoints {
        (seriesIndex: number, dataIndex: number, point1: MindFusion.Drawing.Point, point2: MindFusion.Drawing.Point): any;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {List<Point>} points A list of Point values containing the Plot2D coordinates corresponding to data items in currently visible range.
    */
    interface ProcessRange {
        (seriesIndex: number, points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws annotations in its containing plot.
     */
    class AnnotationRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the AnnotationRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as annotations.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawIn3DPlot(): boolean;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws each series as an area in its containing plot.
    * @property {Number} areaOpacity Gets or sets the opacity of area polygons.
    */
    class AreaRenderer extends Renderer2D {
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Initializes a new instance of the AreaRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as areas.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets the opacity of area polygons.
         */
        get areaOpacity(): number;
        /**
         * Gets or sets the opacity of area polygons.
         */
        set areaOpacity(value: number);
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A base SeriesRenderer for stacked graphics.
     */
    class StackRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the StackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessStackPoint} process A ProcessStackPoint callback.
         * @remarks The signature of the ProcessStackPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, stackPoint, prevPoint)'.
         * param {Number} seriesIndexAn integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Point} stackPoint A Point instance containing the Plot2D coordinates corresponding to current data item.
         * param {MindFusion.Drawing.Point} prevPoint A Point instance containing the Plot2D coordinates corresponding to previous data item.
         * The method is not expected to return a value.
         */
        enumVisibleStackPoints(context: RenderContext, process: ProcessStackPoint): void;
        enumVisibleStackPointsRelativeTo(context: RenderContext, origin: number, process: ProcessStackPoint): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessStackRange} process A ProcessStackRange callback.
         * @remarks The signature of the ProcessStackRange delegate is as follows:
         * 'function(seriesIndex, points, prevPoints)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the Plot2D coordinates
         * corresponding to data items in currently visible range.
         * param {MindFusion.Charting.Collections.List<Point>} prevPoints A list of Point values containing the Plot2D coordinates
         * corresponding to previous series in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleStackRanges(context: RenderContext, process: ProcessStackRange): void;
        enumVisibleStackRangesRelativeTo(context: RenderContext, origin: number, process: ProcessStackRange): void;
        /**
         * Gets the coordinates of specified data item when mapped to a Plot2D pixel.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.Axis} xAxis An Axis reference specifying the X axis.
         * @param {MindFusion.Charting.Axis} yAxis An Axis reference specifying the Y axis.
         * @param {Components.Component} component An instance of Plot2D or derived class.
         * @returns {MindFusion.Drawing.Point} A Point containing Plot2D coordinates corresponding to specified data item.
         */
        getPixel(seriesIndex: number, dataIndex: number, xAxis: Axis, yAxis: Axis, component: MindFusion.Charting.Components.Component): MindFusion.Drawing.Point;
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        measureDataRangeRelativeTo(context: RenderContext, origin: number): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the stack representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a data point.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
    }
    /**
    * Defines the signature of delegates called to process a data point one element at a time.
    * @param {Number} seriesIndexAn integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Point} stackPoint A Point instance containing the Plot2D coordinates corresponding to current data item.
    * @param {MindFusion.Drawing.Point} prevPoint A Point instance containing the Plot2D coordinates corresponding to previous data item.
    */
    interface ProcessStackPoint {
        (seriesIndex: number, dataIndex: number, stackPoint: MindFusion.Drawing.Point, prevPoint: MindFusion.Drawing.Point): void;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the Plot2D coordinates
    * corresponding to data items in currently visible range.
    * @param {MindFusion.Charting.Collections.List<Point>} prevPoints A list of Point values containing the Plot2D coordinates
    * corresponding to previous series in currently visible range.
    */
    interface ProcessStackRange {
        (seriesIndex: number, points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>, prevPoints: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws stacked areas in its containing plot.
     */
    class AreaStackRenderer extends StackRenderer {
        /**
         * Initializes a new instance of the AreaStackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked areas.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    interface ProcessInterval {
        (value: number, index: number): any;
    }
    /**
    * @class Represents an Axis range.
    * @property {String} title Gets or sets the axis title.
    * @property {Number} minValue Gets or sets the smallest value displayed on this axis.
    * @property {Number} maxValue Gets or sets the largest value displayed on this axis.
    * @property {Number} origin Gets or sets the origin of the axis.
    * @property {Number} interval Gets or sets the size of axis intervals.
    * @property {String} numberFormat Gets or sets the number format of coordinate labels.
    */
    class Axis implements MindFusion.Charting.Common.INotifyPropertyChanged {
        /**
         * Initializes a new instance of the Axis class.
         */
        constructor();
        /**
         * Determines whether specified value is within the axis range.
         * @param {Number} value The number to check.
         * @returns {Boolean} true if value is inside the current axis range, or false otherwise.
         */
        inRange(value: number): boolean;
        inExtendedRange(value: number, margin: number): boolean;
        /**
         * Raises the PropertyChanged event.
         * @param {String} propertyName Specifies the name of changed property.
         */
        protected onPropertyChanged(propertyName: string): void;
        /**
         * Occurs when a property value changes.
         * @event Axis.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {Axis} sender
         * @property {PropertyChangedEventArgs} args
         */
        get propertyChanged(): MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        /**
         * Gets or sets the axis title.
         */
        get title(): string;
        /**
         * Gets or sets the axis title.
         */
        set title(value: string);
        /**
         * Gets or sets the smallest value displayed on this axis.
         */
        get minValue(): number;
        /**
         * Gets or sets the smallest value displayed on this axis.
         */
        set minValue(value: number);
        /**
         * Gets or sets the largest value displayed on this axis.
         */
        get maxValue(): number;
        /**
         * Gets or sets the largest value displayed on this axis.
         */
        set maxValue(value: number);
        /**
         * Gets or sets the origin of the axis.
         */
        get origin(): number;
        /**
         * Gets or sets the origin of the axis.
         */
        set origin(value: number);
        /**
         * Gets or sets the size of axis intervals.
         */
        get interval(): number;
        /**
         * Gets or sets the size of axis intervals.
         */
        set interval(value: number);
        /**
         * Gets or sets the number format of coordinate labels.
         */
        get numberFormat(): string;
        /**
         * Gets or sets the number format of coordinate labels.
         */
        set numberFormat(value: string);
        enumerateIntervals(alignToView: boolean, process: ProcessInterval, partial?: boolean): void;
        numIntervals(): number;
        get measuredMinValue(): number;
        set measuredMinValue(value: number);
        get measuredMaxValue(): number;
        set measuredMaxValue(value: number);
        get effectiveMinValue(): number;
        get effectiveMaxValue(): number;
        /**
         * Maps a value from this axis' coordinate system to a pixel position in specified view.
         * @param {Number} value A number value.
         * @param {Number} viewSize The view size.
         * @returns {Number} X coordinate of pixel.
         */
        mapValueToPixelX(value: number, viewSize: number): number;
        /**
         * Maps a value from this axis' coordinate system to a pixel position in specified view.
         * @param {Number} value A number value.
         * @param {Number} viewSize The view size.
         * @returns {Number} Y coordinate of pixel.
         */
        mapValueToPixelY(value: number, viewSize: number): number;
        m_id: number;
        id(): number;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            id: number;
            interval: number;
            minValue: number;
            maxValue: number;
            numberFormat: string;
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A base class for components that render Axis ranges.
    * @property {MindFusion.Charting.Axis} axis Gets or sets the Axis that will be drawn by this object.
    * @property {Boolean} pinLabels Gets or sets a value indicating whether coordinate labels should be pinned in place or scroll together with the plot when users pan it.
    * @property {SeriesContainer} labelsSource Gets or sets the object whose Series labels should be rendered along this axis.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
    * @property {Boolean} showSeriesLabels Gets or sets a value indicating whether this AxisRenderer should draw data labels.
    * @property {Boolean} showTicks Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
    * @property {MindFusion.Charting.Drawing.Brush} labelBrush Gets or sets the Brush that should be used to draw axis labels.
    * @property {String} labelFontName Gets or sets the name of font that should be used to draw axis labels.
    * @property {Number} labelFontSize Gets or sets the size of font that should be used to draw axis labels.
    * @property {MindFusion.Charting.Drawing.FontStyle} labelFontStyle Gets or sets the style of font that should be used to draw axis labels.
    * @property {Number} labelPadding Gets or sets the padding space between the axis line and coordinate labels.
    * @property {Number} labelRotationAngle Gets or sets the rotation angle of the labels.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush that should be used to draw the axis Title.
    * @property {String} titleFontName Gets or sets the name of font that should be used to draw the axis Title.
    * @property {Number} titleFontSize Gets or sets the size of font that should be used to draw the axis Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font that should be used to draw the axis Title.
    * @property {MindFusion.Charting.Drawing.Brush} axisStroke Gets or sets the Brush that should be used to draw axis lines.
    * @property {Number} axisStrokeThickness Gets or sets the thickness axis lines should be stroked with.
    * @property {MindFusion.Charting.Drawing.DashStyle} axisStrokeDashStyle Gets or sets the dash style axis lines should be stroked with.
    */
    abstract class AxisRenderer extends MindFusion.Charting.Components.Component {
        /**
         * Initializes a new instance of the AxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         */
        constructor(axis: Axis);
        /**
         * The Axis that will be drawn by this object.
         */
        get axis(): Axis;
        /**
         * The Axis that will be drawn by this object.
         */
        set axis(value: Axis);
        /**
         * Gets the effective Axis in current context, getting one from Plot2D
         * or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        abstract effectiveAxis(context: RenderContext): Axis;
        /**
         * Gets or sets a value indicating whether coordinate labels should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        get pinLabels(): boolean;
        /**
         * Gets or sets a value indicating whether coordinate labels should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        set pinLabels(value: boolean);
        getLabel(index: number, value: number, context: RenderContext): string;
        /**
         * Gets or sets the object whose Series labels should be rendered along this axis.
         */
        get labelsSource(): SeriesContainer;
        /**
         * Gets or sets the object whose Series labels should be rendered along this axis.
         */
        set labelsSource(value: SeriesContainer);
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
         */
        get showCoordinates(): boolean;
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis coordinates.
         */
        set showCoordinates(value: boolean);
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw data labels.
         */
        get showSeriesLabels(): boolean;
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw data labels.
         */
        set showSeriesLabels(value: boolean);
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
         */
        get showTicks(): boolean;
        /**
         * Gets or sets a value indicating whether this AxisRenderer should draw axis ticks.
         */
        set showTicks(value: boolean);
        get tickLength(): number;
        set tickLength(value: number);
        /**
         * Gets the Font that should be used to draw axis labels.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveLabelFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the Brush that should be used to draw axis labels.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveLabelBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the Font that should be used to draw the axis Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveTitleFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the Brush that should be used to draw the axis Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveTitleBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw axis labels.
         */
        get labelBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw axis labels.
         */
        set labelBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font that should be used to draw axis labels.
         */
        get labelFontName(): string;
        /**
         * Gets or sets the name of font that should be used to draw axis labels.
         */
        set labelFontName(value: string);
        /**
         * Gets or sets the size of font that should be used to draw axis labels.
         */
        get labelFontSize(): number;
        /**
         * Gets or sets the size of font that should be used to draw axis labels.
         */
        set labelFontSize(value: number);
        /**
         * Gets or sets the style of font that should be used to draw axis labels.
         */
        get labelFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font that should be used to draw axis labels.
         */
        set labelFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the padding space between the axis line and coordinate labels.
         */
        get labelPadding(): number;
        /**
         * Gets or sets the padding space between the axis line and coordinate labels.
         */
        set labelPadding(value: number);
        /**
         * Gets or sets the rotation angle of the labels.
         */
        get labelRotationAngle(): number;
        /**
         * Gets or sets the rotation angle of the labels.
         */
        set labelRotationAngle(value: number);
        /**
         * Gets or sets the Brush that should be used to draw the axis Title.
         */
        get titleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw the axis Title.
         */
        set titleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font that should be used to draw the axis Title.
         */
        get titleFontName(): string;
        /**
         * Gets or sets the name of font that should be used to draw the axis Title.
         */
        set titleFontName(value: string);
        /**
         * Gets or sets the size of font that should be used to draw the axis Title.
         */
        get titleFontSize(): number;
        /**
         * Gets or sets the size of font that should be used to draw the axis Title.
         */
        set titleFontSize(value: number);
        /**
         * Gets or sets the style of font that should be used to draw the axis Title.
         */
        get titleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font that should be used to draw the axis Title.
         */
        set titleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush that should be used to draw axis lines.
         */
        get axisStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw axis lines.
         */
        set axisStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness axis lines should be stroked with.
         */
        get axisStrokeThickness(): number;
        /**
         * Gets or sets the thickness axis lines should be stroked with.
         */
        set axisStrokeThickness(value: number);
        /**
         * Gets or sets the dash style axis lines should be stroked with.
         */
        get axisStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the dash style axis lines should be stroked with.
         */
        set axisStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets the Pen that should be used to draw axis lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A System.Pen instance.
         */
        effectivePen(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets the Brush that should be used to stroke axis lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveAxisStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of axis line strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveAxisStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of axis line strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveAxisDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        fromJson(json: any): any;
        toJson(): any;
        dataReader: DataReader;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines properties common to all bar-chart renderers.
     */
    interface BarContainer {
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        horizontalBars: boolean;
        /**
        * Gets or sets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        stackOuterLabels: boolean;
        /**
        * Gets or sets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        outerLabelRotation: number;
        /**
        * Gets or sets the rotation angle of inner labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        innerLabelRotation: number;
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        barSpacingRatio: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies supported bar placements when rendering multiple series.
    * @enum
    * @name BarLayout
    * @param [SideBySide] Render elements at same index from all series as a group of side-by-side bars.
    * @param [Stack] Render elements at same index from all series as stacked bars.
    * @param [Overlay] Render elements at same index from all series as overlaid bars.
    */
    enum BarLayout {
        /**
        * Render elements at same index from all series as a group of side-by-side bars.
        */
        SideBySide = 0,
        /**
        * Render elements at same index from all series as stacked bars.
        */
        Stack = 1,
        /**
        * Render elements at same index from all series as overlaid bars.
        */
        Overlay = 2
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies supported bar shapes when rendering multiple series.
    * @enum
    * @name BarModel3D
    * @param [Bar] Draw bars as rectangular cuboids.
    * @param [Cylinder] Draw bars as cylinders.
    */
    enum BarModel3D {
        Bar = 0,
        Cylinder = 1
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws overlaying bars in its containing plot.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    */
    class BarOverlayRenderer extends Renderer2D implements BarContainer {
        /**
         * Initializes a new instance of the BarOverlayRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as overlaying bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        get horizontalBars(): boolean;
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        set horizontalBars(value: boolean);
        /**
         * Gets the ratio between widths of backmost and frontmost bars.
         * @returns {Number} 3
         */
        backToFrontRatio(): number;
        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {Boolean} frontToBack true to enumerate from front bar to back bar, or false otherwise.
         * @param {ProcessBars} process A ProcessBars callback.
         * @remarks The signature of the ProcessBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleOverlays(context: RenderContext, frontToBack: boolean, process: ProcessBars): void;
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        get barSpacingRatio(): number;
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        set barSpacingRatio(value: number);
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * seriesRenderer.AdjustDataRange override. Adjusts the data range of associated
         * Axis objects after initial measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: MindFusion.Drawing.Rect, labelRenderer: TextRenderer, oppositeDirection: boolean): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
        * Gets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        get stackOuterLabels(): boolean;
        /**
        * Sets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        set stackOuterLabels(value: boolean);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get outerLabelRotation(): number;
        /**
        * Sets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set outerLabelRotation(value: number);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get innerLabelRotation(): number;
        /**
        * Sets the rotation angle of inner labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set innerLabelRotation(value: number);
        fromJson(json: string): void;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
    */
    interface ProcessBars {
        (seriesIndex: number, dataIndex: number, bounds: MindFusion.Drawing.Rect, oppositeDirection: boolean): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws a row of 3D bars for each series.
     */
    class BarOverlayRenderer3D extends BarOverlayRenderer implements Renderer3D {
        /**
         * Initializes a new instance of the BarOverlayRenderer3D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as rows of bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * BarOverlayRenderer.BackToFrontRatio override. Gets the ratio
         * between widths of backmost and frontmost bars.
         * @returns {Number} 1.
         */
        backToFrontRatio(): number;
        /**
         * Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: MindFusion.Charting.ThreeD.Scene3D, context: RenderContext): void;
        barModel: BarModel3D;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws bars in its containing plot.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Boolean} stackOuterLabels Gets whether outer labels are displayed stacked on top of stacked bars, instead of showing them on the bar sides.
    * @property {Number} outerLabelRotation Gets the rotation angle of outer labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.
    * @property {Number} innerLabelRotation Gets the rotation angle of inner labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    * @property {Number} sameIndexSpacingRatio Gets or sets the ratio of empty space to occupied space in bar groups drawn for data items as same index in each series.
    */
    class BarRenderer extends Renderer2D implements BarContainer {
        /**
         * Initializes a new instance of the BarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        get horizontalBars(): boolean;
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        set horizontalBars(value: boolean);
        /**
        * Gets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        get stackOuterLabels(): boolean;
        /**
        * Sets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        set stackOuterLabels(value: boolean);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get outerLabelRotation(): number;
        /**
        * Sets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set outerLabelRotation(value: number);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get innerLabelRotation(): number;
        /**
        * Sets the rotation angle of inner labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set innerLabelRotation(value: number);
        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessBars} process A ProcessBars callback.
         * @remarks The signature of the ProcessBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A Rect representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleBars(context: RenderContext, process: ProcessBars): void;
        /**
         * Gets or sets the ratio of empty space to occupied space
         * in bar groups drawn for data items as same index in each series.
         */
        get sameIndexSpacingRatio(): number;
        /**
         * Gets or sets the ratio of empty space to occupied space
         * in bar groups drawn for data items as same index in each series.
         */
        set sameIndexSpacingRatio(value: number);
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        get barSpacingRatio(): number;
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        set barSpacingRatio(value: number);
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.AdjustDataRange override. Adjusts the data range of associated
         * Axis objects after initial measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: MindFusion.Drawing.Rect, labelRenderer: TextRenderer, oppositeDirection: boolean): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        fromJson(json: string): void;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A Rect representing the boundaries of current bar.
    * @param {Boolean} oppositeDirection The bar is drawn below the axis origin.
    */
    interface ProcessBars {
        (seriesIndex: number, dataIndex: number, bounds: MindFusion.Drawing.Rect, oppositeDirection: boolean): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws 3D bars in its containing plot.
     */
    class BarRenderer3D extends BarRenderer implements Renderer3D {
        /**
         * Initializes a new instance of the BarRenderer3D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as 3D bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: MindFusion.Charting.ThreeD.Scene3D, context: RenderContext): void;
        barModel: BarModel3D;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents one-dimensional series defined by e list of data values and a list of labels.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Data list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 1.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Number>} data Gets or sets the data values contained in this series.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class SimpleSeries implements Series {
        /**
         * Initializes a new instance of the SimpleSeries class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} [tooltips] A list of tooltips.
         */
        constructor(values: MindFusion.Charting.Collections.List<number> | Array<number>, labels: MindFusion.Charting.Collections.List<string> | Array<string>, tooltips?: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Gets a value indicating whether
         * the specified data item should be emphasized by the SeriesRenderer.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. SimpleSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Data list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 1.
         */
        get dimensions(): number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Gets or sets the data values contained in this series.
         */
        get data(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the data values contained in this series.
         */
        set data(value: MindFusion.Charting.Collections.List<number>);
        protected values: MindFusion.Charting.Collections.List<number>;
        protected labels: MindFusion.Charting.Collections.List<string>;
        protected tooltips: MindFusion.Charting.Collections.List<string>;
        protected emphasizedIndices: MindFusion.Charting.Collections.List<number>;
        /**
         * Raised when the values in this series change.
         * @event SimpleSeries.dataChanged
         * @type {EventDispatcher}
         * @property {SimpleSeries} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(json: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents one-dimensional series defined by e list of data values
    * and several lists of labels.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels SimpleSeries.SupportedLabels override. Returns a combination of InnerLabel, OuterLabel and XAxisLabel.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<String>} topLabels Gets or sets the top labels.
    * @property {MindFusion.Charting.Collections.List<String>} xAxisLabels Gets or sets the X axis labels.
    */
    class BarSeries extends SimpleSeries {
        /**
         * Initializes a new instance of the BarSeries class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Nuber>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} innerLabels A list of inner labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} [topLabels] A list of top labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} [xAxisLabels] A list of X axis labels.
         */
        constructor(values: MindFusion.Charting.Collections.List<number> | Array<number>, innerLabels: MindFusion.Charting.Collections.List<string> | Array<string>, topLabels?: MindFusion.Charting.Collections.List<string> | Array<string>, xAxisLabels?: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * SimpleSeries.GetLabel override. Returns an element of a labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets or sets the inner labels.
         */
        get innerLabels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the inner labels.
         */
        set innerLabels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Gets or sets the top labels.
         */
        get topLabels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the top labels.
         */
        set topLabels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Gets or sets the X axis labels.
         */
        get xAxisLabels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the X axis labels.
         */
        set xAxisLabels(value: MindFusion.Charting.Collections.List<string>);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class BarSpacing {
        constructor(axis: Axis, barsPerGroup: number, groups: number, dataRange: number, lenPixels: number, sameIndexSpacingRatio: number, barSpacingRatio: number);
        barWidth: number;
        padding: number;
        external: number;
        seriesOffset: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws stacked bars in its containing plot.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
    */
    class BarStackRenderer extends StackRenderer implements BarContainer {
        /**
         * Initializes a new instance of the BarStackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        get horizontalBars(): boolean;
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        set horizontalBars(value: boolean);
        /**
         * Enumerates the bars visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessStackBars} process A ProcessStackBars callback.
         * @remarks The signature of the ProcessStackBars delegate is as follows:
         * 'function(seriesIndex, dataIndex, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
         * The method is not expected to return a value.
         */
        enumVisibleStackBars(context: RenderContext, process: ProcessStackBars): void;
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        get barSpacingRatio(): number;
        /**
         * Gets or sets the ratio of empty space between adjacent bar groups to space occupied by bars.
         */
        set barSpacingRatio(value: number);
        /**
         * StackRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * seriesRenderer.AdjustDataRange override. Adjusts the data range of associated
         * Axis objects after initial measure pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: MindFusion.Drawing.Rect, labelRenderer: TextRenderer, oppositeDirection: boolean): void;
        static offset(rect: MindFusion.Drawing.Rect, dx: number, dy: number): MindFusion.Drawing.Rect;
        /**
         * StackRenderer.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bar.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bar in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
        * Gets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        get stackOuterLabels(): boolean;
        /**
        * Sets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        set stackOuterLabels(value: boolean);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get outerLabelRotation(): number;
        /**
        * Sets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set outerLabelRotation(value: number);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get innerLabelRotation(): number;
        /**
        * Sets the rotation angle of inner labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set innerLabelRotation(value: number);
        fromJson(json: string): void;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process stacked bars.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current bar.
    */
    interface ProcessStackBars {
        (seriesIndex: number, dataIndex: number, bounds: MindFusion.Drawing.Rect, oppositeDirection: boolean): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws stacked 3D bars in its containing plot.
     */
    class BarStackRenderer3D extends BarStackRenderer implements Renderer3D {
        /**
         * Initializes a new instance of the BarStackRenderer3D class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked bars.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Implements Renderer3D.BuildModels. Adds 3D bar models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: MindFusion.Charting.ThreeD.Scene3D, context: RenderContext): void;
        barModel: BarModel3D;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Specifies the alignment of a label relative to its associated bubble.
    * @enum
    * @name BubbleLabelAlignment
    * @param [Center] Indicates that the label is centered inside the bubble.
    * @param [Above] Indicates that the label is positioned above the bubble.
    * @param [Below] Indicates that the label is positioned below the bubble.
    * @param [Left] Indicates that the label is positioned to the left of the bubble.
    * @param [Right] Indicates that the label is positioned to the right of the bubble.
    */
    enum BubbleLabelAlignment {
        /**
        * Indicates that the label is centered inside the bubble.
        */
        Center = 0,
        /**
        * Indicates that the label is positioned above the bubble.
        */
        Above = 1,
        /**
        * Indicates that the label is positioned below the bubble.
        */
        Below = 2,
        /**
        * Indicates that the label is positioned to the left of the bubble.
        */
        Left = 3,
        /**
        * Indicates that the label is positioned to the right of the bubble.
        */
        Right = 4
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws bubbles representing data items in its containing plot.
    * @property {BubbleLabelAlignment} labelAlignment Gets or sets the label alignment.
    */
    class BubbleRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the BubbleRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as bubbles.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws bubbles representing data items in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bubble representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a bubble.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted bubble in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
        * Gets the label alignment.
        */
        get labelAlignment(): BubbleLabelAlignment;
        /**
        * Sets the label alignment.
        */
        set labelAlignment(value: BubbleLabelAlignment);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws candlesticks in its containing plot.
    * @property {Number} openDimension  Gets or sets the index of the dimension, containing open values.
    * @property {Number} closeDimension  Gets or sets the index of the dimension, containing close values.
    * @property {Number} lowDimension  Gets or sets the index of the dimension, containing low values.
    * @property {Number} highDimension  Gets or sets the index of the dimension, containing high values.
    * @property {Number} candlestickWidth  Gets or sets the width of the candlesticks.
    */
    class CandlestickRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the CandlestickRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Enumerates the candlesticks visible in current data range.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessCandlesticks} process A ProcessBars callback.
         * @remarks The signature of the ProcessCandlesticks delegate is as follows:
         * 'function(seriesIndex, dataIndex, points, bounds)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {MindFusion.Drawing.Point[]} points An array of four points containing wick ends' coordinates.
         * param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current candlestick.
         * The method is not expected to return a value.
         */
        enumVisibleCandlesticks(context: RenderContext, process: ProcessCandlesticks): void;
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        drawLabels(context: RenderContext, s: number, i: number, bounds: MindFusion.Drawing.Rect, labelRenderer: TextRenderer): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the bar representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a candlestick.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted candlestick in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Gets or sets the index of the dimension, containing open values.
         */
        get openDimension(): number;
        /**
         * Gets or sets the index of the dimension, containing open values.
         */
        set openDimension(value: number);
        /**
         * Gets or sets the index of the dimension, containing close values.
         */
        get closeDimension(): number;
        /**
         * Gets or sets the index of the dimension, containing close values.
         */
        set closeDimension(value: number);
        /**
         * Gets or sets the index of the dimension, containing low values.
         */
        get lowDimension(): number;
        /**
         * Gets or sets the index of the dimension, containing low values.
         */
        set lowDimension(value: number);
        /**
         * Gets or sets the index of the dimension, containing high values.
         */
        get highDimension(): number;
        /**
         * Gets or sets the index of the dimension, containing high values.
         */
        set highDimension(value: number);
        /**
         * Gets or sets the width of the candlesticks.
         */
        get candlestickWidth(): number;
        /**
         * Gets or sets the width of the candlesticks.
         */
        set candlestickWidth(value: number);
        /**
         * Gets the brush that should be used to fill the representation of specified data item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this SeriesRenderer.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(seriesIndex: number, dataIndex: number, context: RenderContext): MindFusion.Charting.Drawing.Brush;
        fromJson(json: string): any;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process candlesticks.
    * @param {Number} seriesIndex An integer index of series in Series list.
    * @param {Number} dataIndex An integer index of data item in specified series.
    * @param {MindFusion.Drawing.Point[]} points An array of four points containing wick ends' coordinates.
    * @param {MindFusion.Drawing.Rect} bounds A RectangleF representing the boundaries of current candlestick.
    */
    interface ProcessCandlesticks {
        (seriesIndex: number, dataIndex: number, points: MindFusion.Drawing.Point[], bounds: MindFusion.Drawing.Rect): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines appearance attributes of series elements.
     */
    interface SeriesStyle {
        /**
         * Returns a Brush that should be used to fill specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Returns a Brush that should be used to stroke specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Returns the thickness of the stroke used to draw specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Returns the dash style of the stroke used to draw specified element of specified series.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Defines appearance attributes for candlestick charts.
    * @property {MindFusion.Charting.Drawing.Brush} risingBrush Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.
    * @property {MindFusion.Charting.Drawing.Brush} fallingBrush Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.
    */
    class CandlestickSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of CandlestickSeriesStyle.
         */
        constructor(risingBrush: MindFusion.Charting.Drawing.Brush, fallingBrush: MindFusion.Charting.Drawing.Brush, stroke: MindFusion.Charting.Drawing.Brush, strokeThickness: number, strokeDashStyle: MindFusion.Charting.Drawing.DashStyle, renderer: CandlestickRenderer);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush instance, depending on the series data.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.
         */
        get risingBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is smaller or equal to its close value.
         */
        set risingBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.
         */
        get fallingBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to fill candlesticks, which open value is greater than its close value.
         */
        set fallingBrush(value: MindFusion.Charting.Drawing.Brush);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws each series as an area with curved boundaries in its containing plot.
     */
    class CurveAreaRenderer extends AreaRenderer {
        /**
         * Initializes a new instance of the CurveAreaRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as areas.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * AreaRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws stacked areas in its containing plot.
     */
    class CurveAreaStackRenderer extends StackRenderer {
        /**
         * Initializes a new instance of the CurveAreaStackRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as stacked areas.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws series as polylines.
     */
    class LineRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the LineRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as polylines.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws series as a cardinal spline.
     */
    class CurveRenderer extends LineRenderer {
        /**
         * Initializes a new instance of the CurveRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as a cardinal spline.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * LineRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Specifies the interface that data providers should implement
     * in order to feed data to SeriesRenderer classes.
     */
    interface Series {
        /**
         * Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Returns a label for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets a value indicating whether the series values increase monotonously in specified dimension.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Gets a value indicating whether the specified data item should be emphasized by the SeriesRenderer.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Gets the number of data items in this series.
         */
        size: number;
        /**
         * Gets the number of values (coordinates) that can be returned by each data item.
         */
        dimensions: number;
        /**
         * Gets the title of this series.
         */
        title: string;
        /**
         * Gets the kind of labels supported by this series.
         */
        supportedLabels: LabelKinds;
        /**
         * Raised when the values in this series change.
         * @event Series.dataChanged
         * @type {EventDispatcher}
         * @property {Series} sender
         * @property {EventArgs} args
         */
        dataChanged: MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        toJson(): any;
    }
    interface StyleCheck {
        (style: SeriesStyle): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a series whose data items are retrieved from a data source.
    * @property {any} dataSource Gets or sets the data source this series is bound to.
    * @property {String} xDataField Gets or sets the name of X data field in the data source.
    * @property {String} yDataField Gets or sets the name of Y data field in the data source.
    * @property {String} zDataField Gets or sets the name of Z data field in the data source.
    * @property {String} innerLabelsDataField Gets or sets the name of inner labels data field in the data source.
    * @property {String} outerLabelsDataField Gets or sets the name of inner labels data field in the data source.
    * @property {String} toolTipsDataField Gets or sets the name of tooltips data field in the data source.
    * @property {String} xAxisLabelsDataField Gets or sets the name of X axis labels data field in the data source.
    * @property {String} yAxisLabelsDataField Gets or sets the name of Y axis labels data field in the data source.
    * @property {String} zAxisLabelsDataField Gets or sets the name of Z axis labels data field in the data source.
    * @property {Number} size Implements Series.Size. Gets the number of data items in the data source.
    * @property {Number} dimensions Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.
    */
    class DataBoundSeries implements Series {
        /**
         * Initializes a new instance of the DataBoundSeries class.
         * @param { any | Array<any> | IEnumerable<any>} dataSource A reference to the data source object.
         */
        constructor(dataSource: any);
        /**
         * Gets or sets the data source this series is bound to.
         */
        get dataSource(): any;
        /**
         * Gets or sets the data source this series is bound to.
         */
        set dataSource(value: any);
        get enumerableDataSource(): boolean;
        get arrayDataSource(): boolean;
        /**
         * Gets or sets the name of X data field in the data source.
         */
        get xDataField(): string;
        /**
         * Gets or sets the name of X data field in the data source.
         */
        set xDataField(value: string);
        /**
         * Gets or sets the name of Y data field in the data source.
         */
        get yDataField(): string;
        /**
         * Gets or sets the name of Y data field in the data source.
         */
        set yDataField(value: string);
        /**
         * Gets or sets the name of Z data field in the data source.
         */
        get zDataField(): string;
        /**
         * Gets or sets the name of Z data field in the data source.
         */
        set zDataField(value: string);
        /**
         * Gets or sets the name of inner labels data field in the data source.
         */
        get innerLabelsDataField(): string;
        /**
         * Gets or sets the name of inner labels data field in the data source.
         */
        set innerLabelsDataField(value: string);
        /**
         * Gets or sets the name of outer labels data field in the data source.
         */
        get outerLabelsDataField(): string;
        /**
         * Gets or sets the name of outer labels data field in the data source.
         */
        set outerLabelsDataField(value: string);
        /**
         * Gets or sets the name of tooltips data field in the data source.
         */
        get toolTipsDataField(): string;
        /**
         * Gets or sets the name of tooltips data field in the data source.
         */
        set toolTipsDataField(value: string);
        /**
         * Gets or sets the name of X axis labels data field in the data source.
         */
        get xAxisLabelsDataField(): string;
        /**
         * Gets or sets the name of X axis labels data field in the data source.
         */
        set xAxisLabelsDataField(value: string);
        /**
         * Gets or sets the name of Y axis labels data field in the data source.
         */
        get yAxisLabelsDataField(): string;
        /**
         * Gets or sets the name of Y axis labels data field in the data source.
         */
        set yAxisLabelsDataField(value: string);
        /**
         * Gets or sets the name of Z axis labels data field in the data source.
         */
        get zAxisLabelsDataField(): string;
        /**
         * Gets or sets the name of Z axis labels data field in the data source.
         */
        set zAxisLabelsDataField(value: string);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in the data source.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the data source.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns a label for the specified data item in the data source.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. DataBoundSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Gets a value indicating whether
         * the series values increase monotonously in specified dimension.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Gets the number of data items in the data source.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns the number of X/Y/ZDataField properties set.
         */
        get dimensions(): number;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Implements Series.SupportedLabels. Result depends on which *LabelsDataField properties are set.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Raised when the values in this series change.
         * @event DataBoundSeries.dataChanged
         * @type {EventDispatcher}
         * @property {DataBoundSeries} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            innerLabelsDataField: string;
            outerLabelsDataField: string;
            toolTipsDataField: string;
            xAxisLabelsDataField: string;
            yAxisLabelsDataField: string;
            zAxisLabelsDataField: string;
            xDataField: string;
            yDataField: string;
            zDataField: string;
            title: string;
            dataSource: any;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    interface AxisData {
        (series: Series, dataIndex: number): number;
    }
    class DataReader {
        constructor();
        get domainDimension(): number;
        set domainDimension(value: number);
        xData(series: Series, dataIndex: number): number;
        yData(series: Series, dataIndex: number): number;
        xSorted(series: Series): boolean;
        ySorted(series: Series): boolean;
        getMinX(series: Series): number;
        getMaxX(series: Series): number;
        getMinY(series: Series): number;
        getMaxY(series: Series): number;
        getFirstInRange(series: Series, x: Axis, xData: AxisData): number;
        getLastInRange(series: Series, x: Axis, xData: AxisData): number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Specifies formats for DateTime values.
    * @enum
    * @name DateTimeFormat
    * @param [CustomDateTime] Indicates that the number should be formatted as a DateTime value according to a custom set string.
    * @param [FullDateTime] Indicates that the number should be formatted as a DateTime value with a full date pattern.
    * @param [LongDate] Indicates that the number should be formatted as a DateTime value with a long date pattern.
    * @param [LongTime] Indicates that the number should be formatted as a DateTime value with a long time pattern.
    * @param [MonthDateTime] Indicates that the number should be formatted as a DateTime value with a month day pattern.
    * @param [None] The DateTime value is not formatted
    * @param [ShortDate] Indicates that the number should be formatted as a DateTime value with a short date pattern.
    * @param [ShortTime] Indicates that the number should be formatted as a DateTime value with a short time pattern.
    * @param [YearDateTime] Indicates that the number should be formatted as a DateTime value with a year month date pattern.
    */
    enum DateTimeFormat {
        /**
         * Indicates that the number should be formatted as a DateTime value according to a custom set string.
         */
        CustomDateTime = 0,
        /**
         * Indicates that the number should be formatted as a DateTime value with a full date pattern.
         */
        FullDateTime = 1,
        /**
         * Indicates that the number should be formatted as a DateTime value with a long date pattern.
         */
        LongDate = 2,
        /**
         * Indicates that the number should be formatted as a DateTime value with a long time pattern.
         */
        LongTime = 3,
        /**
         * Indicates that the number should be formatted as a DateTime value with a month day pattern.
         */
        MonthDateTime = 4,
        /**
         * The DateTime value is not formatted
         */
        None = 5,
        /**
         * Indicates that the number should be formatted as a DateTime value with a short date pattern.
         */
        ShortDate = 6,
        /**
         * Indicates that the number should be formatted as a DateTime value with a short time pattern.
         */
        ShortTime = 7,
        /**
         * Indicates that the number should be formatted as a DateTime value with a year month date pattern.
         */
        YearDateTime = 8
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a series that contains Date values as X coordinates and number values as Y coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements provided in Date list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns LabelKinds.XAxisLabel.
    * @property {MindFusion.Charting.Collections.List<Date>} dates Gets or sets a list of Date values used as X coordinates of this series.
    * @property {Number} minValue Gets or sets the coordinate corresponding to MinDate.
    * @property {Number} maxValue Gets or sets the coordinate corresponding to MaxDate.
    * @property {Date} minDate Gets or sets the start of the time range.
    * @property {Date} maxDate Gets or sets the end of the time range.
    * @property {String} dateTimeFormat Gets or sets a value indicating how to format Date values as labels.
    * @property {String} customDateTimeFormat Gets or sets a custom format string for Date labels.
    * @property {String} labelPrefix Gets or sets a prefix added in front of formatted Date labels.
    * @property {String} labelSuffix Gets or sets a suffix appended to formatted Date labels.
    */
    class DateTimeSeries implements Series {
        /**
         * Initializes a new instance of the DateTimeSeries class.
         * @param {MindFusion.Charting.Collections.List<Date> | Array<Date>} dates A list of Date values.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} values A list of number values.
         * @param {Date} minDate Identifies the start of the time range.
         * @param {Date} maxDate Identifies the end of the time range.
         */
        constructor(dates: MindFusion.Charting.Collections.List<Date> | Array<Date>, values: MindFusion.Charting.Collections.List<number> | Array<number>, minDate: Date, maxDate: Date);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns Date value at specified index as an XAxisLabel.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsSorted. DateTimeSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.IsEmphasized. DateTimeSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements provided in Date list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        get dimensions(): number;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Gets or sets a list of Date values used as X coordinates of this series.
         */
        get dates(): MindFusion.Charting.Collections.List<Date>;
        /**
         * Gets or sets a list of Date values used as X coordinates of this series.
         */
        set dates(value: MindFusion.Charting.Collections.List<Date>);
        /**
         * Gets or sets the coordinate corresponding to MinDate.
         */
        get minValue(): number;
        /**
         * Gets or sets the coordinate corresponding to MinDate.
         */
        set minValue(value: number);
        /**
         * Gets or sets the coordinate corresponding to MaxDate.
         */
        get maxValue(): number;
        /**
         * Gets or sets the coordinate corresponding to MaxDate.
         */
        set maxValue(value: number);
        /**
         * Gets or sets the start of the time range.
         */
        get minDate(): Date;
        /**
         * Gets or sets the start of the time range.
         */
        set minDate(value: Date);
        /**
         * Gets or sets the end of the time range.
         */
        get maxDate(): Date;
        /**
         * Gets or sets the end of the time range.
         */
        set maxDate(value: Date);
        /**
         * Gets or sets a value indicating how to format Date values as labels.
         */
        get dateTimeFormat(): DateTimeFormat;
        /**
         * Gets or sets a value indicating how to format Date values as labels.
         */
        set dateTimeFormat(value: DateTimeFormat);
        /**
         * Gets or sets a custom format string for Date labels.
         */
        get customDateTimeFormat(): string;
        /**
         * Gets or sets a custom format string for Date labels.
         */
        set customDateTimeFormat(value: string);
        /**
         * Gets or sets a prefix added in front of formatted Date labels.
         */
        get labelPrefix(): string;
        /**
         * Gets or sets a prefix added in front of formatted Date labels.
         */
        set labelPrefix(value: string);
        /**
         * Gets or sets a suffix appended to formatted Date labels.
         */
        get labelSuffix(): string;
        /**
         * Gets or sets a suffix appended to formatted Date labels.
         */
        set labelSuffix(value: string);
        /**
         * Raised when the values in this series change.
         * @event DateTimeSeries.dataChanged
         * @type {EventDispatcher}
         * @property {DateTimeSeries} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            values: number[];
            minDate: number;
            maxDate: number;
            title: string;
            labelPrefix: string;
            labelSuffix: string;
            dateTimeFormat: DateTimeFormat;
            customDateTimeFormat: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that is used to represent stages in a sales process
    * and show the amount of potential revenue for each stage.
    * @property {Series} series Gets or sets the Series drawn by this FunnelRenderer.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    * @property {Number} segmentSpacing Gets or sets the spacing between segments.
    * @property {Number} stemWidth Gets or sets the width of the funnel stem.
    */
    class FunnelRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the FunnelRenderer class.
         * @param {Series} series The Series that should be rendered as a funnel.
         * @param {Number} [dimension] Specifies the Series dimension index that should be used to access data.
         */
        constructor(series: Series, dimension?: number);
        /**
         * Enumerates the segments of the funnel.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSegment} process A ProcessSegment callback.
         * @remarks The signature of the ProcessSegment delegate is as follows:
         * 'function(dataIndex, points)'.
         * param {Number} dataIndex An integer index of data item in Series.
         * param {MindFusion.Drawing.Point[]} points The defining points of the segment's bounding polygon.
         * @remarks The method is not expected to return a value.
         */
        protected enumSegments(context: RenderContext, process: ProcessSegment): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the slices representing data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a pie slice.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
        */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
         * Gets or sets the Series drawn by this FunnelRenderer.
         */
        get series(): Series;
        /**
         * Gets or sets the Series drawn by this FunnelRenderer.
         */
        set series(value: Series);
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        get dimension(): number;
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        set dimension(value: number);
        /**
         * Gets or sets the spacing between segments.
         */
        get segmentSpacing(): number;
        /**
         * Gets or sets the spacing between segments.
         */
        set segmentSpacing(value: number);
        /**
         * Gets or sets the width of the funnel base.
         */
        get stemWidth(): number;
        /**
         * Gets or sets the width of the funnel base.
         */
        set stemWidth(value: number);
        fromJson(json: string): any;
        toJson(): any;
    }
    interface ProcessSegment {
        (dataIndex: number, points: MindFusion.Drawing.Point[]): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Indicates Plot2D grid type.
    * @enum
    * @name GridType
    * @param [None] Do not draw grid.
    * @param [Horizontal] Draw horizontal stripes.
    * @param [Vertical] Draw vertical stripes.
    * @param [Crossed] Draw crossed stripes.
    */
    enum GridType {
        /**
        * Do not draw grid.
        */
        None = 0,
        /**
        * Draw horizontal stripes.
        */
        Horizontal = 1,
        /**
        * Draw vertical stripes.
        */
        Vertical = 2,
        /**
        * Draw crossed stripes.
        */
        Crossed = 3
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents the result of a hit-test operation.
    * @property {Plot} plot Gets or sets the Plot that has been hit.
    * @property {SeriesRenderer} renderer Gets or sets the SeriesRenderer that has been hit.
    * @property {Number} index Gets or sets the data item index within its Series.
    * @property {Number} value Gets or sets the data item value.
    * @property {Series} series Gets or sets the Series that has been hit.
    */
    class HitResult extends EventArgs {
        /**
         * Initializes a new instance of the HitResult class.
         * @param {SeriesRenderer} renderer A SeriesRenderer whose data item has been hit.
         * @param {Number} index An integer index of the data item.
         * @param {Number} value The item's vaue.
         * @param {Series} series The Series that contains the found item.
         */
        constructor(renderer: SeriesRenderer, index: number, value: number, series: Series);
        /**
         * Gets the Plot that has been hit.
         */
        get plot(): Plot;
        /**
         * Gets the Plot that has been hit.
         */
        set plot(value: Plot);
        /**
         * Gets the SeriesRenderer that has been hit.
         */
        get renderer(): SeriesRenderer;
        /**
         * Gets the SeriesRenderer that has been hit.
         */
        set renderer(value: SeriesRenderer);
        /**
         * Gets the data item index within its Series.
         */
        get index(): number;
        /**
         * Gets the data item index within its Series.
         */
        set index(value: number);
        /**
         * Gets the data item value.
         */
        get value(): number;
        /**
         * Gets the data item value.
         */
        set value(value: number);
        /**
         * Gets the Series that has been hit.
         */
        get series(): Series;
        /**
         * Gets the Series that has been hit.
         */
        set series(value: Series);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies the various kinds of labels that can be drawn for data items.
    * @enum
    * @name LabelKinds
    * @param [None] Do not draw labels.
    * @param [InnerLabel] Draw inner label in graphic representation of data item.
    * @param [OuterLabel] Draw outer label nearby graphic representation of data item.
    * @param [ToolTip] Show label as a tooltip.
    * @param [XAxisLabel] Draw data label at X axis.
    * @param [YAxisLabel] Draw data label at Y axis.
    * @param [ZAxisLabel] Draw data label at Z axis.
    * @param [All] Draw all labels supported by a series.
    */
    enum LabelKinds {
        /**
        * Do not draw labels.
        */
        None = 0,
        /**
        * Draw inner label in graphic representation of data item.
        */
        InnerLabel = 1,
        /**
        * Draw outer label nearby graphic representation of data item.
        */
        OuterLabel = 2,
        /**
        * Show label as a tooltip.
        */
        ToolTip = 4,
        /**
        * Draw data label at X axis.
        */
        XAxisLabel = 8,
        /**
        * Draw data label at Y axis.
        */
        YAxisLabel = 16,
        /**
        * Draw data label at Z axis.
        */
        ZAxisLabel = 32,
        /**
        * Draw all labels supported by a series.
        */
        All = -1
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A base class for controllers implementing user interaction with Plot components.
    * @property {Component} component Gets the component controlled by this PlotController.
     */
    class PlotController implements MindFusion.Charting.Components.ComponentController {
        /**
         * Initializes a new instance of the PlotController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * Implements ComponentController.onMouseWheel. Called when the user scrolls with the middle mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * For internal use.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): MindFusion.Charting.Components.CursorHint;
        /**
         * Gets the component controlled by this PlotController.
         */
        get component(): MindFusion.Charting.Components.Component;
        protected renderContext: RenderContext;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Lets users move a legend within the boundaries of its parent Panel.
    */
    class LegendController extends PlotController {
        /**
         * Initializes a new instance of the LegendController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A component that renders chart legend.
    * @property {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} content Gets or sets a list of SeriesRenderer objects whose Series should be displayed in this legend.
    * @property {String} title Gets or sets the legend's title.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush that should be used to draw the legend's Title.
    * @property {String} titleFontName Gets or sets the name of font that should be used to draw the legend's Title.
    * @property {Number} titleFontSize Gets or sets the size of font that should be used to draw the legend's Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font that should be used to draw the legend's Title.
    * @property {Boolean} showTitle Gets or sets a value indicating whether to display the legend title.
    * @property {Number} padding Gets or sets the padding space between content and borders of this legend.
    * @property {Number} spacing Gets or sets the distance between adjacent entries in the legend.
    * @property {Boolean} allowMove Gets or sets a value indicating whether users are allowed to move this legend.
    * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets the Brush that should be used to fill the background of this legend.
    * @property {MindFusion.Charting.Drawing.Brush} borderStroke Gets or sets the Brush that should be used to stroke the borders of this legend.
    * @property {Number} borderStrokeThickness Gets or sets the stroke thickness of legend borders.
    * @property {MindFusion.Charting.Drawing.DashStyle} borderStrokeDashStyle Gets or sets the stroke dash style of legend borders.
    * @property {LabelKinds} elementLabelKind Gets or sets the type of label to show for series elements. This property is used only when showSeriesElements is set to true.
    * @property {Boolean} showSeriesElements Gets or sets a value, indicatating whether this legend will display individual series element labels instead of the series titles.
    * @property {Number} maxItemsPerColumn Gets or sets the maximum number ot items per display column.
    */
    class LegendRenderer extends MindFusion.Charting.Components.Component {
        /**
         * Initializes a new instance of the LegendRenderer class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} Instance of the LegendController class.
         */
        createController(context: RenderContext): MindFusion.Charting.Components.ComponentController;
        /**
         * Component.Draw override. Draws legend elements in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Gets or sets a list of SeriesRenderer objects whose Series
         * should be displayed in this legend.
         */
        get content(): MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>;
        /**
         * Gets or sets a list of SeriesRenderer objects whose Series
         * should be displayed in this legend.
         */
        set content(value: MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>);
        /**
         * Gets or sets the legend's title.
         */
        get title(): string;
        /**
         * Gets or sets the legend's title.
         */
        set title(value: string);
        /**
         * Gets the Font that should be used to draw the legend's Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Drawing.Font} A System.Drawing.Font instance.
         */
        effectiveTitleFont(context: RenderContext): MindFusion.Charting.Drawing.Font;
        /**
         * Gets the Brush that should be used to draw the legend's Title.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {SysBrush} A System.Brush instance.
         */
        effectiveTitleBrush(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw the legend's Title.
         */
        get titleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to draw the legend's Title.
         */
        set titleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font that should be used to draw the legend's Title.
         */
        get titleFontName(): string;
        /**
         * Gets or sets the name of font that should be used to draw the legend's Title.
         */
        set titleFontName(value: string);
        /**
         * Gets or sets the size of font that should be used to draw the legend's Title.
         */
        get titleFontSize(): number;
        /**
         * Gets or sets the size of font that should be used to draw the legend's Title.
         */
        set titleFontSize(value: number);
        /**
         * Gets or sets the style of font that should be used to draw the legend's Title.
         */
        get titleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font that should be used to draw the legend's Title.
         */
        set titleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets a value indicating whether to display the legend title.
         */
        get showTitle(): boolean;
        /**
         * Sets a value indicating whether to display the legend title.
         */
        set showTitle(value: boolean);
        /**
         * Gets the padding space between content and borders of this legend.
         */
        get padding(): number;
        /**
         * Sets the padding space between content and borders of this legend.
         */
        set padding(value: number);
        /**
         * Gets the distance between adjacent entries in the legend.
         */
        get spacing(): number;
        /**
         * Sets the distance between adjacent entries in the legend.
         */
        set spacing(value: number);
        /**
         * Gets or sets a value indicating whether users are allowed to move this legend.
         */
        get allowMove(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to move this legend.
         */
        set allowMove(value: boolean);
        /**
         * Gets the Brush that should be used to fill the legend background.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the Pen that should be used to draw the legend borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveBorderPen(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets the Brush that should be used to stroke the legend borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveBorderStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveBorderStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the Brush that should be used to fill the background of this legend.
         */
        get background(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to fill the background of this legend.
         */
        set background(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this legend.
         */
        get borderStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this legend.
         */
        set borderStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the stroke thickness of legend borders.
         */
        get borderStrokeThickness(): number;
        /**
         * Gets or sets the stroke thickness of legend borders.
         */
        set borderStrokeThickness(value: number);
        /**
         * Gets or sets the stroke dash style of legend borders.
         */
        get borderStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the stroke dash style of legend borders.
         */
        set borderStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
        * Gets or sets a value, indicatating whether this legend will display individual
        * series element labels instead of the series titles.
        */
        get showSeriesElements(): boolean;
        /**
    * Gets or sets a value, indicatating whether this legend will display individual
    * series element labels instead of the series titles.
    */
        set showSeriesElements(value: boolean);
        /**
        * Gets or sets the type of label to show for series elements.
        * This property is used only when showSeriesElements is set to true.
        */
        get elementLabelKind(): LabelKinds;
        /**
        * Gets or sets the type of label to show for series elements.
        * This property is used only when showSeriesElements is set to true.
        */
        set elementLabelKind(value: LabelKinds);
        /**
        * Gets or sets the maximum number ot items per display column.
        */
        get maxItemsPerColumn(): number;
        /**
    * Gets or sets the maximum number ot items per display column.
    */
        set maxItemsPerColumn(value: number);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies how to connect adjacent data points in line and area charts.
    * @enum
    * @name LineType
    * @param [Polyline] Connect points using straight line segments.
    * @param [Step] Connect points using steps.
    * @param [Curve] Connect points using a cardinal spline.
    */
    enum LineType {
        /**
        * Connect points using straight line segments.
        */
        Polyline = 0,
        /**
        * Connect points using steps.
        */
        Step = 1,
        /**
        * Connect points using a cardinal spline.
        */
        Curve = 2
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Describes rectangular margins.
    * @property {Number} left Gets or sets the width of the left side of the frame.
    * @property {Number} top Gets or sets the width of the top side of the frame.
    * @property {Number} right Gets or sets the width of the right side of the frame.
    * @property {Number} bottom Gets or sets the width of the bottom side of the frame.
    * @property {Number} width Returns the sum of Left and Right margins.
    * @property {Number} height Returns the sum of Top and Bottom margins.
    */
    class Margins {
        /**
         * Initializes a new instance of the Margins structure.
         */
        constructor(left: number, top?: number, right?: number, bottom?: number);
        /**
         * Gets or sets the width of the left side of the frame.
         */
        get left(): number;
        /**
         * Gets or sets the width of the left side of the frame.
         */
        set left(value: number);
        /**
         * Gets or sets the width of the top side of the frame.
         */
        get top(): number;
        /**
         * Gets or sets the width of the top side of the frame.
         */
        set top(value: number);
        /**
         * Gets or sets the width of the right side of the frame.
         */
        get right(): number;
        /**
         * Gets or sets the width of the right side of the frame.
         */
        set right(value: number);
        /**
         * Gets or sets the width of the bottom side of the frame.
         */
        get bottom(): number;
        /**
         * Gets or sets the width of the bottom side of the frame.
         */
        set bottom(value: number);
        /**
         * Returns the sum of Left and Right margins.
         */
        get width(): number;
        /**
         * Returns the sum of Top and Bottom margins.
         */
        get height(): number;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Implements SeriesStyle using mixed per-element and uniform values for attributes.
    * @property {MindFusion.Charting.Drawing.Brush} uniformFill Gets or sets a Brush used to fill all elements of all series uniformly.
    * @property {MindFusion.Charting.Drawing.Brush} uniformStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
    * @property {Number} uniformStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
    * @property {MindFusion.Charting.Drawing.DashStyle} uniformStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
    * @property {MindFusion.Charting.Collections.List<Brush>} commonFills Gets or sets a list of brushes, each Brush used to fill all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Brush>} commonStrokes Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
    * @property {Number} commonStrokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
    * @property {MindFusion.Charting.Drawing.DashStyle} commonStrokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} fills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} strokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<number>>} strokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} strokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
    */
    class MixedSeriesStyle implements SeriesStyle {
        /**
             * Initializes a new instance of the MixedSeriesStyle class.
             * @param {MindFusion.Charting.Drawing.Brush} [fill] A Brush used to fill all series elements.
             * @param {MindFusion.Charting.Drawing.Brush} [stroke] A Brush used to stroke all series elements.
             * @param {Number} [strokeThickness] Uniform thickness of series elements' strokes.
             * @param {MindFusion.Charting.Drawing.DashStyle} [strokeDashStyle] Uniform dash style of series elements' strokes.
             */
        constructor(fill?: MindFusion.Charting.Drawing.Brush, stroke?: MindFusion.Charting.Drawing.Brush, strokeThickness?: number, strokeDashStyle?: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush instance from
         * Fills, CommonFills or UniformFill properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush instance from
         * Strokes, CommonStrokes or UniformStroke properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * StrokeThicknesses, CommonStrokeThicknesses or UniformStrokeThickness properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * StrokeDashStyles, CommonStrokeDashStyles or UniformStrokeDashStyle properties.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        get uniformFill(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        set uniformFill(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        get uniformStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        set uniformStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        get uniformStrokeThickness(): number;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        set uniformStrokeThickness(value: number);
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        get uniformStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        set uniformStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        get commonFills(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        set commonFills(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>);
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        get commonStrokes(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        set commonStrokes(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>);
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        get commonStrokeThicknesses(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        set commonStrokeThicknesses(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        get commonStrokeDashStyles(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        set commonStrokeDashStyles(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>);
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        get fills(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        set fills(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>);
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        get strokes(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        set strokes(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>);
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        get strokeThicknesses(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        set strokeThicknesses(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>);
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        get strokeDashStyles(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        set strokeDashStyles(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Contains two values.
    * @property {T1} first Gets or sets the first value.
    * @property {T1} second Gets or sets the second value.
    */
    class Pair<T1, T2> {
        /**
         * Initializes a new instance of the Pair class.
         * @param first The first value.
         * @param second The second value.
         */
        constructor(first?: T1, second?: T2);
        /**
         * Object.ToString override.
         * @return A string representation of the pair.
         */
        toString(): string;
        /**
         * Gets or sets the first value.
         */
        get first(): T1;
        /**
         * Gets or sets the first value.
         */
        set first(value: T1);
        /**
         * Gets or sets the second value.
         */
        get second(): T2;
        /**
         * Gets or sets the second value.
         */
        set second(value: T2);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * Represents a controller that pans its plot's data range.
     */
    class PanControllerAnimation implements MindFusion.Charting.Components.ComponentAnimation {
        constructor(controller: PanController, dir: Vector);
        start(): void;
        stop(): void;
        set setFriction(a: number);
        get getFriction(): number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A base class for controllers that let users interact with Plot2D objects.
    * @property {Boolean} vertical Gets or sets a value indicating whether interaction is done along the X or Y axis.
    * @property {Dictionary<Axis, AxisInfo>} axisRanges Contains information about Axis ranges processed by this controller.
    */
    class Plot2DController extends PlotController {
        /**
         * Initializes a new instance of the Plot2DController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        recalculate(): void;
        /**
         * PlotController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Converts a plot pixel position to a logical value from specified axis' coordinate system.
         * @param {MindFusion.Charting.Axis} axis The target Axis.
         * @param {Number} value The value to convert.
         * @returns {Number} The converted value.
         */
        plotToAxisValue(axis: Axis, value: number): number;
        plotToZoomAxisValue(axis: Axis, value: number): number;
        /**
         * Gets or sets a value indicating whether interaction is done along the X or Y axis.
         */
        get vertical(): boolean;
        /**
         * Gets or sets a value indicating whether interaction is done along the X or Y axis.
         */
        set vertical(value: boolean);
        /**
        * Contains information about Axis ranges processed by this controller.
        */
        axisRanges: MindFusion.Charting.Collections.Dictionary<Axis, AxisInfo>;
    }
    /**
    * @class Stores information about Axis ranges processed by this controller.
    * @property {Number} resolution The axis resolution.
    * @property {Number} origin The axis origin.
    * @property {Number} range The axis range.
    */
    class AxisInfo {
        /**
        * The axis resolution.
        * @type {Number}
        */
        resolution: number;
        /**
        * The axis origin.
        * @type {Number}
        */
        origin: number;
        /**
        * The axis range.
        * @type {Number}
        */
        range: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a controller that pans its plot's data range.
    * @property {Boolean} enableAnimation Gets or sets whether to enable pan inertia.
    */
    class PanController extends Plot2DController {
        /**
         * Initializes a new instance of the PanController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        /**
         * Plot2DController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        update(dvalue: Vector): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * Gets or sets whether to enable pan inertia.
         */
        get enableAnimation(): boolean;
        /**
         * Gets or sets whether to enable pan inertia.
         */
        set enableAnimation(value: boolean);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Implements SeriesStyle using different attributes for each data item.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} fills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<Brush>>} strokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<number>>} strokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
    * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} strokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
    */
    class PerElementSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of PerElementSeriesStyle.
         * @param {MindFusion.Charting.Collections.List<List<Brush>>} [fills]
         * A list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<Brush>>} [strokes]
         * A list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<Number>>} [strokeThicknesses]
         * A list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         *
         * @param {MindFusion.Charting.Collections.List<List<DashStyle>>} [strokeDashStyles]
         * A list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         *
         */
        constructor(fills?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>, strokes?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>, strokeThicknesses?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>, strokeDashStyles?: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush from the Fills list
         * that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush from the Strokes list
         * that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * the StrokeThicknesses list that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * the StrokeDashStyles list that matches specified series and data indices.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        get fills(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        set fills(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>);
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        get strokes(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        set strokes(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>);
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        get strokeThicknesses(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        set strokeThicknesses(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>);
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        get strokeDashStyles(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        set strokeDashStyles(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Implements SeriesStyle using a different set of attributes for each series,
    * where all elements in a single series have common appearance.
    * @property {MindFusion.Charting.Collections.List<Brush>} fills Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Brush>} strokes Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
    * @property {MindFusion.Charting.Collections.List<Number>} strokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
    * @property {MindFusion.Charting.Collections.List<DashStyle>} strokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
    */
    class PerSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of the PerSeriesStyle class.
         * @param {MindFusion.Charting.Collections.List<Brush>} [fills] A list of Brushes, each Brush used to fill all elements of a series.
         * @param {MindFusion.Charting.Collections.List<Brush>} [strokes] A list of Brushes, each Brush used to stroke all elements of a series.
         * @param {MindFusion.Charting.Collections.List<Number>} [strokeThicknesses] A list of stroke thicknesses, each thickness applied to all elements of a series.
         * @param {MindFusion.Charting.Collections.List<DashStyle>} [strokeDashStyles] A list of dash styles, each style applied to all elements of a series.
         */
        constructor(fills?: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>, strokes?: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>, strokeThicknesses?: MindFusion.Charting.Collections.List<number>, strokeDashStyles?: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>);
        /**
         * Implements SeriesStyle.Fill. Returns a Brush from
         * the Fills list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns a Brush from
         * the Strokes list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns a value from
         * the StrokeThicknesses list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable number value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns a value from
         * the StrokeDashStyles list that matches specified series index.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
         */
        get fills(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of Brushes, each Brush used to fill all elements of a series.
         */
        set fills(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>);
        /**
         * Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
         */
        get strokes(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of Brushes, each Brush used to stroke all elements of a series.
         */
        set strokes(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>);
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        get strokeThicknesses(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        set strokeThicknesses(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        get strokeDashStyles(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        set strokeDashStyles(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws series as polygons in polar coordinate system,
    * where adjacent data points are at equal angular distances and radial
    * coordinates correspond to magnitude of data item values.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets a list of Series drawn by this RadarRenderer.
    * @property {Number} areaOpacity Gets or sets the opacity of radar polygons.
    */
    class RadarRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the RadarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a list of Series drawn by this RadarRenderer.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets a list of Series drawn by this RadarRenderer.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        protected m_series: MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Enumerates each series once providing a list of all visible points at each iteration.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessRange} process A ProcessRange callback.
         * @remarks The signature of the ProcessRange delegate is as follows:
         * 'function(seriesIndex, points)'.
         * param {Number} seriesIndexAn integer index of series in Series list.
         * param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the plot coordinates
         * corresponding to data items in currently visible range.
         * The method is not expected to return a value.
         */
        enumVisibleRanges(context: RenderContext, process: ProcessRange): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the visual representation of the series for a data item.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Returns the data value of specified series item.
         * @param {Number} seriesIndex An integer index of a Series within the list of series rendered by this Renderer2D.
         * @param {Number} dataIndex An integer index of the data item in specified series.
         * @returns {Number} A number value.
         */
        data(seriesIndex: number, dataIndex: number): number;
        /**
         * SeriesRenderer.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the  associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * Implement SeriesContainer.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
         * Gets the minimum value from all series located at specified index.
         * @param {Number} index An integer index of data element in the series.
         * @returns {Number} A number value representing the smallest data element.
         */
        getMinValue(index: number): number;
        /**
         * Gets the maximum value from all series located at specified index.
         * @param {Number} index An integer index of data element in the series.
         * @returns {Number} A number value representing the largest data element.
         */
        getMaxValue(index: number): number;
        /**
         * Gets or sets the opacity of radar polygons.
         */
        get areaOpacity(): number;
        /**
         * Gets or sets the opacity of radar polygons.
         */
        set areaOpacity(value: number);
        fromJson(json: string): any;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process all points from current data range at once.
    * @param {Number} seriesIndexAn integer index of series in Series list.
    * @param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the plot coordinates
    * corresponding to data items in currently visible range.
    */
    interface ProcessRange {
        (seriesIndex: number, points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws pie-radars, where data items are represented
    * by circular sectors of equal central angles, and the sector corresponding to a data item has radius proportional to its value.
    * @property {Boolean} alignToAxis Gets or sets a value indicating whether sectors should be aligned to axes in the radar grid or centered around them.
    */
    class PieRadarRenderer extends RadarRenderer {
        /**
         * Initializes a new instance of the PieRadarRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * RadarRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Enumerates the pie-radar sectors corresponding to each series.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSectors} process A ProcessSectors callback.
         */
        enumSectors(context: RenderContext, process: ProcessSector): void;
        /**
         * RadarRenderer.DrawHighlight override. Draws highlighted data item in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Gets or sets a value indicating whether sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        get alignToAxis(): boolean;
        /**
         * Gets or sets a value indicating whether sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        set alignToAxis(value: boolean);
        fromJson(json: string): void;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process sectors generated for a series.
    *@param {Number} seriesIndex An integer index of series in Series list.
    *@param {MindFusion.Charting.Collections.List<Point>} points A list of Point values containing the plot coordinates corresponding to data items.
    *@param {MindFusion.Charting.Collections.List<GraphicsPath>} paths A list of GraphicsPath objects representing pie-radar sectors.
    */
    interface ProcessSector {
        (seriesIndex: number, dataIndex: number, point: MindFusion.Drawing.Point, rect: MindFusion.Drawing.Rect, offset: number, startAngle: number, angle: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws pies in its containing plot.
    * @property {Series} series Gets or sets the Series drawn by this PieRenderer.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    * @property {Boolean} doughnut Gets or sets a value indicating whether the pie should be rendered as a doughnut.
    */
    class PieRenderer extends SeriesRenderer {
        /**
         * Initializes a new instance of the PieRenderer class.
         * @param {Series} series The Series that should be rendered as a pie.
         * @param {Number} [dimension] Specifies the Series dimension index that should be used to access data.
         */
        constructor(series: Series, dimension?: number);
        /**
         * Gets or sets the Series drawn by this PieRenderer.
         */
        get series(): Series;
        /**
         * Gets or sets the Series drawn by this PieRenderer.
         */
        set series(value: Series);
        /**
         * Enumerates the slices of the pie.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessSlice} process A ProcessBars callback.
         * @remarks The signature of the ProcessSlice delegate is as follows:
         * 'function(dataIndex, rect, diameter, startAngle, sweepAngle)'.
         * param {Number} dataIndex An integer index of data item in Series.
         * param {MindFusion.Drawing.Rect} rect The bounding rectangle of the slice' circle.
         * param {Number} diameter The diameter of the pie.
         * param {Number} startAngle The start angle of the slice' sector.
         * param {Number} sweepAngle The sweep angle of the slice' sector.
         * The method is not expected to return a value.
         */
        enumSlices(context: RenderContext, process: ProcessSlice): void;
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        get doughnut(): boolean;
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        set doughnut(value: boolean);
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        get dimension(): number;
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        set dimension(value: number);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * SeriesRenderer.DrawHighlight override. Draws highlighted slice in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * SeriesRenderer.HitTest override. Hit-tests the slices representing data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for a pie slice.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Implements the SeriesContainer interface.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        fromJson(json: string): any;
        toJson(): any;
    }
    /**
    * Defines the signature of delegates called to process pie slices.
    * @param {Number} dataIndex An integer index of data item in Series.
    * @param {MindFusion.Drawing.Rect} rect The bounding rectangle of the slice' circle.
    * @param {Number} diameter The diameter of the pie.
    * @param {Number} startAngle The start angle of the slice' sector.
    * @param {Number} sweepAngle The sweep angle of the slice' sector.
    */
    interface ProcessSlice {
        (dataIndex: number, rect: MindFusion.Drawing.Rect, diameter: number, startAngle: number, sweepAngle: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents one-dimensional series defined by e list of data values and lists of
    * inner and outer labels, convenient for providing data to PieRenderer.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns a combination of InnerLabel and OuterLabel.
    * @property {MindFusion.Charting.Collections.List<String>} outerLabels Gets or sets the outer labels.
    * @property {MindFusion.Charting.Collections.List<String>} innerLabels Gets or sets the inner labels.
    * @property {MindFusion.Charting.Collections.List<Number>} detachedSlices Gets or sets indices of detached slices.
    */
    class PieSeries extends SimpleSeries {
        /**
         * Initializes a new instance of the PieSeries class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} values A list of data values.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} innerLabels A list of inner labels.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} outerLabels A list of outer labels.
         */
        constructor(values: MindFusion.Charting.Collections.List<number> | Array<number>, innerLabels: MindFusion.Charting.Collections.List<string> | Array<string>, outerLabels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * SimpleSeries.GetLabel override. Returns an element of the inner or outer label lists.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Gets or sets the outer labels.
         */
        get outerLabels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the outer labels.
         */
        set outerLabels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Gets or sets the inner labels.
         */
        get innerLabels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the inner labels.
         */
        set innerLabels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Gets or sets indices of emphasized data items. PieRenderer draws
         * their corresponding slices as pulled out of the pie.
         */
        get detachedSlices(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets indices of emphasized data items. PieRenderer draws
         * their corresponding slices as pulled out of the pie.
         */
        set detachedSlices(value: MindFusion.Charting.Collections.List<number>);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class The base class for components used to draw chart graphics.
    * @property {SeriesStyle} seriesStyle Gets or sets a SeriesStyle whose attributes should be used to draw series inside this plot, unless their own renderers have a local SeriesStyle value set for respetive attribute.
    * @property {MindFusion.Charting.HitResult} highlightedItem Gets or sets the data item that should be drawn highlighted.
    * @property {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} seriesRenderers Gets or sets the SeriesRenderer objects that should draw inside this plot.
    * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets the Brush that should be used to fill the background of this plot.
    * @property {MindFusion.Charting.Drawing.Brush} borderStroke Gets or sets the Brush that should be used to stroke the borders of this plot.
    * @property {Number} borderStrokeThickness Gets or sets the stroke thickness of plot borders.
    * @property {MindFusion.Charting.Drawing.DashStyle} borderStrokeDashStyle Gets or sets the stroke dash style of plot borders.
    * @property {MindFusion.Charting.Drawing.Brush} highlightStroke Gets or sets the Brush used to stroke highlighted item.
    * @property {Number} highlightStrokeThickness Gets or sets the stroke thickness of highlighted item.
    * @property {MindFusion.Charting.Drawing.DashStyle} highlightStrokeDashStyle Gets or sets the stroke dash style of highlighted item.
    */
    class Plot extends MindFusion.Charting.Components.Component implements SeriesContainer {
        constructor();
        /**
         * Gets or sets a SeriesStyle whose attributes should be used to
         * draw series inside this plot, unless their own renderers
         * have a local SeriesStyle value set for respetive attribute.
         */
        get seriesStyle(): SeriesStyle;
        /**
         * Gets or sets a SeriesStyle whose attributes should be used to
         * draw series inside this plot, unless their own renderers
         * have a local SeriesStyle value set for respetive attribute.
         */
        set seriesStyle(value: SeriesStyle);
        /**
         * Gets or sets the data item that should be drawn highlighted.
         */
        get highlightedItem(): HitResult;
        /**
         * Gets or sets the data item that should be drawn highlighted.
         */
        set highlightedItem(value: HitResult);
        /**
         * Called in the beginning of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Measures data of all SeriesRenderer objects drawn inside this plot.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRanges(context: RenderContext): void;
        /**
         * Called at the end of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        adjustDataRanges(context: RenderContext): void;
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.Draw override. Draws a grid and all chart graphics
         * represented by contained SeriesRenderer objects.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Draws the plot's background and borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawPlot(context: RenderContext): void;
        /**
         * Draws the plot's grid.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;
        /**
         * Draws the plot's axis origin lines.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawOrigins(context: RenderContext): void;
        /**
         * Gets or sets the SeriesRenderer objects that should draw inside this plot.
         */
        get seriesRenderers(): MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>;
        /**
         * Gets or sets the SeriesRenderer objects that should draw inside this plot.
         */
        set seriesRenderers(value: MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>);
        /**
         * Unsubscribes from DataChanged and PropertyChanged events
         * of all SeriesRenderer objects in specified list.
         * @param {MindFusion.Charting.Collections.ObservableCollection<SeriesRenderer>} seriesRenderers A list of SeriesRenderer objects.
         */
        /**
         * Called when a Series raises its DataChanged event.
         * @param {Object} sender The event sender.
         * @param {EventArgs} e An EventArgs instance.
         */
        onRendererDataChanged(e: MindFusion.EventArgs): void;
        /**
         * Implements SeriesContainer.
         * @returns {IEnumerable<Series>} An instance of the IEnumerable&lt;Series&gt; class.
         */
        enumSeries(): MindFusion.Charting.Collections.IEnumerable<Series>;
        /**
        * Implements the SeriesContainer interface. Gets the index of the dimension
        * whose set of values should be treated as domain of plotted function.
        * @param {Series} series A Series in this container.
        * @returns The dimension index.
        */
        domainDimension(series: Series): number;
        /**
         * Gets the Brush that should be used to fill the plot's background.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveFill(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the Pen that should be used to draw the plot's borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Pen} A Pen instance.
         */
        effectiveBorder(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets the Brush that should be used to stroke the plot's borders.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        effectiveBorderStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the thickness of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {Number} A number value.
         */
        effectiveBorderStrokeThickness(context: RenderContext): number;
        /**
         * Gets the dash style of border strokes.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A member of the DashStyle enumeration.
         */
        effectiveStrokeDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the Brush that should be used to fill the background of this plot.
         */
        get background(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to fill the background of this plot.
         */
        set background(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this plot.
         */
        get borderStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush that should be used to stroke the borders of this plot.
         */
        set borderStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the stroke thickness of plot borders.
         */
        get borderStrokeThickness(): number;
        /**
         * Gets or sets the stroke thickness of plot borders.
         */
        set borderStrokeThickness(value: number);
        /**
         * Gets or sets the stroke dash style of plot borders.
         */
        get borderStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the stroke dash style of plot borders.
         */
        set borderStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets the Brush used to stroke highlighted item.
         */
        get highlightStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to stroke highlighted item.
         */
        set highlightStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the stroke thickness of highlighted item.
         */
        get highlightStrokeThickness(): number;
        /**
         * Gets or sets the stroke thickness of highlighted item.
         */
        set highlightStrokeThickness(value: number);
        /**
         * Gets or sets the stroke dash style of highlighted item.
         */
        get highlightStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the stroke dash style of highlighted item.
         */
        set highlightStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        effectiveHighlight(context: RenderContext): MindFusion.Charting.Drawing.Pen;
        effectiveHighlightStroke(context: RenderContext): MindFusion.Charting.Drawing.Brush;
        effectiveHighlightStrokeThickness(context: RenderContext): number;
        effectiveHighlightDashStyle(context: RenderContext): MindFusion.Charting.Drawing.DashStyle;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A plot whose series are rendered relatively to a two-dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Axis} xAxis Gets or sets default Axis instance used to map X data coordinates of series rendered inside this plot to the plot's pixels.
    * @property {MindFusion.Charting.Axis} yAxis Gets or sets default Axis instance used to map Y data coordinates of series rendered inside this plot to the plot's pixels.
    * @property {GridType} gridType Gets or sets the type of grid to draw in this plot.
    * @property {Boolean} pinGrid Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.
    * @property {Boolean} isZoomed Gets or sets a value indicating whether the user has zoomed into this plot.
    * @property {Boolean} allowPan Gets or sets a value indicating whether users are allowed to pan this plot.
    * @property {Boolean} verticalScroll Specifies whether the plot should scroll vertically when panned.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    */
    class Plot2D extends Plot {
        /**
         * Initializes a new instance of the Plot2D class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the PanController class.
         */
        createController(context: RenderContext): MindFusion.Charting.Components.ComponentController;
        getDelta(): number;
        /**
         * Raised when the user zooms into this plot's data range.
         * @event Plot2D.zoomChanged
         * @type {EventDispatcher}
         * @property {Plot2D} sender
         * @property {EventArgs} args
         */
        get zoomChanged(): MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        xAxes(renderContext: RenderContext): MindFusion.Charting.Collections.IEnumerable<Axis>;
        yAxes(renderContext: RenderContext): MindFusion.Charting.Collections.IEnumerable<Axis>;
        /**
         * Gets or sets default Axis instance used to map X data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        get xAxis(): Axis;
        /**
         * Gets or sets default Axis instance used to map X data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        set xAxis(value: Axis);
        /**
         * Gets or sets default Axis instance used to map Y data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        get yAxis(): Axis;
        /**
         * Gets or sets default Axis instance used to map Y data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        set yAxis(value: Axis);
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        get gridType(): GridType;
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        set gridType(value: GridType);
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        get pinGrid(): boolean;
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        set pinGrid(value: boolean);
        /**
         * Component.Visit override. Calls visitor's VisitPlot method.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: MindFusion.Charting.Components.ComponentVisitor): void;
        /**
         * Plot.DrawGrid override. Draws the grid specified by GridType property.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;
        /**
         *Plot.DrawOrigins override. Draws the plot's axis origin lines.
        * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
        */
        drawOrigins(context: RenderContext): void;
        /**
         * Zooms out from current data range.
         * @param {IEnumerable<Axis>} axes The axes whose ranges should be scaled.
         */
        zoomOut(axes: MindFusion.Charting.Collections.IEnumerable<Axis>): void;
        /**
         * Resets the zoom level to original axis ranges.
         */
        resetZoom(): void;
        /**
         * Gets or sets a value indicating whether the user has zoomed into this plot.
         */
        get isZoomed(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan this plot.
         */
        get allowPan(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan this plot.
         */
        set allowPan(value: boolean);
        /**
         * Specifies whether the plot should scroll vertically when panned.
         */
        get verticalScroll(): boolean;
        /**
         * Specifies whether the plot should scroll vertically when panned.
         */
        set verticalScroll(value: boolean);
        /**
         * Gets or sets the main color of the grid.
         */
        get gridColor1(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the main color of the grid.
         */
        set gridColor1(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the alternating color of the grid.
         */
        get gridColor2(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the alternating color of the grid.
         */
        set gridColor2(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the color of the grid lines.
         */
        get gridLineColor(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the color of the grid lines.
         */
        set gridLineColor(value: MindFusion.Charting.Drawing.Color);
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        get gridLineThickness(): number;
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        set gridLineThickness(value: number);
        /**
        * Gets or sets the style of plot grid lines.
        */
        get gridLineStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
        * Gets or sets the style of plot grid lines.
        */
        set gridLineStyle(value: MindFusion.Charting.Drawing.DashStyle);
        zoomHistory: ZoomHistory;
        fromJson(json: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A plot whose series are rendered relatively to a three-dimensional Cartesian coordinate system.
    * @property {MindFusion.Charting.Axis} zAxis Gets or sets default Axis instance used to map Z data coordinates of series rendered inside this plot to the plot's pixels.
    */
    class Plot3D extends Plot2D {
        constructor();
        /**
         * Plot.Draw override. Draws a projection of 3D models
         * generated by contained Renderer3D objects.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        getDelta(): number;
        /**
         * Gets or sets default Axis instance used to map Z data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        get zAxis(): Axis;
        /**
         * Gets or sets default Axis instance used to map Z data coordinates of series
         * rendered inside this plot to the plot's pixels.
         */
        set zAxis(value: Axis);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a point in 3D space.
    * @property {Number} x Gets or sets the X coordinate of this point.
    * @property {Number} y Gets or sets the Y coordinate of this point.
    * @property {Number} z Gets or sets the Z coordinate of this point.
    */
    class Point3D {
        /**
         * Initializes a new instance of the Point3D struct.
         * @param {Number} x X coordinate of the point.
         * @param {Number} y Y coordinate of the point.
         * @param {Number} z Z coordinate of the point.
         */
        constructor(x: number, y: number, z: number);
        /**
         * Gets the distance to specified point.
         * @param {Point3D} p A Point3D instance.
         * @returns {Number} A number value representing the distance.
         */
        distance(p: Point3D): number;
        /**
         * Sums two points' coordinates.
         * @param {Point3D} p1 The first point.
         * @param {Point3D} p2 The second point.
         * @returns {Point3D} A Point3D containing sum of coordinates.
         */
        static add(p1: Point3D, p2: Point3D): Point3D;
        /**
         * Scales the point's coordinates by specified scale factor.
         * @param {Number} scale A number value by which to multiply point's coordinates.
         * @returns {Point3D} A Point3D containing scaled coordinates.
         */
        scale(scale: number): Point3D;
        /**
         * Returns a string representation of this point.
         * @returns {String} A string representation of this point.
         */
        toString(): string;
        /**
         * Gets or sets the X coordinate of this point.
         */
        get x(): number;
        /**
         * Gets or sets the X coordinate of this point.
         */
        set x(value: number);
        /**
         * Gets or sets the Y coordinate of this point.
         */
        get y(): number;
        /**
         * Gets or sets the Y coordinate of this point.
         */
        set y(value: number);
        /**
         * Gets or sets the Z coordinate of this point.
         */
        get z(): number;
        /**
         * Gets or sets the Z coordinate of this point.
         */
        set z(value: number);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by a list of Point objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Points list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Point>} points Gets or sets the series' points.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class PointSeries implements Series {
        /**
         * Initializes a new instance of the PointSeries class.
         * @param {MindFusion.Charting.Collections.List<Point> | Array<Point>} points A list of points.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(points: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point> | Array<MindFusion.Drawing.Point>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. PointSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. PointSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Points list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        get dimensions(): number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Gets or sets the series' points.
         */
        get points(): MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>;
        /**
         * Gets or sets the series' points.
         */
        set points(value: MindFusion.Charting.Collections.List<MindFusion.Drawing.Point>);
        /**
         * Gets or sets the data labels.
         */
        get labels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the data labels.
         */
        set labels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Raised when the values in this series change.
         * @event PointSeries.dataChanged
         * @type {EventDispatcher}
         * @property {PointSeries} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            points: MindFusion.Drawing.Point[];
            labels: string[];
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by a list of Point3D objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Points list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 3.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Point3D>} points Gets or sets the series' points.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class PointSeries3D implements Series {
        /**
         * Initializes a new instance of the PointSeries3D class.
         * @param {MindFusion.Charting.Collections.List<Point3D> | Array<Point3D>} points A list of 3D points.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(points: MindFusion.Charting.Collections.List<Point3D> | Array<Point3D>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. PointSeries3D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. PointSeries3D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Points list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 3.
         */
        get dimensions(): number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Gets or sets the series' points.
         */
        get points(): MindFusion.Charting.Collections.List<Point3D>;
        /**
         * Gets or sets the series' points.
         */
        set points(value: MindFusion.Charting.Collections.List<Point3D>);
        /**
         * Gets or sets the data labels.
         */
        get labels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the data labels.
         */
        set labels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Raised when the values in this series change.
         * @event PointSeries3D.dataChanged
         * @type {EventDispatcher}
         * @property {PointSeries3D} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            points: Point3D[];
            labels: string[];
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A plot used to draw graphics in polar coordinate system.
    * @property {Number} padding Gets or set padding space between the plot's border and series graphics.
    * @property {Number} startAngle Gets or set the angle where first data item of series should be drawn.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this plot.
    */
    class PolarPlot extends Plot {
        /**
         * Initializes a new instance of the PolarPlot class.
         */
        constructor();
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the RotationController class.
         */
        createController(context: RenderContext): MindFusion.Charting.Components.ComponentController;
        /**
         * Component.Visit override. Calls visitor's VisitPlot method.
         * @param {ComponentVisitor} visitor An instance of a ComponentVisitor -derived class.
         */
        visit(visitor: MindFusion.Charting.Components.ComponentVisitor): void;
        /**
         * Rotates point around specified rotation center at specified angle.
         * @param {MindFusion.Drawing.Point} pointToRotate The point to rotate.
         * @param {MindFusion.Drawing.Point} centerPoint The rotation center.
         * @param {Number} angleInDegrees The rotation angle.
         * @returns {MindFusion.Drawing.Point}
         */
        rotatePoint(pointToRotate: MindFusion.Drawing.Point, centerPoint: MindFusion.Drawing.Point, angleInDegrees: number): MindFusion.Drawing.Point;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        get padding(): number;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        set padding(value: number);
        /**
         * Gets or set the angle where first data item of series should be drawn.
         */
        get startAngle(): number;
        /**
         * Gets or set the angle where first data item of series should be drawn.
         */
        set startAngle(value: number);
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this plot.
         */
        get allowRotate(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this plot.
         */
        set allowRotate(value: boolean);
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Provides properties for customizing axis rendering in radar charts.
     */
    class RadarAxisOptions extends AxisRenderer {
        /**
         * Initializes a new instance of the RadarAxisOptions class.
         */
        constructor(axis: Axis);
        /**
         * AxisRenderer.EffectiveAxis override.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * AxisRenderer.Measure override.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * AxisRenderer.Draw override.
         */
        draw(context: RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies the grid types supported by RadarPlot.
    * @enum
    * @name RadarGridType
    * @param [Spiderweb] Identifies spider-web grid consisting as concentric regular polygons.
    * @param [Radar] Identifies radar grid consisting as concentric circles.
    */
    enum RadarGridType {
        /**
        * Identifies spider-web grid consisting as concentric regular polygons.
        */
        Spiderweb = 0,
        /**
        * Identifies radar grid consisting as concentric circles.
        */
        Radar = 1
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A plot containing radar-chart graphics.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Axis>} axes Gets the list of Axis objects representing ranges of variables represented in the radar chart.
    * @property {MindFusion.Charting.Axis} defaultAxis ets a default Axis object used when data item index does not have corresponding element in the Axes collection.
    * @property {RadarAxisOptions} axisOptions Gets a RadarAxisOptions object providing properties for customizing axis rendering in radar charts.
    * @property {RadarGridType} gridType Gets or sets the type of grid to draw in this plot.
    * @property {Number} gridDivisions Gets the number of concentric shapes to draw in the grid.
    * @property {Boolean} uniformScale Gets or sets a value indicating whether all axes should display same data range.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether the grid should display axis coordinates.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    */
    class RadarPlot extends PolarPlot {
        /**
         * Initializes a new instance of the RadarPlot class.
         */
        constructor();
        /**
         * Gets the list of Axis objects representing ranges
         * of variables represented in the radar chart.
         */
        get axes(): MindFusion.Charting.Collections.ObservableCollection<Axis>;
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        get defaultAxis(): Axis;
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        set defaultAxis(value: Axis);
        /**
         * Gets a RadarAxisOptions object providing properties for customizing
         * axis rendering in radar charts.
         */
        get axisOptions(): RadarAxisOptions;
        /**
         * Gets a RadarAxisOptions object providing properties for customizing
         * axis rendering in radar charts.
         */
        set axisOptions(value: RadarAxisOptions);
        /**
         * Gets the Axis representing the range for specified data variable index.
         * @param {Number} index An integer index of data items in series.
         * @returns {MindFusion.Charting.Axis} The associated Axis.
         */
        getEffectiveAxis(index: number): Axis;
        getRadius(): {
            coef: number;
            radius: number;
        };
        /**
         * Plot.DrawGrid override. Draws spiderweb ot radial grid.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        drawGrid(context: RenderContext): void;
        /**
         * Plot.StartMeasureData override. Called in the beginning of data measurement pass.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        startMeasureData(context: RenderContext): void;
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        get gridType(): RadarGridType;
        /**
         * Gets or sets the type of grid to draw in this plot.
         */
        set gridType(value: RadarGridType);
        /**
         * Gets the number of concentric shapes to draw in the grid.
         */
        get gridDivisions(): number;
        /**
         * Gets the number of concentric shapes to draw in the grid.
         */
        set gridDivisions(value: number);
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        get uniformScale(): boolean;
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        set uniformScale(value: boolean);
        /**
         * Gets or sets a value indicating whether the grid should display axis coordinates.
         */
        get showCoordinates(): boolean;
        /**
         * Gets or sets a value indicating whether the grid should display axis coordinates.
         */
        set showCoordinates(value: boolean);
        /**
         * Gets or sets the main color of the grid.
         */
        get gridColor1(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the main color of the grid.
         */
        set gridColor1(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the alternating color of the grid.
         */
        get gridColor2(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the alternating color of the grid.
         */
        set gridColor2(value: MindFusion.Charting.Drawing.Color);
        axesCount: number;
        fromJson(json: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws scatter in its containing plot.
    * @property {ScatterType} shape Gets or sets the type of scatter shapes.
    * @property {Number} shapeSize Gets or sets the size of scatter shapes.
    */
    class ScatterRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the ScatterRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as scatter.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Enumerates the data values of rendered series mapped to plot 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumPoints(context: RenderContext, process: ProcessPoint): void;
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Renderer2D.HitTest override. Hit-tests the scatter representations of data items.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Point} location A Point specifying where to look for data items.
         * @returns {MindFusion.Charting.HitResult} A HitResult instance identifying the found data item.
         */
        hitTest(context: RenderContext, location: MindFusion.Drawing.Point): HitResult;
        /**
         * Renderer2D.DrawHighlight override. Draws highlighted shape in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Charting.HitResult} hitResult A HitResult instance identifying highlighted data item.
         */
        drawHighlight(context: RenderContext, hitResult: HitResult): void;
        /**
         * Gets or sets the size of scatter shapes.
         */
        get shapeSize(): number;
        /**
         * Gets or sets the size of scatter shapes.
         */
        set shapeSize(value: number);
        /**
         * Gets or sets the type of scatter shapes.
         */
        get shape(): ScatterType;
        /**
         * Gets or sets the type of scatter shapes.
         */
        set shape(value: ScatterType);
        drawIn3DPlot(): boolean;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws scatter in radar plots.
     */
    class RadarScatterRenderer extends ScatterRenderer {
        /**
         * Initializes a new instance of the RadarScatterRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered as scatter.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Renderer2D.MeasureDataRange override. Measures the data range of
         * rendered series and assigns it to the associated Axis objects if
         * their MinValue and MaxValue are not set.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measureDataRange(context: RenderContext): void;
        /**
         * ScatterRenderer.EnumPoints override. Enumerates the data values
         * of rendered series mapped to plot's 2D coordinates.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {ProcessPoint} process A ProcessPoint callback.
         * @remarks The signature of the ProcessPoint delegate is as follows:
         * 'function(seriesIndex, dataIndex, point)'.
         * param {Number} seriesIndex An integer index of series in Series list.
         * param {Number} dataIndex An integer index of data item in specified series.
         * param {Point} point A Point instance containing the Plot2D coordinates corresponding to current data item.
         * The method is not expected to return a value.
         */
        enumPoints(context: RenderContext, process: ProcessPoint): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies the type of radar-chart.
    * @enum
    * @name RadarType
    * @param [Polygon] Draw each series as a polygon.
    * @param [Pie] Draw data items as circular sectors.
    */
    enum RadarType {
        /**
         * Draw each series as a polygon.
         */
        Polygon = 0,
        /**
         * Draw data items as circular sectors.
         */
        Pie = 1
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Provides contextual information about the dashboard to its child components
    * when calling their draw, layout and user input methods.
    * @property {MindFusion.Charting.Drawing.Graphics} graphics Gets or sets the current drawing surface.
    * @property {Component} component Gets or sets the component currently being painted.
    * @property {MindFusion.Charting.Axis} xAxis Gets the chart's XAxis.
    * @property {MindFusion.Charting.Axis} yAxis Gets the chart's YAxis.
    * @property {Theme} theme Gets or sets the Theme used to resolve appearance attributes.
    */
    class RenderContext {
        /**
         * Initializes a new instance of the RenderContext clas.
         * @param {Rect} clipRect A Rect specifying the clip rectangle.
         * @param {Theme} theme A Theme instance where appearance attributes should be derived from.
         */
        constructor(clipRect: MindFusion.Drawing.Rect, theme: Theme);
        /**
         * Gets or sets the current drawing surface.
         */
        get graphics(): MindFusion.Charting.Drawing.Graphics;
        /**
         * Gets or sets the current drawing surface.
         */
        set graphics(value: MindFusion.Charting.Drawing.Graphics);
        /**
         * Gets or sets the component currently being painted.
         */
        get component(): MindFusion.Charting.Components.Component;
        /**
         * Gets or sets the component currently being painted.
         */
        set component(value: MindFusion.Charting.Components.Component);
        /**
         * Gets the X axis assigned to a Renderer2D or returns one from parent plot or chart.
         * @param {Renderer2D} [series] A Renderer2D instance.
         * @returns {Axis} An Axis instance.
         */
        getXAxis(series?: Renderer2D): Axis;
        /**
         * Gets the Y axis assigned to a Renderer2D or returns one from parent plot or chart.
         * @param {Renderer2D} [series] A Renderer2D instance.
         * @returns {Axis} An Axis instance.
         */
        getYAxis(series?: Renderer2D): Axis;
        /**
         * Gets the chart's XAxis.
         */
        get xAxis(): Axis;
        /**
         * Gets the chart's YAxis.
         */
        get yAxis(): Axis;
        /**
         * Gets or sets the Theme used to resolve appearance attributes.
         */
        get theme(): Theme;
        /**
         * Gets or sets the Theme used to resolve appearance attributes.
         */
        set theme(value: Theme);
        get clipRect(): MindFusion.Drawing.Rect;
        set clipRect(value: MindFusion.Drawing.Rect);
        /**
         * Gets the clip rectangle relative to specified Component.
         * @param {Component} relativeTo A Component instance.
         * @returns {Rect} A Rect instance.
         */
        getClipRect(relativeTo: MindFusion.Charting.Components.Component): MindFusion.Drawing.Rect;
        /**
         * Gets a TextStyle from current Theme.
         * @param {TextStyleHint} hint A member of the TextStyleHint enumeration.
         * @returns {TextStyle} A TextStyle instance.
         */
        textStyle(hint: TextStyleHint): TextStyle;
        toPoints3D(bounds: MindFusion.Drawing.Rect, zBottomLeft: number, zTopRight: number): Point3D[];
        highlightPen(): MindFusion.Charting.Drawing.Pen;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Provides contextual information about the dashboard to its child components
    * when calling their draw, layout and user input methods.
    * @property {MindFusion.Charting.Axis} xAxis Gets the chart's XAxis.
    * @property {MindFusion.Charting.Axis} yAxis Gets the chart's YAxis.
    * @property {BiaxialChart} chart Gets the chart.
    */
    class RenderContext2D extends RenderContext {
        /**
         * Initializes a new instance of the RenderContext clas.
         * @param clipRect A RectD specifying the clip rectangle.
         * @param theme A Theme instance where appearance attributes should be derived from.
         */
        constructor(chart: MindFusion.Charting.Controls.BiaxialChart, clipRect: MindFusion.Drawing.Rect);
        get xAxis(): Axis;
        get yAxis(): Axis;
        get chart(): MindFusion.Charting.Controls.BiaxialChart;
        set chart(value: MindFusion.Charting.Controls.BiaxialChart);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Defines the interface called by Plot3D to build 3D models.
     */
    interface Renderer3D {
        /**
         * Adds models for the series data to specified scene.
         * @param {Scene3D} scene A Scene3D instance.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        buildModels(scene: MindFusion.Charting.ThreeD.Scene3D, context: RenderContext): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * Represents a controller that rotates a polar plot by changing its StartAngle.
     */
    class RotationControllerAnimation implements MindFusion.Charting.Components.ComponentAnimation {
        constructor(controller: RotationController, dir: number, originPoint: MindFusion.Drawing.Point, endPoint: MindFusion.Drawing.Point);
        start(): void;
        stop(): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a controller that rotates a polar plot by changing its StartAngle.
    * @property {Boolean} enableAnimation Gets or sets whether to enable rotation inertia.
    */
    class RotationController extends PlotController {
        /**
         * Initializes a new instance of the RotationController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         */
        constructor(renderContext: RenderContext);
        /**
         * PlotController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        update(dangle: number): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * Gets or sets whether to enable rotation inertia.
         */
        get enableAnimation(): boolean;
        /**
         * Gets or sets whether to enable rotation inertia.
         */
        set enableAnimation(value: boolean);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies the shapes rendered by a ScatterRenderer.
    * @enum
    * @name ScatterType
    * @param [None] Do not draw scatter.
    * @param [Circle] Draw circles.
    * @param [Diamond] Draw diamonds.
    * @param [Square] Draw squares.
    * @param [Triangle] Draw triangles.
    */
    enum ScatterType {
        /**
        * Do not draw scatter.
        */
        None = 0,
        /**
        * Draw circles.
        */
        Circle = 1,
        /**
        * Draw diamonds.
        */
        Diamond = 2,
        /**
        * Draw squares.
        */
        Square = 3,
        /**
        * Draw triangles.
        */
        Triangle = 4
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by two lists of values containing
    * respectively X and Y coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements in XData list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 2.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Gets or sets the kind of labels reported as supported by this series.
    * @property {MindFusion.Charting.Collections.List<Number>} xData Gets or sets the X coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} yData Gets or sets the Y coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class Series2D implements Series {
        /**
         * Initializes a new instance of the Series2D class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} xValues A list of X coordinates.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} yValues A list of Y coordinates.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(xValues: MindFusion.Charting.Collections.List<number> | Array<number>, yValues: MindFusion.Charting.Collections.List<number> | Array<number>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Series2D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Series2D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in XData list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 2.
         */
        get dimensions(): number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the kind of labels
         * reported as supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the kind of labels
         * reported as supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Gets or sets the X coordinates of data items.
         */
        get xData(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the X coordinates of data items.
         */
        set xData(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets the Y coordinates of data items.
         */
        get yData(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the Y coordinates of data items.
         */
        set yData(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets the data labels.
         */
        get labels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the data labels.
         */
        set labels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Raised when the values in this series change.
         * @event Series2D.dataChanged
         * @type {EventDispatcher}
         * @property {Series2D} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            xValues: number[];
            yValues: number[];
            labels: string[];
            title: string;
        };
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by three lists of values containing
    * respectively X, Y and Z coordinates.
    * @property {Number} size Implements Series.Size. Returns the number of elements in XData list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 3.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<Number>} xData Gets or sets the X coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} yData Gets or sets the Y coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<Number>} zData Gets or sets the Z coordinates of data items.
    * @property {MindFusion.Charting.Collections.List<String>} labels Gets or sets the data labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class Series3D implements Series {
        /**
         * Initializes a new instance of the Series3D class.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} xValues A list of X coordinates.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} yValues A list of Y coordinates.
         * @param {MindFusion.Charting.Collections.List<Number> | Array<Number>} zValues A list of Z coordinates.
         * @param {MindFusion.Charting.Collections.List<String> | Array<String>} labels A list of labels.
         */
        constructor(xValues: MindFusion.Charting.Collections.List<number> | Array<number>, yValues: MindFusion.Charting.Collections.List<number> | Array<number>, zValues: MindFusion.Charting.Collections.List<number> | Array<number>, labels: MindFusion.Charting.Collections.List<string> | Array<string>);
        /**
         * Implements Series.GetValue. Returns a value for the specified data item in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns an element of the Labels list.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. Series3D always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. Series3D always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in XData list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 3.
         */
        get dimensions(): number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Gets or sets the X coordinates of data items.
         */
        get xData(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the X coordinates of data items.
         */
        set xData(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets the Y coordinates of data items.
         */
        get yData(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the Y coordinates of data items.
         */
        set yData(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets the X coordinates of data items.
         */
        get zData(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets the X coordinates of data items.
         */
        set zData(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets the data labels.
         */
        get labels(): MindFusion.Charting.Collections.List<string>;
        /**
         * Gets or sets the data labels.
         */
        set labels(value: MindFusion.Charting.Collections.List<string>);
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Raised when the values in this series change.
         * @event Series3D.dataChanged
         * @type {EventDispatcher}
         * @property {Series3D} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            xValues: number[];
            yValues: number[];
            zValues: number[];
            labels: string[];
        };
    }
}
declare namespace MindFusion.Charting {
    class ShapeBuilder {
        constructor(scene: MindFusion.Charting.ThreeD.Scene3D);
        build(shape: any, p: any, brush: any): MindFusion.Charting.ThreeD.Mesh3D;
        scene: MindFusion.Charting.ThreeD.Scene3D;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class A SeriesRenderer that draws series as filled steps between data points.
    * @property {Number} areaOpacity ets or sets the opacity of area polygons.
    */
    class StepAreaRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the StepAreaRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        /**
         * Gets or sets the opacity of area polygons.
         */
        get areaOpacity(): number;
        /**
         * Gets or sets the opacity of area polygons.
         */
        set areaOpacity(value: number);
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A SeriesRenderer that draws series as steps between data points.
     */
    class StepRenderer extends Renderer2D {
        /**
         * Initializes a new instance of the StepRenderer class.
         * @param {MindFusion.Charting.Collections.ObservableCollection<Series>} series A list of Series that should be rendered by this object.
         */
        constructor(series: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * SeriesRenderer.Draw override. Draws the series data in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        fromJson(json: string): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Represents a data series defined by a list of StockPrice objects.
    * @property {Number} size Implements Series.Size. Returns the number of elements in Values list.
    * @property {Number} dimensions Implements Series.Dimensions. Returns 5.
    * @property {MindFusion.Charting.LabelKinds} supportedLabels Implements Series.SupportedLabels. Returns InnerLabel.
    * @property {MindFusion.Charting.Collections.List<StockPrice>} values Gets or sets the series' points.
    * @property {DateTimeFormat} dateTimeFormat Gets or sets a value indicating how to format DateTime values as labels.
    * @property {String} customDateTimeFormat Gets or sets a custom format string for DateTime labels.
    * @property {String} labelPrefix Gets or sets a prefix added in front of formatted DateTime labels.
    * @property {String} labelSuffix Gets or sets a suffix appended to formatted DateTime labels.
    * @property {String} title Implements Series.Title. Gets or sets the title of this series.
    */
    class StockPriceSeries implements Series {
        /**
         * Initializes a new instance of the StockPriceSeries class.
         * @param {MindFusion.Charting.Collections.List<StockPrice> | Array<StockPrice>} values A list of StockPrice objects.
         */
        constructor(values: MindFusion.Charting.Collections.List<StockPrice> | Array<StockPrice>);
        /**
         * Implements Series.GetValue. Returns a coordinate of specified point in this series.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {Number} dimension An integer value specifying the dimension whose coordinate to return.
         * @returns {Number} A double-precision number representing the value of a data item in the series.
         */
        getValue(index: number, dimension: number): number;
        /**
         * Implements Series.GetLabel. Returns DateTime value at specified index as an XAxisLabel.
         * @param {Number} index An integer value specifying the index of a data item.
         * @param {MindFusion.Charting.LabelKinds} kind A member of the LabelKinds enumeration.
         * @returns {String} A string containing the item's label.
         */
        getLabel(index: number, kind: LabelKinds): string;
        /**
         * Implements Series.IsEmphasized. StockPriceSeries always returns false.
         * @param {Number} index An integer value specifying the index of a data item.
         * @returns {Boolean} true to emphasize the specified data item, or false otherwise.
         */
        isEmphasized(index: number): boolean;
        /**
         * Implements Series.IsSorted. StockPriceSeries always returns false.
         * @param {Number} dimension An integer value identifying the dimension.
         * @returns {Boolean} true if the values are sorted in specified dimension, or false otherwise.
         */
        isSorted(dimension: number): boolean;
        /**
         * Implements Series.Size. Returns the number of elements in Values list.
         */
        get size(): number;
        /**
         * Implements Series.Dimensions. Returns 5.
         */
        get dimensions(): number;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        get supportedLabels(): LabelKinds;
        /**
         * Implements Series.SupportedLabels. Gets or sets the labels supported by this series.
         */
        set supportedLabels(value: LabelKinds);
        /**
         * Gets or sets the series' points.
         */
        get values(): MindFusion.Charting.Collections.List<StockPrice>;
        /**
         * Gets or sets the series' points.
         */
        set values(value: MindFusion.Charting.Collections.List<StockPrice>);
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        get title(): string;
        /**
         * Implements Series.Title. Gets or sets the title of this series.
         */
        set title(value: string);
        /**
         * Gets or sets a value indicating how to format DateTime values as labels.
         */
        get dateTimeFormat(): DateTimeFormat;
        /**
         * Gets or sets a value indicating how to format DateTime values as labels.
         */
        set dateTimeFormat(value: DateTimeFormat);
        /**
         * Gets or sets a custom format string for DateTime labels.
         */
        get customDateTimeFormat(): string;
        /**
         * Gets or sets a custom format string for DateTime labels.
         */
        set customDateTimeFormat(value: string);
        /**
         * Gets or sets a prefix added in front of formatted DateTime labels.
         */
        get labelPrefix(): string;
        /**
         * Gets or sets a prefix added in front of formatted DateTime labels.
         */
        set labelPrefix(value: string);
        /**
         * Gets or sets a suffix appended to formatted DateTime labels.
         */
        get labelSuffix(): string;
        /**
         * Gets or sets a suffix appended to formatted DateTime labels.
         */
        set labelSuffix(value: string);
        /**
         * Raised when the values in this series change.
         * @event StockPriceSeries.dataChanged
         * @type {EventDispatcher}
         * @property {StockPriceSeries} sender
         * @property {EventArgs} args
         */
        get dataChanged(): Common.EventDispatcher<EventArgs>;
        /**
         * Raises the DataChanged event.
         */
        protected onDataChanged(): void;
        fromJson(obj: any): void;
        toJson(): {
            __type: any;
            title: string;
            labelPrefix: string;
            labelSuffix: string;
            dateTimeFormat: DateTimeFormat;
            customDateTimeFormat: string;
        };
    }
    /**
     * Represents a data object, containing open, close, low and high values for a certain date.
     */
    class StockPrice {
        /**
         * Initializes a new instance of the StockPrice class.
         * @param {Number} open The open value.
         * @param {Number} close The close value.
         * @param {Number} low The low value.
         * @param {Number} high The high value.
         * @param {Date} [date] The corresponding date.
         */
        constructor(open: number, close: number, low: number, high: number, date?: Date);
        /**
         * Gets or sets the open value.
         */
        get open(): number;
        /**
         * Gets or sets the open value.
         */
        set open(value: number);
        /**
         * Gets or sets the close value.
         */
        get close(): number;
        /**
         * Gets or sets the close value.
         */
        set close(value: number);
        /**
         * Gets or sets the low value.
         */
        get low(): number;
        /**
         * Gets or sets the low value.
         */
        set low(value: number);
        /**
         * Gets or sets the high value.
         */
        get high(): number;
        /**
         * Gets or sets the high value.
         */
        set high(value: number);
        /**
         * Gets or sets the date.
         */
        get date(): Date;
        /**
         * Gets or sets the date.
         */
        set date(value: Date);
        fromJson(obj: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * @class Draws text and labels inside chart components.
    * @property {MindFusion.Drawing.Font} labelFont Gets or sets the Font used to draw labels.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the brush used to draw labels.
    */
    class TextRenderer {
        /**
         * Initializes a new instance of the TextRenderer class.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @param {MindFusion.Drawing.Font} font A Font instance.
         * @param {MindFusion.Charting.Drawing.Brush} textBrush A Brush instance.
         */
        constructor(context: RenderContext, font: MindFusion.Charting.Drawing.Font, textBrush: MindFusion.Charting.Drawing.Brush, background?: MindFusion.Charting.Drawing.Brush, borderPen?: MindFusion.Charting.Drawing.Pen);
        /**
         * Gets or sets the font used to draw labels.
         */
        get labelFont(): MindFusion.Charting.Drawing.Font;
        /**
         * Gets or sets the font used to draw labels.
         */
        set labelFont(value: MindFusion.Charting.Drawing.Font);
        /**
         * Gets or sets the brush used to draw labels.
         */
        get textBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the brush used to draw labels.
         */
        set textBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the background brush used to draw labels.
         */
        get background(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the background brush used to draw labels.
         */
        set background(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the pen used to draw labels borders.
         */
        get borderPen(): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets or sets the pen used to draw labels borders.
         */
        set borderPen(value: MindFusion.Charting.Drawing.Pen);
        /**
         * Draws the specified label centered at specified location.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] A StringFormat instance.
         */
        drawLabelAtPoint(series: Series, index: number, point: MindFusion.Drawing.Point, labelKind: LabelKinds, format?: MindFusion.Charting.Drawing.StringFormat): void;
        drawLabelAtRadialPoint(label: string, center: MindFusion.Drawing.Point, radius: number, angle: number): void;
        /**
         * Draws the specified label on the right side of specified point.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawRightFromPoint(series: Series, index: number, point: MindFusion.Drawing.Point, labelKind: LabelKinds): void;
        /**
         * Draws the specified label on the left side of specified point.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Point} point A Point specifying the label's location.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawLeftFromPoint(series: Series, index: number, point: MindFusion.Drawing.Point, labelKind: LabelKinds): void;
        /**
         * Draws a 90-degree rotated text in specified layout rectangle.
         * @param {String} text A string containing the text to draw.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.Drawing.Brush} textBrush A Brush instance.
         * @param {MindFusion.Charting.Drawing.StringAlignment} alignment A member of the StringAlignment enumeration.
         * @param {MindFusion.Charting.Drawing.StringAlignment} lineAlignment A member of the StringAlignment enumeration.
         */
        drawRotatedLabelInRect(text: string, bounds: MindFusion.Drawing.Rect, textBrush: MindFusion.Charting.Drawing.Brush, alignment: MindFusion.Charting.Drawing.StringAlignment, lineAlignment: MindFusion.Charting.Drawing.StringAlignment): void;
        /**
         * Draws the specified label rotated at 90 degrees in specified layout rectangle.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         */
        drawRotatedLabelInRect(series: Series, index: number, bounds: MindFusion.Drawing.Rect, labelKind: LabelKinds): void;
        drawRotatedLabelInRect(series: Series, index: number, bounds: MindFusion.Drawing.Rect, labelKind: LabelKinds, alignment: MindFusion.Charting.Drawing.StringAlignment, lineAlignment: MindFusion.Charting.Drawing.StringAlignment): void;
        /**
         * Draws the specified label in specified layout rectangle.
         * @param {Series} series A Series whose label to draw.
         * @param {Number} index An integer index of the label.
         * @param {MindFusion.Drawing.Rect} bounds A RectangleF specifying the layout rectangle.
         * @param {MindFusion.Charting.LabelKinds} labelKind A member of the LabelKinds enumeration.
         * @param {MindFusion.Charting.Drawing.StringFormat} [format] A StringFormat instance.
         */
        drawLabelInRect(series: Series, index: number, bounds: MindFusion.Drawing.Rect, labelKind: LabelKinds, format?: MindFusion.Charting.Drawing.StringFormat): void;
        drawLabelInRect(series: Series, index: number, bounds: MindFusion.Drawing.Rect, labelKind: LabelKinds, alignment: MindFusion.Charting.Drawing.StringAlignment, lineAlignment: MindFusion.Charting.Drawing.StringAlignment): void;
        measureLabel(label: string, angle: number): MindFusion.Drawing.Size;
        drawRotatedLabel(text: string, center: MindFusion.Drawing.Point, angle: number): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Defines text appearance attributes.
    * @property {String} fontName Gets or sets font name.
    * @property {Number} fontSize Gets or sets font size.
    * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets font style.
    * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets a Brush used to draw text.
    */
    class TextStyle {
        /**
         * Initializes a new instance of the TextStyle class.
         */
        constructor();
        /**
         * Gets or sets font name.
         */
        get fontName(): string;
        /**
         * Gets or sets font name.
         */
        set fontName(value: string);
        /**
         * Gets or sets font size.
         */
        get fontSize(): number;
        /**
         * Gets or sets font size.
         */
        set fontSize(value: number);
        /**
         * Gets or sets font style.
         */
        get fontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets font style.
         */
        set fontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets a Brush used to draw text.
         */
        get textBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw text.
         */
        set textBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to draw text background.
         */
        get background(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw text background.
         */
        set background(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to draw text border.
         */
        get borderStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw text border.
         */
        set borderStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the width of text border.
         */
        get borderStrokeThickness(): number;
        /**
         * Gets or sets the width of text border.
         */
        set borderStrokeThickness(value: number);
        /**
         * Gets or sets the border dash style of text.
         */
        get borderStrokeDashStyle(): number;
        /**
         * Gets or sets the border dash style of text.
         */
        set borderStrokeDashStyle(value: number);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
    * Identifies text styles that can be accessed through RenderContent.
    * @enum
    * @name TextStyleHint
    * @param [Title] Identifies style used to draw chart's title.
    * @param [Subtitle] Identifies style used to draw chart's sub-title.
    * @param [AxisLabels] Identifies style used to draw axis labels.
    * @param [AxisTitle] Identifies style used to draw axis title.
    * @param [DataLabels] Identifies style used to draw data labels.
    * @param [Widget] Identifies style used to draw text in UI widgets.
    * @param [LegendTitle] Identifies style used to draw legend title.
    */
    enum TextStyleHint {
        /**
         * Identifies style used to draw chart's title.
         */
        Title = 0,
        /**
         * Identifies style used to draw chart's sub-title.
         */
        Subtitle = 1,
        /**
         * Identifies style used to draw axis labels.
         */
        AxisLabels = 2,
        /**
         * Identifies style used to draw axis title.
         */
        AxisTitle = 3,
        /**
         * Identifies style used to draw data labels.
         */
        DataLabels = 4,
        /**
         * Identifies style used to draw text in UI widgets.
         */
        Widget = 5,
        /**
         * Identifies style used to draw legend title.
         */
        LegendTitle = 6
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents a dashboard's theme defining all appearance attributes of its elements.
     * @property {String} titleFontName Gets or sets the name of font used to draw the chart title.
     * @property {Number} titleFontSize Gets or sets the size of font used to draw the chart title.
     * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of font used to draw the chart title.
     * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush used to draw the chart title.
     * @property {String} subtitleFontName Gets or sets the name of font used to draw the chart sub-title.
     * @property {Number} subtitleFontSize Gets or sets the size of font used to draw the chart sub-title.
     * @property {MindFusion.Charting.Drawing.FontStyle} subtitleFontStyle Gets or sets the style of font used to draw the chart sub-title.
     * @property {MindFusion.Charting.Drawing.Brush} subtitleBrush Gets or sets the Brush used to draw the chart sub-title.
     * @property {String} axisLabelsFontName Gets or sets the name of font used to draw axis labels.
     * @property {Number} axisLabelsFontSize Gets or sets the size of font used to draw axis labels.
     * @property {MindFusion.Charting.Drawing.FontStyle} axisLabelsFontStyle Gets or sets the style of font used to draw axis labels.
     * @property {MindFusion.Charting.Drawing.Brush} axisLabelsBrush Gets or sets the Brush used to draw axis labels.
     * @property {String} axisTitleFontName Gets or sets the name of font used to draw axis titles.
     * @property {Number} axisTitleFontSize Gets or sets the size of font used to draw axis titles.
     * @property {MindFusion.Charting.Drawing.FontStyle} axisTitleFontStyle Gets or sets the style of font used to draw axis titles.
     * @property {MindFusion.Charting.Drawing.Brush} axisTitleBrush Gets or sets the Brush used to draw axis titles.
     * @property {String} dataLabelsFontName Gets or sets the name of font used to draw data labels.
     * @property {Number} dataLabelsFontSize Gets or sets the size of font used to draw data labels.
     * @property {MindFusion.Charting.Drawing.FontStyle} dataLabelsFontStyle Gets or sets the style of font used to draw data labels.
     * @property {MindFusion.Charting.Drawing.Brush} dataLabelsBrush Gets or sets the Brush used to draw data labels.
     * @property {String} widgetFontName Gets or sets the name of font used to draw text in UI widgets.
     * @property {Number} widgetFontSize Gets or sets the size of font used to draw text in UI widgets.
     * @property {MindFusion.Charting.Drawing.FontStyle} widgetFontStyle Gets or sets the style of font used to draw text in UI widgets.
     * @property {MindFusion.Charting.Drawing.Brush} widgetBrush Gets or sets the Brush used to draw text in UI widgets.
     * @property {String} legendTitleFontName Gets or sets the name of font used to draw legend titles.
     * @property {Number} legendTitleFontSize Gets or sets the size of font used to draw legend titles.
     * @property {MindFusion.Charting.Drawing.FontStyle} legendTitleFontStyle Gets or sets the style of font used to draw legend titles.
     * @property {MindFusion.Charting.Drawing.Brush} legendLabelsBrush Gets or sets the Brush used to draw legend labels.
     * @property {MindFusion.Charting.Drawing.Brush} uniformSeriesFill Gets or sets a Brush used to fill all elements of all series uniformly.
     * @property {MindFusion.Charting.Drawing.Brush} uniformSeriesStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
     * @property {Number} uniformSeriesStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
     * @property {MindFusion.Charting.Drawing.DashStyle} uniformSeriesStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
     * @property {MindFusion.Charting.Collections.List<Brush>} commonSeriesFills Gets or sets a list of brushes, each Brush used to fill all elements of a series.
     * @property {MindFusion.Charting.Collections.List<Brush>} commonSeriesStrokes Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
     * @property {MindFusion.Charting.Collections.List<Number>} commonSeriesStrokeThicknesses Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
     * @property {MindFusion.Charting.Collections.List<DashStyle>} commonSeriesStrokeDashStyles Gets or sets a list of dash styles, each style applied to all elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<Brush>>} seriesFills Gets or sets a list of Brush lists, each list used to draw a different series, and each Brush used to fill individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<Brush>>} seriesStrokes Gets or sets a list of Brush lists, each list used to stroke a different series, and each Brush used to stroke individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<number>>} seriesStrokeThicknesses Gets or sets a list of number lists, each list used to stroke a different series, and each number value specifying thickness of individual elements of a series.
     * @property {MindFusion.Charting.Collections.List<List<DashStyle>>} seriesStrokeDashStyles Gets or sets a list of DashStyle lists, each list used to stroke a different series, and each DashStyle value specifying style of individual elements of a series.
     * @property {MindFusion.Charting.Drawing.Brush} plotBackground Gets or sets a Brush used to draw the background of plots.
     * @property {MindFusion.Charting.Drawing.Brush} plotBorderStroke Gets or sets a Brush used to stroke plot borders.
     * @property {Number} plotBorderStrokeThickness Gets or sets the thickness of plot borders.
     * @property {MindFusion.Charting.Drawing.DashStyle} plotBorderStrokeDashStyle Gets or sets the thickness of plot borders.
     * @property {MindFusion.Charting.Drawing.Brush} legendBackground Gets or sets a Brush used to draw legend background.
     * @property {MindFusion.Charting.Drawing.Brush} highlightStroke Gets or sets a Brush used to stroke highlighted items.
     * @property {Number} highlightStrokeThickness Gets or sets the thickness of highlight strokes.
     * @property {MindFusion.Charting.Drawing.DashStyle} highlightStrokeDashStyle Gets or sets the dash style of highlight strokes.
     * @property {MindFusion.Charting.Drawing.Brush} axisStroke Gets or sets a Brush used to stroke axis lines.
     * @property {Number} axisStrokeThickness Gets or sets the thickness of axis lines.
     * @property {MindFusion.Charting.Drawing.DashStyle} axisStrokeDashStyle Gets or sets the dash style of axis lines.
     * @property {MindFusion.Charting.Drawing.Brush} legendBorderStroke Gets or sets a Brush used to draw legend borders.
     * @property {Number} legendBorderStrokeThickness Gets or sets the thickness of legend borders.
     * @property {MindFusion.Charting.Drawing.DashStyle} legendBorderStrokeDashStyle Gets or sets the dash style of legend borders.
     * @property {MindFusion.Charting.Drawing.Color} gridLineColor Gets or sets the line color of plot grid.
     * @property {Number} gridLineThickness Gets or sets the thickness of plot grid lines.
     * @property {MindFusion.Charting.Drawing.DashStyle} gridLineStyle Gets or sets the style of plot grid lines.
     * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of plot grid.
     * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of plot grid.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeBackground Gets or sets a Brush used to draw gauge backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeStroke Gets or sets a Brush used to stroke gauge borders.
     * @property {Number} gaugeStrokeThickness Gets or sets the thickness of gauge borders.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeScaleBackground Gets or sets a Brush used to draw gauge scale backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeScaleStroke Gets or sets a Brush used to stroke gauge scale borders.
     * @property {Number} gaugeScaleStrokeThickness Gets or sets the thickness of gauge scale borders.
     * @property {MindFusion.Charting.Drawing.Brush} gaugePointerBackground Gets or sets a Brush used to draw gauge pointer backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugePointerStroke Gets or sets a Brush used to stroke gauge pointer borders.
     * @property {Number} gaugePointerStrokeThickness Gets or sets the thickness of gauge pointer borders.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeTickBackground Gets or sets a Brush used to draw gauge tick backgrounds.
     * @property {MindFusion.Charting.Drawing.Brush} gaugeTickStroke Gets or sets a Brush used to stroke gauge tick borders.
     * @property {Number} gaugeTickStrokeThickness Gets or sets the thickness of gauge tick borders.
     * @property {String} gaugeFontName Gets or sets the name of font used to draw text in gauges.
     * @property {MindFusion.Charting.Drawing.FontStyle} gaugeFontStyle Gets or sets the style of font used to draw text in gauges.
     * @property {Number} gaugeFontSize Gets or sets the size of font used to draw text in gauges.
     */
    class Theme implements MindFusion.Charting.Common.INotifyPropertyChanged {
        /**
         * Initializes a new instance of the Theme class.
         * @param {MindFusion.Charting.Drawing.Brush} fill A Brush used to fill all series elements.
         * @param {MindFusion.Charting.Drawing.Brush} stroke A Brush used to stroke all series elements.
         * @param {Number} strokeThickness Uniform thickness of series elements' strokes.
         * @param {MindFusion.Charting.Drawing.DashStyle} strokeDashStyle Uniform dash style of series elements' strokes.
         */
        constructor(fill?: MindFusion.Charting.Drawing.Brush, stroke?: MindFusion.Charting.Drawing.Brush, strokeThickness?: number, strokeDashStyle?: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Loads the theme values from an XML file.
         * @param {String} fileUrl The URL of an XML file where the data should be read from.
         */
        loadFrom(fileUrl: string): void;
        /**
        * Saves the theme values to specified file.
        * @param {String} fileUrl The URL where the theme's XML should be posted to.
        */
        saveTo(url: string): void;
        /**
         * Occurs when a property value changes.
         * @event Theme.propertyChanged
         * @type {PropertyChangedEventDispatcher}
         * @property {Theme} sender
         * @property {PropertyChangedEventArgs} args
         */
        get propertyChanged(): MindFusion.Charting.Common.PropertyChangedEventDispatcher;
        get seriesStyle(): MixedSeriesStyle;
        set seriesStyle(value: MixedSeriesStyle);
        get titleStyle(): TextStyle;
        set titleStyle(value: TextStyle);
        get subtitleStyle(): TextStyle;
        set subtitleStyle(value: TextStyle);
        get axisLabelsStyle(): TextStyle;
        set axisLabelsStyle(value: TextStyle);
        get axisTitleStyle(): TextStyle;
        set axisTitleStyle(value: TextStyle);
        get dataLabelsStyle(): TextStyle;
        set dataLabelsStyle(value: TextStyle);
        get widgetStyle(): TextStyle;
        set widgetStyle(value: TextStyle);
        get legendTitleStyle(): TextStyle;
        set legendTitleStyle(value: TextStyle);
        /**
         * Gets or sets the name of font used to draw the chart title.
         */
        get titleFontName(): string;
        /**
         * Gets or sets the name of font used to draw the chart title.
         */
        set titleFontName(value: string);
        /**
         * Gets or sets the size of font used to draw the chart title.
         */
        get titleFontSize(): number;
        /**
         * Gets or sets the size of font used to draw the chart title.
         */
        set titleFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw the chart title.
         */
        get titleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw the chart title.
         */
        set titleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw the chart title.
         */
        get titleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw the chart title.
         */
        set titleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font used to draw the chart sub-title.
         */
        get subtitleFontName(): string;
        /**
         * Gets or sets the name of font used to draw the chart sub-title.
         */
        set subtitleFontName(value: string);
        /**
         * Gets or sets the size of font used to draw the chart sub-title.
         */
        get subtitleFontSize(): number;
        /**
         * Gets or sets the size of font used to draw the chart sub-title.
         */
        set subtitleFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw the chart sub-title.
         */
        get subtitleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw the chart sub-title.
         */
        set subtitleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw the chart sub-title.
         */
        get subtitleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw the chart sub-title.
         */
        set subtitleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font used to draw axis labels.
         */
        get axisLabelsFontName(): string;
        /**
         * Gets or sets the name of font used to draw axis labels.
         */
        set axisLabelsFontName(value: string);
        /**
         * Gets or sets the size of font used to draw axis labels.
         */
        get axisLabelsFontSize(): number;
        /**
         * Gets or sets the size of font used to draw axis labels.
         */
        set axisLabelsFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw axis labels.
         */
        get axisLabelsFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw axis labels.
         */
        set axisLabelsFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw axis labels.
         */
        get axisLabelsBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw axis labels.
         */
        set axisLabelsBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font used to draw axis titles.
         */
        get axisTitleFontName(): string;
        /**
         * Gets or sets the name of font used to draw axis titles.
         */
        set axisTitleFontName(value: string);
        /**
         * Gets or sets the size of font used to draw axis titles.
         */
        get axisTitleFontSize(): number;
        /**
         * Gets or sets the size of font used to draw axis titles.
         */
        set axisTitleFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw axis titles.
         */
        get axisTitleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw axis titles.
         */
        set axisTitleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw axis titles.
         */
        get axisTitleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw axis titles.
         */
        set axisTitleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font used to draw data labels.
         */
        get dataLabelsFontName(): string;
        /**
         * Gets or sets the name of font used to draw data labels.
         */
        set dataLabelsFontName(value: string);
        /**
         * Gets or sets the size of font used to draw data labels.
         */
        get dataLabelsFontSize(): number;
        /**
         * Gets or sets the size of font used to draw data labels.
         */
        set dataLabelsFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw data labels.
         */
        get dataLabelsFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw data labels.
         */
        set dataLabelsFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw data labels.
         */
        get dataLabelsBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw data labels.
         */
        set dataLabelsBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font used to draw text in UI widgets.
         */
        get widgetFontName(): string;
        /**
         * Gets or sets the name of font used to draw text in UI widgets.
         */
        set widgetFontName(value: string);
        /**
         * Gets or sets the size of font used to draw text in UI widgets.
         */
        get widgetFontSize(): number;
        /**
         * Gets or sets the size of font used to draw text in UI widgets.
         */
        set widgetFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw text in UI widgets.
         */
        get widgetFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw text in UI widgets.
         */
        set widgetFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw text in UI widgets.
         */
        get widgetBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw text in UI widgets.
         */
        set widgetBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the name of font used to draw legend titles.
         */
        get legendTitleFontName(): string;
        /**
         * Gets or sets the name of font used to draw legend titles.
         */
        set legendTitleFontName(value: string);
        /**
         * Gets or sets the size of font used to draw legend titles.
         */
        get legendTitleFontSize(): number;
        /**
         * Gets or sets the size of font used to draw legend titles.
         */
        set legendTitleFontSize(value: number);
        /**
         * Gets or sets the style of font used to draw legend titles.
         */
        get legendTitleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw legend titles.
         */
        set legendTitleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw legend titles.
         */
        get legendTitleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw legend titles.
         */
        set legendTitleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        get uniformSeriesFill(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        set uniformSeriesFill(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        get uniformSeriesStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        set uniformSeriesStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        get uniformSeriesStrokeThickness(): number;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        set uniformSeriesStrokeThickness(value: number);
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        get uniformSeriesStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        set uniformSeriesStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        get commonSeriesFills(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to fill all elements of a series.
         */
        set commonSeriesFills(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>);
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        get commonSeriesStrokes(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Gets or sets a list of brushes, each Brush used to stroke all elements of a series.
         */
        set commonSeriesStrokes(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>);
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        get commonSeriesStrokeThicknesses(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets a list of stroke thicknesses, each thickness applied to all elements of a series.
         */
        set commonSeriesStrokeThicknesses(value: MindFusion.Charting.Collections.List<number>);
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        get commonSeriesStrokeDashStyles(): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Gets or sets a list of dash styles, each style applied to all elements of a series.
         */
        set commonSeriesStrokeDashStyles(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>);
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        get seriesFills(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to draw a different series,
         * and each Brush used to fill individual elements of a series.
         */
        set seriesFills(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>);
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        get seriesStrokes(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>;
        /**
         * Gets or sets a list of Brush lists, each list used to stroke a different series,
         * and each Brush used to stroke individual elements of a series.
         */
        set seriesStrokes(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>>);
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        get seriesStrokeThicknesses(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>;
        /**
         * Gets or sets a list of number lists, each list used to stroke a different series,
         * and each number value specifying thickness of individual elements of a series.
         */
        set seriesStrokeThicknesses(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<number>>);
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        get seriesStrokeDashStyles(): MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>;
        /**
         * Gets or sets a list of DashStyle lists, each list used to stroke a different series,
         * and each DashStyle value specifying style of individual elements of a series.
         */
        set seriesStrokeDashStyles(value: MindFusion.Charting.Collections.List<MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>>);
        /**
         * Gets or sets a Brush used to draw the background of plots.
         */
        get plotBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw the background of plots.
         */
        set plotBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke plot borders.
         */
        get plotBorderStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke plot borders.
         */
        set plotBorderStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of plot borders.
         */
        get plotBorderStrokeThickness(): number;
        /**
         * Gets or sets the thickness of plot borders.
         */
        set plotBorderStrokeThickness(value: number);
        /**
         * Gets or sets the dash style of plot borders.
         */
        get plotBorderStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the dash style of plot borders.
         */
        set plotBorderStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets a Brush used to draw legend background.
         */
        get legendBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw legend background.
         */
        set legendBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke highlighted items.
         */
        get highlightStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke highlighted items.
         */
        set highlightStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of highlight strokes.
         */
        get highlightStrokeThickness(): number;
        /**
         * Gets or sets the thickness of highlight strokes.
         */
        set highlightStrokeThickness(value: number);
        /**
         * Gets or sets the dash style of highlight strokes.
         */
        get highlightStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the dash style of highlight strokes.
         */
        set highlightStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets a Brush used to stroke axis lines.
         */
        get axisStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke axis lines.
         */
        set axisStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of axis lines.
         */
        get axisStrokeThickness(): number;
        /**
         * Gets or sets the thickness of axis lines.
         */
        set axisStrokeThickness(value: number);
        /**
         * Gets or sets the dash style of axis lines.
         */
        get axisStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the dash style of axis lines.
         */
        set axisStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets a Brush used to draw legend borders.
         */
        get legendBorderStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw legend borders.
         */
        set legendBorderStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of legend borders.
         */
        get legendBorderStrokeThickness(): number;
        /**
         * Gets or sets the thickness of legend borders.
         */
        set legendBorderStrokeThickness(value: number);
        /**
         * Gets or sets the dash style of legend borders.
         */
        get legendBorderStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the dash style of legend borders.
         */
        set legendBorderStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
        * Gets or sets the line color of plot grid.
        */
        get gridLineColor(): MindFusion.Charting.Drawing.Color;
        /**
        * Gets or sets the line color of plot grid.
        */
        set gridLineColor(value: MindFusion.Charting.Drawing.Color);
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        get gridLineThickness(): number;
        /**
        * Gets or sets the thickness of plot grid lines.
        */
        set gridLineThickness(value: number);
        /**
        * Gets or sets the style of plot grid lines.
        */
        get gridLineStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
        * Gets or sets the style of plot grid lines.
        */
        set gridLineStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets the main color of plot grid.
         */
        get gridColor1(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the main color of plot grid.
         */
        set gridColor1(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the alternating color of plot grid.
         */
        get gridColor2(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the alternating color of plot grid.
         */
        set gridColor2(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the Brush used to draw the background of data labels.
         */
        get dataLabelsBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw the background of data labels.
         */
        set dataLabelsBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the Brush used to draw the border of data labels.
         */
        get dataLabelsBorderStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw the border of data labels.
         */
        set dataLabelsBorderStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the border width of data labels.
         */
        get dataLabelsBorderThickness(): number;
        /**
         * Gets or sets the border width of data labels.
         */
        set dataLabelsBorderThickness(value: number);
        /**
         * Gets or sets the border dash style of data labels.
         */
        get dataLabelsBorderDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets the border dash style of data labels.
         */
        set dataLabelsBorderDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Gets or sets a Brush used to draw gauge backgrounds.
         */
        get gaugeBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw gauge backgrounds.
         */
        set gaugeBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke gauge borders.
         */
        get gaugeStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke gauge borders.
         */
        set gaugeStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of gauge borders.
         */
        get gaugeStrokeThickness(): number;
        /**
         * Gets or sets the thickness of gauge borders.
         */
        set gaugeStrokeThickness(value: number);
        /**
         * Gets or sets a Brush used to draw the background of gauge scales.
         */
        get gaugeScaleBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw the background of gauge scales.
         */
        set gaugeScaleBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke gauge scales.
         */
        get gaugeScaleStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke gauge scales.
         */
        set gaugeScaleStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of gauge scale strokes.
         */
        get gaugeScaleStrokeThickness(): number;
        /**
         * Gets or sets the thickness of gauge scale strokes.
         */
        set gaugeScaleStrokeThickness(value: number);
        /**
         * Gets or sets a Brush used to draw gauge pointer backgrounds.
         */
        get gaugePointerBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw gauge pointer backgrounds.
         */
        set gaugePointerBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        get gaugePointerStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        set gaugePointerStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of gauge pointer strokes.
         */
        get gaugePointerStrokeThickness(): number;
        /**
         * Gets or sets the thickness of gauge pointer strokes.
         */
        set gaugePointerStrokeThickness(value: number);
        /**
         * Gets or sets a Brush used to draw gauge tick backgrounds.
         */
        get gaugeTickBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw gauge tick backgrounds.
         */
        set gaugeTickBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        get gaugeTickStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        set gaugeTickStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of gauge tick strokes.
         */
        get gaugeTickStrokeThickness(): number;
        /**
         * Gets or sets the thickness of gauge tick strokes.
         */
        set gaugeTickStrokeThickness(value: number);
        /**
         * Gets or sets the name of font used to draw text in gauges.
         */
        get gaugeFontName(): string;
        /**
         * Gets or sets the name of font used to draw text in gauges.
         */
        set gaugeFontName(value: string);
        /**
         * Gets or sets the style of font used to draw text in gauges.
         */
        get gaugeFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw text in gauges.
         */
        set gaugeFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the size of font used to draw text in gauges.
         */
        get gaugeFontSize(): number;
        /**
         * Gets or sets the size of font used to draw text in gauges.
         */
        set gaugeFontSize(value: number);
        fileVersion: number;
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents current tooltip.
     * @property {String} text Gets or sets the tooltip text.
     * @property {MindFusion.Drawing.Point} position Gets or sets the tooltip position.
     * @property {Number} horizontalPadding Gets or sets the horizontal padding to the left and right of the tooltip text.
     * @property {Number} verticalPadding Gets or sets the vertical padding above and below the tooltip text.
     * @property {Number} horizontalOffset Gets or sets the horizontal offset from the pointer.
     * @property {Number} verticalOffset Gets or sets the horizontal offset from the pointer.
     * @property {MindFusion.Charting.Drawing.Font} font Gets or sets the tooltip font.
     * @property {MindFusion.Charting.Drawing.Brush} brush Gets or sets the tooltip background brush.
     * @property {MindFusion.Charting.Drawing.Pen} pen Gets or sets the tooltip border pen.
     * @property {MindFusion.Charting.Drawing.Brush} textBrush Gets or sets the tooltip text brush.
     */
    class ToolTip {
        constructor();
        /**
         * Gets or sets the tooltip text.
         */
        static get text(): string;
        /**
         * Gets or sets the tooltip text.
         */
        static set text(value: string);
        /**
         * Gets or sets the tooltip position.
         */
        static get position(): MindFusion.Drawing.Point;
        /**
         * Gets or sets the tooltip position.
         */
        static set position(value: MindFusion.Drawing.Point);
        /**
         * Gets or sets the horizontal padding to the left and right of the tooltip text.
         */
        static get horizontalPadding(): number;
        /**
         * Gets or sets the horizontal padding to the left and right of the tooltip text.
         */
        static set horizontalPadding(value: number);
        /**
         * Gets or sets the vertical padding above and below the tooltip text.
         */
        static get verticalPadding(): number;
        /**
         * Gets or sets the vertical padding above and below the tooltip text.
         */
        static set verticalPadding(value: number);
        /**
         * Gets or sets the horizontal offset from the pointer.
         */
        static get horizontalOffset(): number;
        /**
         * Gets or sets the horizontal offset from the pointer.
         */
        static set horizontalOffset(value: number);
        /**
         * Gets or sets the vertical offset from the pointer.
         */
        static get verticalOffset(): number;
        /**
         * Gets or sets the vertical offset from the pointer.
         */
        static set verticalOffset(value: number);
        /**
         * Gets or sets the tooltip font.
         */
        static get font(): MindFusion.Charting.Drawing.Font;
        /**
         * Gets or sets the tooltip font.
         */
        static set font(value: MindFusion.Charting.Drawing.Font);
        /**
         * Gets or sets the tooltip background brush.
         */
        static get brush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the tooltip background brush.
         */
        static set brush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the tooltip border pen.
         */
        static get pen(): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets or sets the tooltip border pen.
         */
        static set pen(value: MindFusion.Charting.Drawing.Pen);
        /**
         * Gets or sets the tooltip text brush.
         */
        static get textBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the tooltip text brush.
         */
        static set textBrush(value: MindFusion.Charting.Drawing.Brush);
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Implements SeriesStyle using uniform attributes for all elements in all series.
     * @property {MindFusion.Charting.Drawing.Brush} uniformFill Gets or sets a Brush used to fill all elements of all series uniformly.
     * @property {MindFusion.Charting.Drawing.Brush} uniformStroke Gets or sets a Brush used to stroke all elements of all series uniformly.
     * @property {Number} uniformStrokeThickness Gets or sets uniform stroke thickness for all elements of all series.
     * @property {MindFusion.Charting.Drawing.DashStyle} uniformStrokeDashStyle Gets or sets uniform stroke dash style for all elements of all series.
     */
    class UniformSeriesStyle implements SeriesStyle {
        /**
         * Initializes a new instance of the UniformSeriesStyle class.
         * @param {MindFusion.Charting.Drawing.Brush} [fill] A Brush used to fill all series elements.
         * @param {MindFusion.Charting.Drawing.Brush} [stroke] A Brush used to stroke all series elements.
         * @param {Number} [strokeThickness] Uniform thickness of series elements' strokes.
         * @param {MindFusion.Charting.Drawing.DashStyle} [strokeDashStyle] Uniform dash style of series elements' strokes.
         */
        constructor(fill?: MindFusion.Charting.Drawing.Brush, stroke?: MindFusion.Charting.Drawing.Brush, strokeThickness?: number, strokeDashStyle?: MindFusion.Charting.Drawing.DashStyle);
        /**
         * Implements SeriesStyle.Fill. Returns UniformFill for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        fill(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.Stroke. Returns UniformStroke for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.Brush} A Brush instance.
         */
        stroke(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.Brush;
        /**
         * Implements SeriesStyle.StrokeThickness. Returns UniformStrokeThickness for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {Number} A nullable double value specifying stroke thickness.
         */
        strokeThickness(seriesIndex: number, dataIndex: number): number;
        /**
         * Implements SeriesStyle.StrokeDashStyle. Returns UniformStrokeDashStyle for any data item.
         * @param {Number} seriesIndex An integer index of a Series.
         * @param {Number} dataIndex An integer index of a data item in specified series.
         * @returns {MindFusion.Charting.Drawing.DashStyle} A nullable DashStyle value specifying stroke dash style.
         */
        strokeDashStyle(seriesIndex: number, dataIndex: number): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        get uniformFill(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to fill all elements of all series uniformly.
         */
        set uniformFill(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        get uniformStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke all elements of all series uniformly.
         */
        set uniformStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        get uniformStrokeThickness(): number;
        /**
         * Gets or sets uniform stroke thickness for all elements of all series.
         */
        set uniformStrokeThickness(value: number);
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        get uniformStrokeDashStyle(): MindFusion.Charting.Drawing.DashStyle;
        /**
         * Gets or sets uniform stroke dash style for all elements of all series.
         */
        set uniformStrokeDashStyle(value: MindFusion.Charting.Drawing.DashStyle);
        fromJson(obj: any): void;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents a two-dimensional vector.
     * @property {Number} x Gets or sets the X component of this vector.
     * @property {Number} y Gets or sets the Y component of this vector.
     * @property {Number} length Gets the length of this vector.
     * @property {Number} lengthSquared Gets the squared length of this vector.
     */
    class Vector {
        /**
         * Initializes a new instance of the Vector struct.
         * @param {Number} x X component of the vector.
         * @param {Number} y Y component of the vector.
         */
        constructor(x: number, y: number);
        /**
         * Makes this vector a unit vector.
         */
        normalize(): void;
        /**
         * Returns the size of cross-product of two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The size of cross-product.
         */
        static crossProduct(vector1: Vector, vector2: Vector): number;
        /**
         * Determines the angle between two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The angle between specified vectors.
         */
        static angleBetween(vector1: Vector, vector2: Vector): number;
        /**
         * Reverses the direction of this vector.
         */
        negate(): void;
        /**
         * Adds two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {MindFusion.Charting.Vector} A vector representing the sum of specified vectors.
         */
        static add(vector1: Vector, vector2: Vector): Vector;
        /**
         * Translates point by a vector.
         * @param {MindFusion.Charting.Vector} vector The vector to add.
         * @param {MindFusion.Drawing.Point} point The reference point.
         * @returns {MindFusion.Drawing.Point} The translated point.
         */
        static addPoint(vector: Vector, point: MindFusion.Drawing.Point): MindFusion.Drawing.Point;
        /**
         * Subtracts two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {MindFusion.Charting.Vector} A vector representing the difference between specified vectors.
         */
        static subtract(vector1: Vector, vector2: Vector): Vector;
        /**
         * Multiplies vector by a scalar.
         * @param {MindFusion.Charting.Vector} vector The vector to multiply.
         * @param {Number} scalar The scalar value.
         * @returns {MindFusion.Charting.Vector} A vector containing the multiplication result.
         */
        static multiplyVectorAndScalar(vector: Vector, scalar: number): Vector;
        /**
         * Multiplies vector by a scalar.
         * @param {Number} scalar The scalar value.
         * @param {MindFusion.Charting.Vector} vector The vector to multiply.
         * @returns {MindFusion.Charting.Vector} A vector containing the multiplication result.
         */
        static multiplyScalarAndVector(scalar: number, vector: Vector): Vector;
        /**
     * Returns the dot product of two vectors.
     * @param {MindFusion.Charting.Vector} vector1 The first vector.
     * @param {MindFusion.Charting.Vector} vector2 The second vector.
     * @returns {Number} The dot product.
     */
        static multiply(vector1: Vector, vector2: Vector): number;
        /**
         * Divides a vector by a scalar.
         * @param {MindFusion.Charting.Vector} vector The vector to divide.
         * @param {Number} scalar The scalar value.
         * @returns {MindFusion.Charting.Vector} A vector containing the division result.
         */
        static divide(vector: Vector, scalar: number): Vector;
        /**
         * Finds the determinant of two vectors.
         * @param {MindFusion.Charting.Vector} vector1 The first vector.
         * @param {MindFusion.Charting.Vector} vector2 The second vector.
         * @returns {Number} The determinant.
         */
        static determinant(vector1: Vector, vector2: Vector): number;
        /**
         * Gets or sets the X component of this vector.
         */
        get x(): number;
        /**
         * Gets or sets the X component of this vector.
         */
        set x(value: number);
        /**
         * Gets or sets the Y component of this vector.
         */
        get y(): number;
        /**
         * Gets or sets the Y component of this vector.
         */
        set y(value: number);
        /**
         * Gets the length of this vector.
         */
        get length(): number;
        /**
         * Gets the squared length of this vector.
         */
        get lengthSquared(): number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class VelocityCalculator {
        constructor(sampleSize?: number);
        reset(): void;
        addSample(movement: Vector, time: number): void;
        calculate(): Vector;
        get canCalculate(): boolean;
        Epsilon: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A Component that renders horizontal Axis ranges.
     * @property {Boolean} plotBottomSide Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
     */
    class XAxisRenderer extends MindFusion.Charting.AxisRenderer {
        /**
         * Initializes a new instance of the XAxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         */
        constructor(axis: Axis);
        /**
         * AxisRenderer.effectiveAxis override. Gets the effective horizontal Axis in current context,
         * getting one from Plot2D or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * Component.measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        get maxLabelHeight(): number;
        set maxLabelHeight(value: number);
        /**
         * Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
         */
        get plotBottomSide(): boolean;
        /**
         * Gets or sets whether this XAxisRenderer is shown at the bottom side of a plot.
         */
        set plotBottomSide(value: boolean);
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Contains methods that facilitate serializing and deserializing objects to and from XML documents.
    */
    class XmlPersistContext {
        /**
         * Initializes a new instance of the XmlPersistContext class.
         * @param {XMLDocument} document
         * The associated XMLDocument.
         *
         * @param {number} fileVersion
         * Specifies the current file format number.
         *
         */
        constructor(document: Document, fileVersion: number);
        selectSingleNode(elementName: string, parentElement: Element): Element;
        hasValue(value: any): boolean;
        innerText(element: Element): string;
        /**
         * Adds a new child node with the specified name and
         * value to the specified parent node.
         */
        addChildElement(elementName: string, parentElement: Element, innerText?: string): Element;
        /**
         * Writes a string value with the specified name.
         */
        writeString(stringValue: string, elementName: string, parentElement: Element): Element;
        /**
         * Writes a boolean value with the specified name.
         */
        writeBool(boolValue: boolean, elementName: string, parentElement: Element): Element;
        /**
         * Writes an integer value with the specified name.
         */
        writeInt(intValue: number, elementName: string, parentElement: Element): Element;
        /**
         * Writes a float value with the specified name.
         */
        writeFloat(floatValue: number, elementName: string, parentElement: Element): Element;
        /**
         * Writes a reference to the specified brush. The brush
         * is registered within the internal hashtable for
         * subsequent serialization.
         */
        writeBrush(brush: MindFusion.Charting.Drawing.Brush, elementName: string, parentElement: Element): Element;
        /**
         * Writes all currently accumulated brushes.
         */
        writeBrushes(parentElement: Element): void;
        writeBrushContent(brushElement: Element, brush: MindFusion.Charting.Drawing.Brush): void;
        /**
        * Writes a list of brushes.
        */
        writeBrushList(list: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of floating-point numbers.
         */
        writeFloatList(list: MindFusion.Charting.Collections.List<number>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of colors.
         */
        writeColorList(list: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Color>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes a list of dash styles.
         */
        writeDashStyleList(list: MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>, elementName: string, subElementName: string, parentElement: Element): Element;
        /**
         * Writes the specified enum value.
         */
        writeEnum(enumValue: Object, elementName: string, parentElement: Element): Element;
        /**
         * Writes the specified color.
         */
        writeColor(color: MindFusion.Charting.Drawing.Color, elementName: string, parentElement: Element): Element;
        /**
         * Writes the specified object under the specified name.
         */
        /**
         * Reads a string value with the specified name.
         */
        readString(elementName: string, parentElement: Element, defaultValue?: string): string;
        /**
         * Reads a boolean value with the specified name.
         */
        readBool(elementName: string, parentElement: Element, defaultValue?: boolean): boolean;
        /**
         * Reads an integer value with the specified name.
         */
        readInt(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
         * Reads a float value with the specified name.
         */
        readFloat(elementName: string, parentElement: Element, defaultValue?: number): number;
        /**
         * Reads a list of floats.
         */
        readFloatList(elementName: string | Element, subElementName: string, parentElement: Element): Collections.List<number>;
        /**
         * Reads a list of dash styles.
         */
        readDashStyleList(elementName: string | Element, subElementName: string, parentElement?: Element): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.DashStyle>;
        /**
         * Reads a MindFusion.Charting.Drawing.Brush object with the specified name.
         */
        readBrush(elementName: string | Element, parentElement: Element, defaultValue?: MindFusion.Charting.Drawing.Brush): MindFusion.Charting.Drawing.Brush;
        /**
         * Reads a list of brushes.
         */
        readBrushList(elementName: Element | string, subElementName: string, parentElement: Element): MindFusion.Charting.Collections.List<MindFusion.Charting.Drawing.Brush>;
        /**
         * Reads all brushes.
         */
        readBrushes(parentElement: Element): void;
        readBrushContent(brushElement: Element): MindFusion.Charting.Drawing.Brush;
        /**
         * Reads an enum value with the specified name.
         */
        readEnum(elementName: string, parentElement: Element, defaultValue?: number): Object;
        /**
         * Reads a color with the specified name.
         */
        readColor(elementName: string, parentElement: Element, defaultValue?: MindFusion.Charting.Drawing.Color): MindFusion.Charting.Drawing.Color;
        /**
         * Reads a StringFormat object with the specified name.
         */
        readStringFormat(elementName: string, parentElement: Element, defultFormat?: MindFusion.Charting.Drawing.StringFormat): MindFusion.Charting.Drawing.StringFormat;
        /**
         * Reads an object with the specified name.
         */
        readObject(elementName: string, parentElement: any): Object;
        /**
         * Gets the underlying XML document.
         */
        get xmlDocument(): Document;
        /**
         * Gets the format revision number for the file being currently serialized.
         */
        get fileVersion(): number;
        /**
         * Gets or sets a value indicating whether resource accumulation is disabled.
         */
        get inplaceResources(): boolean;
        /**
         * Gets or sets a value indicating whether resource accumulation is disabled.
         */
        set inplaceResources(value: boolean);
        LatestFormat: number;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class A Component that renders vertical Axis ranges.
     * @property {Boolean} plotLeftSide Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
     */
    class YAxisRenderer extends AxisRenderer {
        /**
         * Initializes a new instance of the YAxisRenderer class.
         * @param {MindFusion.Charting.Axis} axis The Axis that will be drawn by this object.
         * @param {MindFusion.Charting.Axis} [xAxis] The Axis used to check data item visibility.
         */
        constructor(axis: Axis, xAxis?: Axis);
        /**
         * AxisRenderer.effectiveAxis override. Gets the effective vertical Axis in current context,
         * getting one from Plot2D or chart control if there's no local Axis associated with this renderer.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {MindFusion.Charting.Axis} An Axis instance.
         */
        effectiveAxis(context: RenderContext): Axis;
        /**
         * Component.measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: RenderContext): void;
        /**
         * Component.draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: RenderContext): void;
        get maxLabelWidth(): number;
        set maxLabelWidth(value: number);
        /**
         * Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
         */
        get plotLeftSide(): boolean;
        /**
         * Gets or sets whether this YAxisRenderer is shown at the left side of a plot.
         */
        set plotLeftSide(value: boolean);
        /**
        * Gets the horizontal alignment of axis label
        */
        get labelAlignment(): MindFusion.Charting.Drawing.StringAlignment;
        /**
        * Sets the horizontal alignment of axis label
        */
        set labelAlignment(value: MindFusion.Charting.Drawing.StringAlignment);
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    /**
     * @class Represents a controller that zooms into plot's data range.
     */
    class ZoomController extends Plot2DController {
        /**
         * Initializes a new instance of the ZoomController class.
         * @param {MindFusion.Charting.RenderContext} renderContext A RenderContext instance.
         * @param {Boolean} vertical
         * true to implement interaction along the Y axis, or false for the X axis.
         *
         */
        constructor(renderContext: RenderContext, vertical: boolean);
        /**
         * Plot2DController.OnMouseDown override. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * PlotController.OnMouseMove override. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * PlotController.OnMouseUp override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * PlotController.OnMouseWheel override. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the direction and the amount of scrolling needed.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * PlotController.drawInteraction override. Draws the currently selected data range
         * that that controller will zoom into when the user releases the mouse button.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
    }
}
/**
* @namespace MindFusion.Charting
*/
declare namespace MindFusion.Charting {
    class ZoomHistory {
        constructor(parent: MindFusion.Charting.Components.Component);
        merge(axes: MindFusion.Charting.Collections.IEnumerable<Axis>): void;
        register(axes: MindFusion.Charting.Collections.IEnumerable<Axis>): void;
        restore(): void;
        reset(): void;
        get changed(): MindFusion.Charting.Common.EventDispatcher<EventArgs>;
        get canRestore(): boolean;
        get isZoomedOut(): boolean;
        set isZoomedOut(value: boolean);
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    class AdjustRangesVisitor extends MindFusion.Charting.Components.ComponentVisitor {
        constructor(context: MindFusion.Charting.RenderContext);
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    class MeasureRangesVisitor extends MindFusion.Charting.Components.ComponentVisitor {
        constructor(context: MindFusion.Charting.RenderContext);
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    class StartMeasureVisitor extends MindFusion.Charting.Components.ComponentVisitor {
        constructor(context: MindFusion.Charting.RenderContext);
        visitPlot(plot: MindFusion.Charting.Plot): void;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control that contains multiple chart plots and gauges and manages their layout.
    * @property {Panel} rootPanel Gets the root Panel in the hierarchy of dashboard components.
    * @property {LayoutBuilder} layoutBuilder Gets a LayoutBuilder instance that provides shortcut methods for building fragments of dashboard's user interface.
    * @property {String} licenseKey Gets or sets the license key of the control.
    * @property {String} licenseLocation Gets or sets the path to the license file.
    * @property {StackPanel} layoutPanel Gets a Panel containing dashboard components that should participate in layout measurements and be arranged relatively to each other.
    * @property {Theme} theme Gets or sets a Theme specifying appearance of dashboard elements.
    * @property {MindFusion.Charting.Drawing.Color} backColor Gets or sets dashboard's back color.
    * @property {String} backgroundImageLocation Gets or sets dashboard's background image.
    * @property {Boolean} backgroundImageAutoSize Gets or sets whether auto-size mode is enabled for BackgroundImage.
    * @property {MindFusion.Charting.Drawing.ImageAlign} backgroundImageAlign Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
    * @property {Boolean} allowZoom Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
    */
    class Dashboard implements MindFusion.Charting.Components.RootControl {
        /**
         * Initializes a new instance of the Dashboard class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this dashboard with.
         */
        constructor(element: HTMLCanvasElement);
        /**
         * Gets the root Panel in the hierarchy of dashboard components.
         */
        get rootPanel(): MindFusion.Charting.Components.Panel;
        /**
         * Gets the root Panel in the hierarchy of dashboard components.
         */
        set rootPanel(value: MindFusion.Charting.Components.Panel);
        /**
         * Gets a LayoutBuilder instance that provides shortcut methods for
         * building fragments of dashboard's user interface.
         */
        get layoutBuilder(): LayoutBuilder;
        /**
         * Gets a LayoutBuilder instance that provides shortcut methods for
         * building fragments of dashboard's user interface.
         */
        set layoutBuilder(value: LayoutBuilder);
        /**
         * Gets a Panel containing dashboard components that should participate
         * in layout measurements and be arranged relatively to each other.
         */
        get layoutPanel(): MindFusion.Charting.Components.StackPanel;
        /**
         * Gets a Panel containing dashboard components that should participate
         * in layout measurements and be arranged relatively to each other.
         */
        set layoutPanel(value: MindFusion.Charting.Components.StackPanel);
        /**
         * Control.OnResize override. Invalidates the layout of child components and runs a new layout pass.
         * @param {EventArgs} e An EventArgs instance.
         */
        onResize(): void;
        handleResize(): void;
        /**
         * Binds the chart to current DataSource.
         */
        dataBind(): void;
        dataBindInternal(): void;
        onUnbind(): void;
        onBind(): void;
        /**
         * Draws the dashboard on specified Graphics surface.
         * @param {MindFusion.Charting.Drawing.Graphics} g A Graphics instance.
         * @param {MindFusion.Drawing.Rect} layoutRect Current layout rectangle.
         * @param {MindFusion.Drawing.Rect} clipRect Current clip rectangle.
         */
        draw(): void;
        /**
         * Creates a RenderContext instance.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics A Graphics surface where dashboard elements should be rendered.
         * @param {MindFusion.Drawing.Rect} clipRect The current clip rectangle.
         * @returns {MindFusion.Charting.RenderContext} A RenderContext instance.
         */
        createRenderContext(graphics: MindFusion.Charting.Drawing.Graphics, clipRect: MindFusion.Drawing.Rect): MindFusion.Charting.RenderContext;
        /**
         * Raised when the user clicks on a data item inside a plot.
         * @event Dashboard.dataItemClicked
         * @type {EventDispatcher}
         * @property {Dashboard} sender
         * @property {HitResult} args
         */
        get dataItemClicked(): Common.EventDispatcher<HitResult>;
        /**
         * Raises the DataItemClicked event
         * if the user has clicked on data element in a plot.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        protected onClick(e: MouseEvent): void;
        /**
         * Handles the HTMLCanvasElement mousedown event.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        protected onMouseDown(e: MouseEvent): void;
        /**
         * Handles the HTMLCanvasElement mousemove event.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        onMouseMove(e: MouseEvent): void;
        getCursorHint(x: number, y: number): MindFusion.Charting.Components.CursorHint;
        tooltipBrush: MindFusion.Charting.Drawing.Brush;
        tooltipPen: MindFusion.Charting.Drawing.Pen;
        toolTipTextBrush: MindFusion.Charting.Drawing.Brush;
        /**
         * Handles the HTMLCanvasElement mouseup event.
         * @param {MouseEvent} e A MouseEvent instance.
         */
        onMouseUp(e: MouseEvent): void;
        protected onMouseLeave(e: MouseEvent): void;
        /**
         * Implements RootControl.InvalidateLayout. Invalidates layout of specified component.
         * @param {Components.Component} panel The component to invalidate.
         */
        invalidateLayout(panel: MindFusion.Charting.Components.Component): void;
        /**
         * Implements RootControl.InvalidateLayout. Invalidates the specified region of a component.
         * @param {RectD} [rect] The area to invalidate and redraw.
         * @param {Components.Component} [panel] The reference Component.
         */
        invalidate(rect?: MindFusion.Drawing.Rect, panel?: MindFusion.Charting.Components.Component): void;
        /**
         * Gets or sets a Theme specifying appearance of dashboard elements.
         */
        get theme(): MindFusion.Charting.Theme;
        /**
         * Gets or sets a Theme specifying appearance of dashboard elements.
         */
        set theme(value: MindFusion.Charting.Theme);
        /**
        * Gets or sets dashboard's back color.
        */
        get backColor(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets dashboard's back color.
         */
        set backColor(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets dashboard's background image.
         */
        get backgroundImageLocation(): string;
        /**
         * Gets or sets dashboard's background image.
         */
        set backgroundImageLocation(value: string);
        /**
         * Gets or sets whether auto-size mode is enabled for BackgroundImage.
         */
        get backgroundImageAutoSize(): boolean;
        /**
         * Gets or sets whether auto-size mode is enabled for BackgroundImage.
         */
        set backgroundImageAutoSize(value: boolean);
        /**
         * Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
         */
        get backgroundImageAlign(): MindFusion.Charting.Drawing.ImageAlign;
        /**
         * Gets or sets the alignment of BackgroundImage relatively to dashboard boundaries.
         */
        set backgroundImageAlign(value: MindFusion.Charting.Drawing.ImageAlign);
        /**
         * Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
         */
        get allowZoom(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to zoom into plots' data ranges.
         */
        set allowZoom(value: boolean);
        bindingsValid: boolean;
        /**
        * Gets or sets the path to the license file.
        */
        get licenseLocation(): string;
        /**
         * Gets or sets the path to the license file.
         */
        set licenseLocation(value: string);
        /**
         * Gets or sets the license key of the control.
         */
        get licenseKey(): string;
        /**
         * Gets or sets the license key of the control.
         */
        set licenseKey(value: string);
        protected m_gridFrameDashStops: number[];
        /**
         * Deserializes the control's data from JSON string.
         */
        fromJson(json: string): any;
        /**
         * Serializes the control's data to JSON string.
         */
        toJson(): any;
        protected toJsonPre(): any;
        initialize(): void;
        preparePostback(sender: any, args: any): void;
        onControlLoaded(): void;
        get controlLoaded(): Common.EventDispatcher<Common.EmptyEventArgs>;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A base class for chart controls.
    * @property {MindFusion.Charting.Components.Panel} plotPanel Gets the Panel that contains the chart's plot and associated elements.
    * @property {MindFusion.Charting.Collections.List<Series>} dataBoundSeries Contains series generated from DataSource data.
    * @property {Plot} plot Gets the chart's Plot component.
    * @property {GridPanel} chartPanel Gets or sets the GridPanel that contains the chart's PlotPanel and axis renderers.
    * @property {String} title Gets or sets the title of this chart.
    * @property {Margins} titleMargin Gets or sets the margin space around Title.
    * @property {String} titleFontName Gets or sets the name of Font used to draw chart's Title.
    * @property {Number} titleFontSize Gets or sets the size of Font used to draw chart's Title.
    * @property {MindFusion.Charting.Drawing.FontStyle} titleFontStyle Gets or sets the style of Font used to draw chart's Title.
    * @property {MindFusion.Charting.Drawing.Brush} titleBrush Gets or sets the Brush used to draw chart's Title.
    * @property {String} subtitle Gets or sets the sub-title of this chart.
    * @property {Margins} subtitleMargin Gets or sets the margin space around Subtitle.
    * @property {String} subtitleFontName Gets or sets the name of Font used to draw chart's Subtitle.
    * @property {Number} subtitleFontSize Gets or sets the size of Font used to draw chart's Subtitle.
    * @property {MindFusion.Charting.Drawing.FontStyle} subtitleFontStyle Gets or sets the style of Font used to draw chart's Subtitle.
    * @property {MindFusion.Charting.Drawing.Brush} subtitleBrush Gets or sets the Brush used to draw chart's Subtitle.
    * @property {String} plotImageLocation Gets or sets the Image drawn inside chart's plot area.
    * @property {Boolean} plotImageAutoSize Gets or sets whether auto-size mode is enabled for PlotImage.
    * @property {MindFusion.Charting.Drawing.ImageAlign} plotImageAlign Gets or sets the alignment of PlotImage relatively to the plot boundaries.
    * @property {String} legendTitle Gets or sets the legend title.
    * @property {Boolean} showLegendTitle Gets a value indicating whether to display the legend title.
    * @property {Number} legendSpacing Gets the distance between adjacent entries in the legend.
    * @property {LayoutAlignment} legendHorizontalAlignment Gets or sets the horizontal alignment of the legend.
    * @property {LayoutAlignment} legendVerticalAlignment Gets or sets the vertical alignment of the legend.
    * @property {Margins} legendMargin Gets or sets the margin space around the legend.
    * @property {Boolean} showLegend Gets or sets a value indicating whether the chart should draw a legend.
    * @property {LegendRenderer} legendRenderer Gets the LegendRenderer component used to draw the chart's legend.
    * @property {Boolean} showZoomWidgets Gets or sets a value indicating whether the plot should show zoom buttons.
    * @property {Boolean} showDataLabels Gets or sets what kind of labels from data series should be drawn.
    * @property {Boolean} showHighlight Gets a value indicating whether to show highlights on data items.
    * @property {Boolean} showToolTips Gets a value indicating whether to show tooltips.
    * @property {Boolean} allowMoveLegend Gets or sets a value indicating whether users are allowed to move the legend.
    * @property {Object} dataSource Gets or sets the chart's data source.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} xDataFields Gets or sets the names of fields in the data source whose values are assigned to X coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} yDataFields Gets or sets the names of fields in the data source whose values are assigned to Y coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} zDataFields Gets or sets the names of fields in the data source whose values are assigned to Z coordinates of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} innerLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as inner labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} outerLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as outer labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} toolTipsDataFields Gets or sets the names of fields in the data source whose values are shown as tooltips of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} xAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as X axis labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} yAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as Y axis labels of rendered graphical elements.
    * @property {MindFusion.Charting.Collections.ObservableCollection<String>} zAxisLabelsDataFields Gets or sets the names of fields in the data source whose values are shown as Z axis labels of rendered graphical elements.
    */
    abstract class Chart extends Dashboard {
        /**
         * Initializes a new instance of the Chart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {SeriesRenderer} [renderer] A SeriesRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, renderer?: MindFusion.Charting.SeriesRenderer);
        /**
         * Gets the chart's Plot component.
         */
        get plot(): MindFusion.Charting.Plot;
        /**
         * Gets the Panel that contains the chart's plot and associated elements.
         */
        get plotPanel(): MindFusion.Charting.Components.Panel;
        /**
         * Contains series generated from DataSource data.
         */
        get dataBoundSeries(): MindFusion.Charting.Collections.List<Series>;
        /**
         * Contains series generated from DataSource data.
         */
        set dataBoundSeries(value: MindFusion.Charting.Collections.List<Series>);
        /**
         * Gets the GridPanel that contains the chart's PlotPanel and axis renderers.
         */
        get chartPanel(): MindFusion.Charting.Components.GridPanel;
        /**
         * Gets the GridPanel that contains the chart's PlotPanel and axis renderers.
         */
        set chartPanel(value: MindFusion.Charting.Components.GridPanel);
        get titlePanel(): MindFusion.Charting.Components.TextComponent;
        set titlePanel(value: MindFusion.Charting.Components.TextComponent);
        get subtitlePanel(): MindFusion.Charting.Components.TextComponent;
        set subtitlePanel(value: MindFusion.Charting.Components.TextComponent);
        /**
         * Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of Plot -derived class.
         */
        createPlot(): MindFusion.Charting.Plot;
        /**
         * Zooms out of current data range.
         */
        zoomOut(): void;
        /**
         * Resets zoom level to original data range.
         */
        resetZoom(): void;
        /**
         * Control.OnPaddingChanged override.
         * @param {EventArgs} e An EventArgs instance.
         */
        onPaddingChanged(e: MindFusion.EventArgs): void;
        /**
         * Control.OnSizeChanged override.
         * @param {EventArgs} e An EventArgs instance.
         */
        onSizeChanged(e: MindFusion.EventArgs): void;
        /**
         * Gets or sets the title of this chart.
         */
        get title(): string;
        /**
         * Gets or sets the title of this chart.
         */
        set title(value: string);
        /**
         * Gets or sets the margin space around Title.
         */
        get titleMargin(): MindFusion.Charting.Margins;
        /**
         * Gets or sets the margin space around Title.
         */
        set titleMargin(value: MindFusion.Charting.Margins);
        /**
         * Gets or sets the name of Font used to draw chart's Title.
         */
        get titleFontName(): string;
        /**
         * Gets or sets the name of Font used to draw chart's Title.
         */
        set titleFontName(value: string);
        /**
         * Gets or sets the size of Font used to draw chart's Title.
         */
        get titleFontSize(): number;
        /**
         * Gets or sets the size of Font used to draw chart's Title.
         */
        set titleFontSize(value: number);
        /**
         * Gets or sets the style of Font used to draw chart's Title.
         */
        get titleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of Font used to draw chart's Title.
         */
        set titleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw chart's Title.
         */
        get titleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw chart's Title.
         */
        set titleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the sub-title of this chart.
         */
        get subtitle(): string;
        /**
         * Gets or sets the sub-title of this chart.
         */
        set subtitle(value: string);
        /**
         * Gets or sets the margin space around Subtitle.
         */
        get subtitleMargin(): MindFusion.Charting.Margins;
        /**
         * Gets or sets the margin space around Subtitle.
         */
        set subtitleMargin(value: MindFusion.Charting.Margins);
        /**
         * Gets or sets the name of Font used to draw chart's Subtitle.
         */
        get subtitleFontName(): string;
        /**
         * Gets or sets the name of Font used to draw chart's Subtitle.
         */
        set subtitleFontName(value: string);
        /**
         * Gets or sets the size of Font used to draw chart's Subtitle.
         */
        get subtitleFontSize(): number;
        /**
         * Gets or sets the size of Font used to draw chart's Subtitle.
         */
        set subtitleFontSize(value: number);
        /**
         * Gets or sets the style of Font used to draw chart's Subtitle.
         */
        get subtitleFontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of Font used to draw chart's Subtitle.
         */
        set subtitleFontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the Brush used to draw chart's Subtitle.
         */
        get subtitleBrush(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets the Brush used to draw chart's Subtitle.
         */
        set subtitleBrush(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the Image drawn inside chart's plot area.
         */
        get plotImageLocation(): string;
        /**
         * Gets or sets the Image drawn inside chart's plot area.
         */
        set plotImageLocation(value: string);
        /**
         * Gets or sets whether auto-size mode is enabled for PlotImage.
         */
        get plotImageAutoSize(): boolean;
        /**
         * Gets or sets whether auto-size mode is enabled for PlotImage.
         */
        set plotImageAutoSize(value: boolean);
        /**
         * Gets or sets the alignment of PlotImage relatively to the plot boundaries.
         */
        get plotImageAlign(): MindFusion.Charting.Drawing.ImageAlign;
        /**
         * Gets or sets the alignment of PlotImage relatively to the plot boundaries.
         */
        set plotImageAlign(value: MindFusion.Charting.Drawing.ImageAlign);
        /**
         * Gets the default SeriesRenderer for this chart.
         */
        get seriesRenderer(): MindFusion.Charting.SeriesRenderer;
        protected m_seriesRenderer: MindFusion.Charting.SeriesRenderer;
        /**
         * Gets or sets the legend title.
         */
        get legendTitle(): string;
        /**
         * Gets or sets the legend title.
         */
        set legendTitle(value: string);
        /**
        * Gets a value indicating whether to display the legend title.
        */
        get showLegendTitle(): boolean;
        /**
        * Sets a value indicating whether to display the legend title.
        */
        set showLegendTitle(value: boolean);
        /**
        * Gets the distance between adjacent entries in the legend.
        */
        get legendSpacing(): number;
        /**
        * Sets the distance between adjacent entries in the legend.
        */
        set legendSpacing(value: number);
        /**
         * Gets or sets the horizontal alignment of the legend.
         */
        get legendHorizontalAlignment(): MindFusion.Charting.Components.LayoutAlignment;
        /**
         * Gets or sets the horizontal alignment of the legend.
         */
        set legendHorizontalAlignment(value: MindFusion.Charting.Components.LayoutAlignment);
        /**
         * Gets or sets the vertical alignment of the legend.
         */
        get legendVerticalAlignment(): MindFusion.Charting.Components.LayoutAlignment;
        /**
         * Gets or sets the vertical alignment of the legend.
         */
        set legendVerticalAlignment(value: MindFusion.Charting.Components.LayoutAlignment);
        /**
         * Gets or sets the margin space around the legend.
         */
        get legendMargin(): MindFusion.Charting.Margins;
        /**
         * Gets or sets the margin space around the legend.
         */
        set legendMargin(value: MindFusion.Charting.Margins);
        /**
         * Gets or sets a value indicating whether the chart should draw a legend.
         */
        get showLegend(): boolean;
        /**
         * Gets or sets a value indicating whether the chart should draw a legend.
         */
        set showLegend(value: boolean);
        /**
         * Gets the LegendRenderer component used to draw the chart's legend.
         */
        get legendRenderer(): MindFusion.Charting.LegendRenderer;
        /**
         * Gets or sets a value indicating whether the plot should show zoom buttons.
         */
        get showZoomWidgets(): boolean;
        /**
         * Gets or sets a value indicating whether the plot should show zoom buttons.
         */
        set showZoomWidgets(value: boolean);
        /**
         * Gets or sets what kind of labels from data series should be drawn.
         */
        get showDataLabels(): MindFusion.Charting.LabelKinds;
        /**
         * Gets or sets what kind of labels from data series should be drawn.
         */
        set showDataLabels(value: MindFusion.Charting.LabelKinds);
        /**
        * Gets a value indicating whether to show highlights on data items.
        */
        get showHighlight(): boolean;
        /**
        * Sets a value indicating whether to show highlights on data items.
        */
        set showHighlight(value: boolean);
        /**
        * Gets a value indicating whether to show tooltips.
        */
        get showToolTips(): boolean;
        /**
        * Sets a value indicating whether to show tooltips.
        */
        set showToolTips(value: boolean);
        /**
         * Gets or sets a value indicating whether users are allowed to move the legend.
         */
        get allowMoveLegend(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to move the legend.
         */
        set allowMoveLegend(value: boolean);
        static getField(fields: MindFusion.Charting.Collections.List<string>, i: number): string;
        dataBindInternal(): void;
        /**
         * Gets or sets the chart's data source.
         */
        get dataSource(): Object;
        /**
         * Gets or sets the chart's data source.
         */
        set dataSource(value: Object);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to X coordinates of rendered graphical elements.
         */
        get xDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to X coordinates of rendered graphical elements.
         */
        set xDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Y coordinates of rendered graphical elements.
         */
        get yDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Y coordinates of rendered graphical elements.
         */
        set yDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Z coordinates of rendered graphical elements.
         */
        get zDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are assigned to Z coordinates of rendered graphical elements.
         */
        set zDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as inner labels of rendered graphical elements.
         */
        get innerLabelsDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as inner labels of rendered graphical elements.
         */
        set innerLabelsDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as outer labels of rendered graphical elements.
         */
        get outerLabelsDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as outer labels of rendered graphical elements.
         */
        set outerLabelsDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as tooltips of rendered graphical elements.
         */
        get toolTipsDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as tooltips of rendered graphical elements.
         */
        set toolTipsDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as X axis labels of rendered graphical elements.
         */
        get xAxisLabelsDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as X axis labels of rendered graphical elements.
         */
        set xAxisLabelsDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Y axis labels of rendered graphical elements.
         */
        get yAxisLabelsDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Y axis labels of rendered graphical elements.
         */
        set yAxisLabelsDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Z axis labels of rendered graphical elements.
         */
        get zAxisLabelsDataFields(): MindFusion.Charting.Collections.ObservableCollection<string>;
        /**
         * Gets or sets the names of fields in the data source whose values
         * are shown as Z axis labels of rendered graphical elements.
         */
        set zAxisLabelsDataFields(value: MindFusion.Charting.Collections.ObservableCollection<string>);
        fromJson(json: string): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A base class for charts that display X and Y axes.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets the list of series whose data is drawn in this chart.
    * @property {GridType} gridType Gets or sets the type of grid to draw in this chart.
    * @property {Boolean} pinGrid Gets or sets a value indicating whether grid stripes should be pinned in place or scroll together with the plot when users pan it.
    * @property {MindFusion.Charting.Axis} xAxis Gets or sets an Axis object representing horizontal data range.
    * @property {MindFusion.Charting.Axis} yAxis Gets or sets an Axis object representing vertical data range.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} annotations Gets or sets the list of series whose labels are drawn as annotations.
    * @property {Boolean} allowPan Gets or sets a value indicating whether users are allowed to pan the chart's plot.
    * @property {Boolean} showScatter Gets or sets a value indicating whether the chart should render scatter shapes.
    * @property {Boolean} showXCoordinates Gets or sets a value indicating whether to show X axis coordinates.
    * @property {Boolean} showYCoordinates Gets or sets a value indicating whether to show Y axis coordinates.
    * @property {Boolean} showXTicks Gets or sets a value indicating whether to show X axis ticks.
    * @property {Boolean} showYTicks Gets or sets a value indicating whether to show Y axis ticks.
    * @property {Number} xAxisTickLength Gets or sets the length of X axis ticks.
    * @property {Number} yAxisTickLength Gets or sets the length of Y axis ticks.
    * @property {Number} xAxisLabelRotationAngle Gets or sets the rotation angle of the X axis labels.
    * @property {Number} yAxisLabelRotationAngle Gets or sets the rotation angle of the Y axis labels.
    * @property {MindFusion.Charting.Drawing.StringAlignment} yLabelAlignment Gets the horizontal alignment of Y-axis labels.
    * @property {Boolean} showXRangeSelector Gets or sets a value indicating whether to show a RangeSelector for the X axis, to let users scroll or resize the currently visible horizontal data window.
    * @property {Boolean} showYRangeSelector Gets or sets a value indicating whether to show a RangeSelector for the Y axis, to let users scroll or resize the currently visible vertical data window.
    * @property {Number} xScrollRangeMin Gets or sets the smallest value allowed to scroll to using the X axis' RangeSelector.
    * @property {Number} yScrollRangeMin Gets or sets the smallest value allowed to scroll to using the Y axis' RangeSelector.
    * @property {Number} xScrollRangeMax Gets or sets the largest value allowed to scroll to using the X axis' RangeSelector.
    * @property {Number} yScrollRangeMax Gets or sets the largest value allowed to scroll to using the Y axis' RangeSelector.
    */
    abstract class BiaxialChart extends Chart {
        /**
         * Initializes a new instance of the BiaxialChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {Renderer2D} [seriesRenderer] A SeriesRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: MindFusion.Charting.Renderer2D);
        /**
         * Dashboard.CreateRenderContext override. Creates a RenderContext instance.
         * @param {MindFusion.Charting.Drawing.Graphics} graphics An Graphics surface where dashboard elements should be rendered.
         * @param {MindFusion.Drawing.Rect} clipRect The current clip rectangle.
         * @returns {MindFusion.Charting.RenderContext} A RenderContext instance.
         */
        createRenderContext(graphics: MindFusion.Charting.Drawing.Graphics, clipRect: MindFusion.Drawing.Rect): MindFusion.Charting.RenderContext2D;
        onUnbind(): void;
        onBind(): void;
        /**
         * Chart.zoomOut override. Zooms out of current data range.
         */
        zoomOut(): void;
        /**
         * Chart.resetZoom override. Resets zoom level to original data range.
         */
        resetZoom(): void;
        /**
         * Gets or sets the type of grid to draw in this chart.
         */
        get gridType(): MindFusion.Charting.GridType;
        /**
         * Gets or sets the type of grid to draw in this chart.
         */
        set gridType(value: MindFusion.Charting.GridType);
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        get pinGrid(): boolean;
        /**
         * Gets or sets a value indicating whether grid stripes should be pinned
         * in place or scroll together with the plot when users pan it.
         */
        set pinGrid(value: boolean);
        /**
         * Gets or sets an Axis object representing horizontal data range.
         */
        get xAxis(): MindFusion.Charting.Axis;
        /**
         * Gets or sets an Axis object representing horizontal data range.
         */
        set xAxis(value: MindFusion.Charting.Axis);
        /**
         * Gets or sets an Axis object representing vertical data range.
         */
        get yAxis(): MindFusion.Charting.Axis;
        /**
         * Gets or sets an Axis object representing vertical data range.
         */
        set yAxis(value: MindFusion.Charting.Axis);
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets the list of series whose labels are drawn as annotations.
         */
        get annotations(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets the list of series whose labels are drawn as annotations.
         */
        set annotations(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a value indicating whether the chart should render
         shapes.
         */
        get showScatter(): boolean;
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        set showScatter(value: boolean);
        /**
         * Gets or sets a value indicating whether users are allowed to pan the chart's plot.
         */
        get allowPan(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to pan the chart's plot.
         */
        set allowPan(value: boolean);
        /**
         * Gets or sets a value indicating whether to show X axis coordinates.
         */
        get showXCoordinates(): boolean;
        /**
         * Gets or sets a value indicating whether to show X axis coordinates.
         */
        set showXCoordinates(value: boolean);
        /**
         * Gets or sets a value indicating whether to show Y axis coordinates.
         */
        get showYCoordinates(): boolean;
        /**
         * Gets or sets a value indicating whether to show Y axis coordinates.
         */
        set showYCoordinates(value: boolean);
        /**
         * Gets or sets a value indicating whether to show X axis ticks.
         */
        get showXTicks(): boolean;
        /**
         * Gets or sets a value indicating whether to show X axis ticks.
         */
        set showXTicks(value: boolean);
        /**
         * Gets or sets a value indicating whether to show Y axis ticks.
         */
        get showYTicks(): boolean;
        /**
         * Gets or sets a value indicating whether to show Y axis ticks.
         */
        set showYTicks(value: boolean);
        /**
        * Gets the length of X axis ticks.
        */
        get xAxisTickLength(): number;
        /**
        * Sets the length of X axis ticks.
        */
        set xAxisTickLength(value: number);
        /**
        * Gets the length of Y axis ticks.
        */
        get yAxisTickLength(): number;
        /**
        * Sets the length of Y axis ticks.
        */
        set yAxisTickLength(value: number);
        /**
         * Gets the rotation angle of the X axis labels.
         */
        get xAxisLabelRotationAngle(): number;
        /**
         * Sets the rotation angle of the X axis labels.
         */
        set xAxisLabelRotationAngle(value: number);
        /**
         * Gets the rotation angle of the Y axis labels.
         */
        get yAxisLabelRotationAngle(): number;
        /**
         * Sets the rotation angle of the Y axis labels.
         */
        set yAxisLabelRotationAngle(value: number);
        /**
        * Gets the horizontal alignment of Y-axis labels.
        */
        get yLabelAlignment(): MindFusion.Charting.Drawing.StringAlignment;
        /**
        * Sets the horizontal alignment of Y-axis labels.
        */
        set yLabelAlignment(value: MindFusion.Charting.Drawing.StringAlignment);
        /**
         * Gets a value indicating whether to show a RangeSelector for the X axis,
         * to let users scroll or resize the currently visible horizontal data window.
         */
        get showXRangeSelector(): boolean;
        /**
         * Sets a value indicating whether to show a RangeSelector for the X axis,
         * to let users scroll or resize the currently visible horizontal data window.
         */
        set showXRangeSelector(value: boolean);
        /**
         * Gets the smallest value allowed to scroll to using the X axis' RangeSelector.
         */
        get xScrollRangeMin(): number;
        /**
         * Sets the smallest value allowed to scroll to using the X axis' RangeSelector.
         */
        set xScrollRangeMin(value: number);
        /**
         * Gets the largest value allowed to scroll to using the X axis' RangeSelector.
         */
        get xScrollRangeMax(): number;
        /**
         * Sets the largest value allowed to scroll to using the X axis' RangeSelector.
         */
        set xScrollRangeMax(value: number);
        /**
         * Gets a value indicating whether to show a RangeSelector for the Y axis,
         * to let users scroll or resize the currently visible vertical data window.
         */
        get showYRangeSelector(): boolean;
        /**
         * Sets a value indicating whether to show a RangeSelector for the Y axis,
         * to let users scroll or resize the currently visible vertical data window.
         */
        set showYRangeSelector(value: boolean);
        /**
         * Gets the smallest value allowed to scroll to using the Y axis' RangeSelector.
         */
        get yScrollRangeMin(): number;
        /**
         * Sets the smallest value allowed to scroll to using the Y axis' RangeSelector.
         */
        set yScrollRangeMin(value: number);
        /**
         * Gets the largest value allowed to scroll to using the Y axis' RangeSelector.
         */
        get yScrollRangeMax(): number;
        /**
         * Sets the largest value allowed to scroll to using the Y axis' RangeSelector.
         */
        set yScrollRangeMax(value: number);
        fromJson(json: string): any;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw area charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {LineType} lineType Gets or sets what type of line segments to draw between data points.
    * @property {Number} areaOpacity Gets or sets the opacity of area polygons.
    */
    class AreaChart extends BiaxialChart {
        /**
         * Initializes a new instance of the AreaChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {LineType} [lineType] A member of the LineType enumeration.
         * @param {AreaRenderer} [seriesRenderer] An AreaRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, lineType?: LineType, seriesRenderer?: MindFusion.Charting.AreaRenderer);
        static createRenderer(series: MindFusion.Charting.Collections.ObservableCollection<Series>, lineType: MindFusion.Charting.LineType): MindFusion.Charting.Renderer2D;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        get lineType(): MindFusion.Charting.LineType;
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        set lineType(value: MindFusion.Charting.LineType);
        /**
         * Gets or sets the opacity of area polygons.
         */
        get areaOpacity(): number;
        /**
         * Gets or sets the opacity of area polygons.
         */
        set areaOpacity(value: number);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw bar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {BarLayout} barLayout Gets or sets how to arrange bars when rendering multiple series.
    * @property {Boolean} horizontalBars Gets or sets a value identifying whether bars should be horizontal.
    * @property {Boolean} stackOuterLabels Gets whether outer labels are displayed stacked on top of stacked bars, instead of showing them on the bar sides.
    * @property {Number} outerLabelRotation Gets the rotation angle of outer labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.
    * @property {Number} innerLabelRotation Gets the rotation angle of inner labels. If not specified, labels are rotated at predefiend angles depending on bars' orientation and layout.
    * @property {Number} barSpacingRatio Gets or sets the ratio of empty space between bars to space occupied by bars.
    */
    class BarChart extends BiaxialChart {
        /**
        * Initializes a new instance of the BarChart class.
        * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
        * @param {BarLayout} [barLayout] A member of the BarLayout enumeration.
        * @param {Renderer2D} [seriesRenderer] A Renderer2D used to draw chart's data series.
        */
        constructor(element: HTMLCanvasElement, barLayout?: BarLayout, seriesRenderer?: MindFusion.Charting.Renderer2D);
        static createRenderer(series: MindFusion.Charting.Collections.ObservableCollection<Series>, layout: MindFusion.Charting.BarLayout, horizontalBars: boolean): MindFusion.Charting.Renderer2D;
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the Plot2D class.
         */
        createPlot(): MindFusion.Charting.Plot;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        get barLayout(): MindFusion.Charting.BarLayout;
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        set barLayout(value: MindFusion.Charting.BarLayout);
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        get horizontalBars(): boolean;
        /**
         * Gets or sets a value identifying whether bars should be horizontal.
         */
        set horizontalBars(value: boolean);
        /**
        * Gets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        get stackOuterLabels(): boolean;
        /**
        * Sets whether outer labels are displayed stacked on top of stacked bars,
        * instead of showing them on the bar sides.
        */
        set stackOuterLabels(value: boolean);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get outerLabelRotation(): number;
        /**
        * Sets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set outerLabelRotation(value: number);
        /**
        * Gets the rotation angle of outer labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        get innerLabelRotation(): number;
        /**
        * Sets the rotation angle of inner labels. If not specified, labels
        * are rotated at predefiend angles depending on bars' orientation and layout.
        */
        set innerLabelRotation(value: number);
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        get barSpacingRatio(): number;
        /**
         * Gets or sets the ratio of empty space between bars to space occupied by bars.
         */
        set barSpacingRatio(value: number);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw 3D bar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {BarLayout} barLayout Gets or sets how to arrange bars when rendering multiple series.
    * @property {BarModel3D} barModel Gets or sets how to visualize the bars when rendering multiple series.
    */
    class BarChart3D extends BiaxialChart {
        /**
         * Initializes a new instance of the BarChart3D class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {BarLayout} [barLayout] A member of the BarLayout enumeration.
         * @param {BarModel3D} [barModel] A member of the BarModel3D enumeration.
         * @param {Renderer2D} [seriesRenderer] A Renderer2D used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, barLayout?: BarLayout, barModel?: BarModel3D, seriesRenderer?: Renderer2D);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the Plot3D class.
         */
        createPlot(): Plot;
        static createRenderer(series: MindFusion.Charting.Collections.ObservableCollection<Series>, layout: BarLayout, barModel: BarModel3D): Renderer2D;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        get barLayout(): BarLayout;
        /**
         * Gets or sets how to arrange bars when rendering multiple series.
         */
        set barLayout(value: BarLayout);
        /**
     * Gets or sets the model to be drawn
     */
        get barModel(): BarModel3D;
        set barModel(value: BarModel3D);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw bubble charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {BubbleLabelAlignment} labelAlignment Gets or sets the alignment of labels relative to their associated bubbles.
    */
    class BubbleChart extends BiaxialChart {
        /**
         * Initializes a new instance of the BubbleChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {BubbleRenderer} [seriesRenderer] A LineRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: BubbleRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
        * Gets the alignment of labels relative to their associated bubbles.
        */
        get labelAlignment(): MindFusion.Charting.BubbleLabelAlignment;
        /**
        * Sets the alignment of labels relative to their associated bubbles.
        */
        set labelAlignment(value: MindFusion.Charting.BubbleLabelAlignment);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw candlestick charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {Number} candlestickWidth Gets or sets the width of the candlesticks.
    */
    class CandlestickChart extends BiaxialChart {
        /**
         * Initializes a new instance of the CandlestickChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {CandlestickRenderer} [seriesRenderer] A CandlestickRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: CandlestickRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets the width of the candlesticks.
         */
        get candlestickWidth(): number;
        /**
         * Gets or sets the width of the candlesticks.
         */
        set candlestickWidth(value: number);
        fromJson(json: string): any;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw funnel charts.
    * @property {Series} series Gets or sets the series whose data is drawn in this chart.
    * @property {Number} dimension Gets or sets the dimension index that should be used to read data from the Series.
    * @property {Number} segmentSpacing Gets or sets the spacing between segments.
    * @property {Number} stemWidth Gets or sets the width of the funnel stem.
    */
    class FunnelChart extends Chart {
        /**
         * Initializes a new instance of the FunnelChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {FunnelRenderer} [seriesRenderer] A FunnelRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: FunnelRenderer);
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        get series(): Series;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        set series(value: Series);
        /**
     * Gets or sets the dimension index that should be used to read data from the Series.
     */
        get dimension(): number;
        /**
         * Gets or sets the dimension index that should be used to read data from the Series.
         */
        set dimension(value: number);
        /**
         * Gets or sets the spacing between segments.
         */
        get segmentSpacing(): number;
        /**
         * Gets or sets the spacing between segments.
         */
        set segmentSpacing(value: number);
        /**
         * Gets or sets the width of the funnel stem.
         */
        get stemWidth(): number;
        /**
         * Gets or sets the width of the funnel stem.
         */
        set stemWidth(value: number);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
     * @class Provides shortcut methods for building fragments of dashboard's user interface.
     */
    class LayoutBuilder {
        /**
         * Initializes a new instance of the LayoutBuilder class.
         * @param {Dashboard} board A Dashboard instance.
         */
        constructor(board: Dashboard);
        /**
         * Creates a two-row stack panel whose second row is a horizontal stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} row1 The component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd1By2RowLayout(row1: MindFusion.Charting.Components.Component, row2col1: MindFusion.Charting.Components.Component, row2col2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-row stack panel whose first row is a horizontal stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2 The component on first row.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd2By1RowLayout(row1col1: MindFusion.Charting.Components.Component, row1col2: MindFusion.Charting.Components.Component, row2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} col1row1 The first component in first column.
         * @param {Component} col1row2 The second component in first column.
         * @param {Component} col2 The component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd2By1ColumnLayout(col1row1: MindFusion.Charting.Components.Component, col1row2: MindFusion.Charting.Components.Component, col2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} col1 The component in first column.
         * @param {Component} col2row1 The first component in second column.
         * @param {Component} col2row2 The second component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd1By2ColumnLayout(col1: MindFusion.Charting.Components.Component, col2row1: MindFusion.Charting.Components.Component, col2row2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates horizontal stack panels for components on same row
         * and adds them to a vertical stack panel.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAdd2By2Layout(row1col1: MindFusion.Charting.Components.Component, row1col2: MindFusion.Charting.Components.Component, row2col1: MindFusion.Charting.Components.Component, row2col2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates horizontal stack panels for components on same row
         * and adds them to a vertical stack panel.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        create2By2Layout(row1col1: MindFusion.Charting.Components.Component, row1col2: MindFusion.Charting.Components.Component, row2col1: MindFusion.Charting.Components.Component, row2col2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-row stack panel whose second row is a horizontal stack of two components.
         * @param {Component} row1 The component on first row.
         * @param {Component} row2col1 The first component on second row.
         * @param {Component} row2col2 The second component on second row.
         * @returns {StackPanel} A StackPanel instance.
         */
        create1By2RowLayout(row1: MindFusion.Charting.Components.Component, row2col1: MindFusion.Charting.Components.Component, row2col2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-row stack panel whose first row is a horizontal stack of two components.
         * @param {Component} row1col1 The first component on first row.
         * @param {Component} row1col2 The second component on first row.
         * @param {Component} row2 The component on first row.
         * @returns {StackPanel} A StackPanel instance.
         */
        create2By1RowLayout(row1col1: MindFusion.Charting.Components.Component, row1col2: MindFusion.Charting.Components.Component, row2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * @param {Component} col1row1 The first component in first column.
         * @param {Component} col1row2 The second component in first column.
         * @param {Component} col2 The component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        create2By1ColumnLayout(col1row1: MindFusion.Charting.Components.Component, col1row2: MindFusion.Charting.Components.Component, col2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a two-column stack panel whose first column is a vertical stack of two components.
         * @param {Component} col1 The component in first column.
         * @param {Component} col2row1 The first component in second column.
         * @param {Component} col2row2 The second component in second column.
         * @returns {StackPanel} A StackPanel instance.
         */
        create1By2ColumnLayout(col1: MindFusion.Charting.Components.Component, col2row1: MindFusion.Charting.Components.Component, col2row2: MindFusion.Charting.Components.Component): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel for each array of components and
         * adds it to a parent StackPanel with opposite orientation.
         * @param {Boolean} horizontal The orientation of the parent panel.
         * @param {Component[]} c1 The first stack of components.
         * @param {Component[]} c2 The second stack of components.
         * @param {Component[]} c3 The third stack of components.
         * @returns {StackPanel} A StackPanel instance.
         */
        createLayout(horizontal: boolean, c1: MindFusion.Charting.Components.Component[], c2: MindFusion.Charting.Components.Component[], c3: MindFusion.Charting.Components.Component[]): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plot.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plot.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotAndAxes(plot: MindFusion.Charting.Plot2D, top: MindFusion.Charting.XAxisRenderer[], left: MindFusion.Charting.YAxisRenderer[], bottom: MindFusion.Charting.XAxisRenderer[], right: MindFusion.Charting.YAxisRenderer[]): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithTopAndLeftAxes(plot: MindFusion.Charting.Plot2D, top: MindFusion.Charting.XAxisRenderer, left: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithTopAndRightAxes(plot: MindFusion.Charting.Plot2D, top: MindFusion.Charting.XAxisRenderer, right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithBottomAndRightAxes(plot: MindFusion.Charting.Plot2D, bottom: MindFusion.Charting.XAxisRenderer, right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createAndAddPlotWithBottomAndLeftAxes(plot: MindFusion.Charting.Plot2D, bottom: MindFusion.Charting.XAxisRenderer, left: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plot.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plot.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotAndAxes(plot: MindFusion.Charting.Plot2D, top: MindFusion.Charting.XAxisRenderer[], left: MindFusion.Charting.YAxisRenderer[], bottom: MindFusion.Charting.XAxisRenderer[], right: MindFusion.Charting.YAxisRenderer[]): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithTopAndLeftAxes(plot: MindFusion.Charting.Plot2D, top: MindFusion.Charting.XAxisRenderer, left: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithTopAndRightAxes(plot: MindFusion.Charting.Plot2D, top: MindFusion.Charting.XAxisRenderer, right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithBottomAndLeftAxes(plot: MindFusion.Charting.Plot2D, bottom: MindFusion.Charting.XAxisRenderer, left: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a GridPanel containing the specified plot and axis renderers.
         * @param {Plot2D} plot A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plot.
         * @returns {GridPanel} A GridPanel instance.
         */
        createPlotWithBottomAndRightAxes(plot: MindFusion.Charting.Plot2D, bottom: MindFusion.Charting.XAxisRenderer, right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.GridPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: MindFusion.Charting.XAxisRenderer[], plots: MindFusion.Charting.Plot2D[], bottom: MindFusion.Charting.XAxisRenderer[]): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: MindFusion.Charting.XAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: MindFusion.Charting.XAxisRenderer, plots: MindFusion.Charting.Plot2D[], bottom: MindFusion.Charting.XAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at top side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddColumnLayout(top: MindFusion.Charting.XAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D, plot3: MindFusion.Charting.Plot2D, bottom: MindFusion.Charting.XAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {XAxisRenderer[]} top An array of XAxisRenderer components that should be placed at top side of the plot.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer[]} bottom An array of XAxisRenderer components that should be placed at bottom side of the plot.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: MindFusion.Charting.XAxisRenderer[], plots: MindFusion.Charting.Plot2D[], bottom: MindFusion.Charting.XAxisRenderer[]): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: MindFusion.Charting.XAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at top side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: MindFusion.Charting.XAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D, plot3: MindFusion.Charting.Plot2D, bottom: MindFusion.Charting.XAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {XAxisRenderer} top An XAxisRenderer that should be placed at top side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {XAxisRenderer} bottom An XAxisRenderer that should be placed at bottom side of the plot.
         * @returns {StackPanel} A StackPanel instance.
         */
        createColumnLayout(top: MindFusion.Charting.XAxisRenderer, plots: MindFusion.Charting.Plot2D[], bottom: MindFusion.Charting.XAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddRowLayout(left: MindFusion.Charting.YAxisRenderer[], plots: MindFusion.Charting.Plot2D[], right: MindFusion.Charting.YAxisRenderer[]): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddRowLayout(left: MindFusion.Charting.YAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createAndAddRowLayout(left: MindFusion.Charting.YAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D, plot3: MindFusion.Charting.Plot2D, right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * The panel is automatically added to the dashboard's LayoutPanel.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns A StackPanel instance.
         */
        createAndAddRowLayout(left: MindFusion.Charting.YAxisRenderer, plots: MindFusion.Charting.Plot2D[], right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {YAxisRenderer[]} left An array of YAxisRenderer components that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer[]} right An array of YAxisRenderer components that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: MindFusion.Charting.YAxisRenderer[], plots: MindFusion.Charting.Plot2D[], right: MindFusion.Charting.YAxisRenderer[]): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderer.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: MindFusion.Charting.YAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D} plot1 A Plot2D instance.
         * @param {Plot2D} plot2 A Plot2D instance.
         * @param {Plot2D} plot3 A Plot2D instance.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: MindFusion.Charting.YAxisRenderer, plot1: MindFusion.Charting.Plot2D, plot2: MindFusion.Charting.Plot2D, plot3: MindFusion.Charting.Plot2D, right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.StackPanel;
        /**
         * Creates a StackPanel containing the specified plots and axis renderers.
         * @param {YAxisRenderer} left A YAxisRenderer that should be placed at left side of the plots.
         * @param {Plot2D[]} plots An array of Plot2D instances.
         * @param {YAxisRenderer} right A YAxisRenderer that should be placed at right side of the plots.
         * @returns {StackPanel} A StackPanel instance.
         */
        createRowLayout(left: MindFusion.Charting.YAxisRenderer, plots: MindFusion.Charting.Plot2D[], right: MindFusion.Charting.YAxisRenderer): MindFusion.Charting.Components.StackPanel;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw line charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {LineType} lineType Gets or sets what type of line segments to draw between data points.
    */
    class LineChart extends BiaxialChart {
        /**
         * Initializes a new instance of the LineChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {LineRenderer} [seriesRenderer] A LineRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: LineRenderer);
        static createRenderer(series: MindFusion.Charting.Collections.ObservableCollection<Series>, lineType: MindFusion.Charting.LineType): MindFusion.Charting.Renderer2D;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        get lineType(): MindFusion.Charting.LineType;
        /**
         * Gets or sets what type of line segments to draw between data points.
         */
        set lineType(value: MindFusion.Charting.LineType);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw pie charts.
    * @property {Series} series Gets or sets the series whose data is drawn in this chart.
    * @property {Number} startAngle Gets or sets the angle where first data item of series should be drawn.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this chart.
    * @property {Number} chartPadding Gets or set padding space between the plot's border and series graphics.
    * @property {List<Number>} detachedSlices Gets or sets indices of detached slices.
    * @property {Boolean} doughnut Gets or sets a value indicating whether the pie should be rendered as a doughnut.
    */
    class PieChart extends Chart {
        /**
         * Initializes a new instance of the PieChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {PieRenderer} [seriesRenderer] A PieRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: PieRenderer);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the PolarPlot class.
         */
        createPlot(): MindFusion.Charting.Plot;
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Series;
        /**
         * Gets or sets the series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Series);
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        get startAngle(): number;
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        set startAngle(value: number);
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        get allowRotate(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        set allowRotate(value: boolean);
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        get chartPadding(): number;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        set chartPadding(value: number);
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        get doughnut(): boolean;
        /**
         * Gets or sets a value indicating whether the pie should be rendered as a doughnut.
         */
        set doughnut(value: boolean);
        /**
         * Gets or sets indices of detached slices.
         */
        get detachedSlices(): MindFusion.Charting.Collections.List<number>;
        /**
         * Gets or sets indices of detached slices.
         */
        set detachedSlices(value: MindFusion.Charting.Collections.List<number>);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw radar charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series Gets or sets the list of series whose data is drawn in this chart.
    * @property {Boolean} showScatter Gets or sets a value indicating whether the chart should render scatter shapes.
    * @property {RadarType} radarType Gets or sets the type of radar graphics drawn in this chart.
    * @property {RadarGridType} gridType Gets or sets the type of grid drawn in this chart.
    * @property {MindFusion.Charting.Axis} defaultAxis Gets a default Axis object used when data item index does not have corresponding element in the Axes collection.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Axis>} axes Gets the list of Axis objects representing ranges of variables represented in the radar chart.
    * @property {Number} gridDivisions Gets or sets the number of grid divisions.
    * @property {Boolean} uniformScale Gets or sets a value indicating whether all axes should display same data range.
    * @property {Boolean} showCoordinates Gets or sets a value indicating whether the chart should show axis coordinates.
    * @property {MindFusion.Charting.Drawing.Color} gridColor1 Gets or sets the main color of the grid.
    * @property {MindFusion.Charting.Drawing.Color} gridColor2 Gets or sets the alternating color of the grid.
    * @property {Number} areaOpacity Gets or sets the opacity of radar polygons.
    * @property {Boolean} alignToAxis Gets or sets whether pie-radar sectors should be aligned to axes in the radar grid or centered around them.
    * @property {Boolean} allowRotate Gets or sets a value indicating whether users are allowed to rotate this chart.
    * @property {Number} startAngle Gets or sets the angle where first data item of series should be drawn.
    * @property {Number} chartPadding Gets or set padding space between the plot's border and series graphics.
    */
    class RadarChart extends Chart {
        /**
         * Initializes a new instance of the RadarChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {RadarRenderer} [seriesRenderer] A RadarRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: RadarRenderer);
        /**
         * Chart.CreatePlot override. Creates the Plot type corresponding to this chart.
         * @returns {Plot} An instance of the RadarPlot class.
         */
        createPlot(): Plot;
        onUnbind(): void;
        onBind(): void;
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        get showScatter(): boolean;
        /**
         * Gets or sets a value indicating whether the chart should render scatter shapes.
         */
        set showScatter(value: boolean);
        /**
         * Gets or sets the type of radar graphics drawn in this chart.
         */
        get radarType(): RadarType;
        /**
         * Gets or sets the type of radar graphics drawn in this chart.
         */
        set radarType(value: RadarType);
        /**
         * Gets or sets the type of grid drawn in this chart.
         */
        get gridType(): RadarGridType;
        /**
         * Gets or sets the type of grid drawn in this chart.
         */
        set gridType(value: RadarGridType);
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        get defaultAxis(): Axis;
        /**
         * Gets a default Axis object used when data item index does not
         * have corresponding element in the Axes collection.
         */
        set defaultAxis(value: Axis);
        /**
         * Gets the list of Axis objects representing ranges
         * of variables represented in the radar chart.
         */
        get axes(): MindFusion.Charting.Collections.ObservableCollection<Axis>;
        /**
         * Gets or sets the number of grid divisions.
         */
        get gridDivisions(): number;
        /**
         * Gets or sets the number of grid divisions.
         */
        set gridDivisions(value: number);
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        get uniformScale(): boolean;
        /**
         * Gets or sets a value indicating whether all axes should display same data range.
         */
        set uniformScale(value: boolean);
        /**
         * Gets or sets a value indicating whether the chart should show axis coordinates.
         */
        get showCoordinates(): boolean;
        /**
         * Gets or sets a value indicating whether the chart should show axis coordinates.
         */
        set showCoordinates(value: boolean);
        /**
         * Gets or sets the main color of the grid.
         */
        get gridColor1(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the main color of the grid.
         */
        set gridColor1(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the alternating color of the grid.
         */
        get gridColor2(): MindFusion.Charting.Drawing.Color;
        /**
         * Gets or sets the alternating color of the grid.
         */
        set gridColor2(value: MindFusion.Charting.Drawing.Color);
        /**
         * Gets or sets the opacity of radar polygons.
         */
        get areaOpacity(): number;
        /**
         * Gets or sets the opacity of radar polygons.
         */
        set areaOpacity(value: number);
        /**
         * Gets or sets whether pie-radar sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        get alignToAxis(): boolean;
        /**
         * Gets or sets whether pie-radar sectors should be aligned to
         * axes in the radar grid or centered around them.
         */
        set alignToAxis(value: boolean);
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        get allowRotate(): boolean;
        /**
         * Gets or sets a value indicating whether users are allowed to rotate this chart.
         */
        set allowRotate(value: boolean);
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        get startAngle(): number;
        /**
         * Gets or sets the angle where first data item of series should be drawn.
         */
        set startAngle(value: number);
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        get chartPadding(): number;
        /**
         * Gets or set padding space between the plot's border and series graphics.
         */
        set chartPadding(value: number);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Controls
*/
declare namespace MindFusion.Charting.Controls {
    /**
    * @class A control used to draw scatter charts.
    * @property {MindFusion.Charting.Collections.ObservableCollection<Series>} series BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
    * @property {ScatterType} shape Gets or sets the type of scatter shapes.
    * @property {Number} shapeSize Gets or sets the size of scatter shapes.
    */
    class ScatterChart extends BiaxialChart {
        /**
         * Initializes a new instance of the ScatterChart class.
         * @param {HTMLCanvasElement} element The canvas DOM element to associate this chart with.
         * @param {ScatterRenderer} [seriesRenderer] A ScatterRenderer used to draw chart's data series.
         */
        constructor(element: HTMLCanvasElement, seriesRenderer?: ScatterRenderer);
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        get series(): MindFusion.Charting.Collections.ObservableCollection<Series>;
        /**
         * BiaxialChart.Series override. Gets or sets the list of series whose data is drawn in this chart.
         */
        set series(value: MindFusion.Charting.Collections.ObservableCollection<Series>);
        /**
         * Gets or sets the type of scatter shapes.
         */
        get shape(): MindFusion.Charting.ScatterType;
        /**
         * Gets or sets the type of scatter shapes.
         */
        set shape(value: MindFusion.Charting.ScatterType);
        /**
         * Gets or sets the size of scatter shapes.
         */
        get shapeSize(): number;
        /**
         * Gets or sets the size of scatter shapes.
         */
        set shapeSize(value: number);
        fromJson(json: string): void;
        toJson(): string;
    }
}
/**
* @namespace MindFusion.Charting.Gauges
*/
declare namespace MindFusion.Charting.Gauges {
    /**
     * @class A Component that renders gauges in the dashboard.
     * @property {MindFusion.Charting.Drawing.Brush} background Gets or sets a Brush used to draw the background of this gauge.
     * @property {MindFusion.Charting.Drawing.Brush} stroke Gets or sets a Brush used to stroke this gauge.
     * @property {Number} strokeThickness Gets or sets the thickness of the Pen used to stroke this gauge.
     * @property {MindFusion.Charting.Drawing.Brush} scaleBackground Gets or sets a Brush used to draw the background of the gauge scales.
     * @property {MindFusion.Charting.Drawing.Brush} scaleStroke Gets or sets a Brush used to stroke the gauge scales.
     * @property {Number} scaleStrokeThickness Gets or sets the thickness of the Pen used to stroke the gauge scales.
     * @property {MindFusion.Charting.Drawing.Brush} pointerBackground Gets or sets a Brush used to draw the background of gauge pointers.
     * @property {MindFusion.Charting.Drawing.Brush} pointerStroke Gets or sets a Brush used to stroke gauge pointers.
     * @property {Number} pointerStrokeThickness Gets or sets the thickness of the Pen used to stroke the gauge pointers.
     * @property {MindFusion.Charting.Drawing.Brush} tickBackground Gets or sets a Brush used to draw the background of gauge ticks.
     * @property {MindFusion.Charting.Drawing.Brush} tickStroke Gets or sets a Brush used to stroke gauge ticks.
     * @property {Number} tickStrokeThickness Gets or sets the thickness of the Pen used to stroke the gauge ticks.
     * @property {String} fontName Gets or sets the name of font used to draw text in this gauge.
     * @property {MindFusion.Charting.Drawing.FontStyle} fontStyle Gets or sets the style of font used to draw text in this gauge.
     * @property {Number} fontSize Gets or sets the size of font used to draw text in this gauge.
     */
    abstract class GaugeRenderer extends MindFusion.Charting.Components.Component {
        /**
         * Initializes a new instance of the GaugeRenderer class.
         */
        constructor();
        /**
         * Gets the default pointer fill.
         */
        getDefaultPointerFill(pointer: any): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets the default pointer stroke.
         */
        getDefaultPointerStroke(pointer: any): MindFusion.Charting.Drawing.Pen;
        /**
         * Gets or sets a Brush used to draw the background of this gauge.
         */
        get background(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw the background of this gauge.
         */
        set background(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke this gauge.
         */
        get stroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke this gauge.
         */
        set stroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of the Pen used to stroke this gauge.
         */
        get strokeThickness(): number;
        /**
         * Gets or sets the thickness of the Pen used to stroke this gauge.
         */
        set strokeThickness(value: number);
        /**
         * Gets or sets a Brush used to draw the background of the gauge scales.
         */
        get scaleBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw the background of the gauge scales.
         */
        set scaleBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke the gauge scales.
         */
        get scaleStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke the gauge scales.
         */
        set scaleStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge scales.
         */
        get scaleStrokeThickness(): number;
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge scales.
         */
        set scaleStrokeThickness(value: number);
        /**
         * Gets or sets a Brush used to draw the background of gauge pointers.
         */
        get pointerBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw the background of gauge pointers.
         */
        set pointerBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        get pointerStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke gauge pointers.
         */
        set pointerStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge pointers.
         */
        get pointerStrokeThickness(): number;
        /**
         * Gets or sets the thickness of the Pen used to stroke the gauge pointers.
         */
        set pointerStrokeThickness(value: number);
        /**
         * Gets or sets a Brush used to draw the background of gauge ticks.
         */
        get tickBackground(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to draw the background of gauge ticks.
         */
        set tickBackground(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        get tickStroke(): MindFusion.Charting.Drawing.Brush;
        /**
         * Gets or sets a Brush used to stroke gauge ticks.
         */
        set tickStroke(value: MindFusion.Charting.Drawing.Brush);
        /**
         * Gets or sets the thickness of the Pen used to stroke gauge ticks.
         */
        get tickStrokeThickness(): number;
        /**
         * Gets or sets the thickness of the Pen used to stroke gauge ticks.
         */
        set tickStrokeThickness(value: number);
        /**
         * Gets or sets the name of font used to draw text in this gauge.
         */
        get fontName(): string;
        /**
         * Gets or sets the name of font used to draw text in this gauge.
         */
        set fontName(value: string);
        /**
         * Gets or sets the style of font used to draw text in this gauge.
         */
        get fontStyle(): MindFusion.Charting.Drawing.FontStyle;
        /**
         * Gets or sets the style of font used to draw text in this gauge.
         */
        set fontStyle(value: MindFusion.Charting.Drawing.FontStyle);
        /**
         * Gets or sets the size of font used to draw text in this gauge.
         */
        get fontSize(): number;
        /**
         * Gets or sets the size of font used to draw text in this gauge.
         */
        set fontSize(value: number);
        m_defaultLinearFill: MindFusion.Charting.Drawing.LinearGradientBrush;
        m_defaultPen: MindFusion.Charting.Drawing.Pen;
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Gauges
*/
declare namespace MindFusion.Charting.Gauges {
    /**
     * @class Controls user interaction with linear gauges.
     * @property {Component} component Implements ComponentController.Component. Gets the component modified by this controller.
     */
    class LinearGaugeController implements MindFusion.Charting.Components.ComponentController {
        /**
         * Initializes a new instance of the LinearGaugeController class.
         * @param {LinearGaugeRenderer} r A LinearGaugeRenderer instance controlled by this object.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        constructor(r: LinearGaugeRenderer, context: MindFusion.Charting.RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * For internal use.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): MindFusion.Charting.Components.CursorHint;
        /**
         * Implements ComponentController.Component. Gets the component modified by this controller.
         */
        get component(): MindFusion.Charting.Components.Component;
    }
}
/**
* @namespace MindFusion.Charting.Gauges
*/
declare namespace MindFusion.Charting.Gauges {
    /**
     * @class A Component that renders linear gauges in the dashboard.
     * @property {object} gauge Gets or sets the LinearGauge represented by this renderer.
     */
    class LinearGaugeRenderer extends GaugeRenderer {
        /**
         * Initializes a new instance of the LinearGaugeRenderer class.
         */
        constructor(element: HTMLCanvasElement);
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: MindFusion.Charting.RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: MindFusion.Charting.RenderContext): void;
        /**
         * Component.Draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: MindFusion.Charting.RenderContext): void;
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the LinearGaugeController class.
         */
        createController(context: MindFusion.Charting.RenderContext): MindFusion.Charting.Components.ComponentController;
        /**
         * Gets or sets the LinearGauge represented by this renderer.
         */
        get gauge(): MindFusion.Gauges.LinearGauge;
        /**
         * Gets or sets the LinearGauge represented by this renderer.
         */
        set gauge(value: MindFusion.Gauges.LinearGauge);
        fromJson(json: any): any;
        toJson(): any;
    }
}
/**
* @namespace MindFusion.Charting.Gauges
*/
declare namespace MindFusion.Charting.Gauges {
    /**
     * @class Controls user interaction with oval gauges.
     * @property {Component} component Implements ComponentController.Component. Gets the component modified by this controller.
     */
    class OvalGaugeController implements MindFusion.Charting.Components.ComponentController {
        /**
         * Initializes a new instance of the OvalGaugeController class.
         * @param {OvalGaugeRenderer} r An OvalGaugeRenderer instance controlled by this object.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        constructor(r: OvalGaugeRenderer, context: RenderContext);
        /**
         * Implements ComponentController.OnMouseDown. Called when the user presses a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseDown(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseMove. Called when the user moves the mouse.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseMove(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseUp. Called when the user releases a mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         */
        onMouseUp(x: number, y: number): void;
        /**
         * Implements ComponentController.OnMouseWheel. Called when the user scrolls with the middle mouse button.
         * @param {Number} x A number value specifying the horizontal position of mouse pointer.
         * @param {Number} y A number value specifying the vertical position of mouse pointer.
         * @param {Number} delta A number value specifying the amount and the direction for the mouse scroll.
         */
        onMouseWheel(x: number, y: number, delta: number): void;
        /**
         * Implements ComponentController.DrawInteraction. Draws a representation
         * of the current state of user interaction on specified IGraphics surface.
         * @param {IGraphics} graphics An IGraphics instance.
         */
        drawInteraction(graphics: MindFusion.Charting.Drawing.Graphics): void;
        /**
         * For internal use.
         * @returns {ComponentAnimation} An instance of a ComponentAnimation -derived class.
         */
        getRunningAnimation(): MindFusion.Charting.Components.ComponentAnimation;
        /**
         * For internal use.
         * @returns {CursorHint} A member of the CursorHint enumeration.
         */
        getCursorHint(x: number, y: number): MindFusion.Charting.Components.CursorHint;
        /**
         * Implements ComponentController.Component. Gets the component modified by this controller.
         */
        get component(): MindFusion.Charting.Components.Component;
    }
}
/**
* @namespace MindFusion.Charting.Gauges
*/
declare namespace MindFusion.Charting.Gauges {
    /**
     * @class A Component that renders oval gauges in the dashboard.
     * @property {object} gauge Gets or sets the OvalGauge represented by this renderer.
     */
    class OvalGaugeRenderer extends GaugeRenderer {
        /**
         * Initializes a new instance of the OvalGaugeRenderer class.
         */
        constructor(element: HTMLCanvasElement);
        /**
         * Component.Measure override. Measures the desired size of this component.
         * @param {Number} maxWidth The maximum width provided by parent component.
         * @param {Number} maxHeight The maximum height provided by parent component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        measure(maxWidth: number, maxHeight: number, context: MindFusion.Charting.RenderContext): void;
        /**
         * Component.Arrange override. Sets the location and size of this component relatively to its parent.
         * @param {Number} x A number value specifying horizontal position.
         * @param {Number} y A number value specifying vertical position.
         * @param {Number} w A number value specifying the component's width.
         * @param {Number} h A number value specifying the component's height.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        arrange(x: number, y: number, w: number, h: number, context: MindFusion.Charting.RenderContext): void;
        /**
         * Component.Draw override. Draws this component in specified RenderContext.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         */
        draw(context: MindFusion.Charting.RenderContext): void;
        /**
         * Component.CreateController override. Returns a ComponentController
         * used to interact with this component.
         * @param {MindFusion.Charting.RenderContext} context A RenderContext instance.
         * @returns {ComponentController} An instance of the OvalGaugeController class.
         */
        createController(context: MindFusion.Charting.RenderContext): MindFusion.Charting.Components.ComponentController;
        /**
         * Gets or sets the OvalGauge represented by this renderer.
         */
        get gauge(): MindFusion.Gauges.OvalGauge;
        /**
         * Gets or sets the OvalGauge represented by this renderer.
         */
        set gauge(value: MindFusion.Gauges.OvalGauge);
        fromJson(json: any): any;
        toJson(): any;
    }
}

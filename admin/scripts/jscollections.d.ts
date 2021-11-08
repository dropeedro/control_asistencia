/// <reference path="../jscommon.d.ts" />
/// <reference path="./jscommon.d.ts" />

// Type definitions for MindFusion.Common.Collections for JavaScript
// Project: https://www.mindfusion.eu/javascript-pack.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2018-2020, MindFusion LLC - Bulgaria.

declare module "mindfusion-common/modules/jscollections"
{
export = MindFusion.Common.Collections;
}

declare namespace MindFusion.Common.Collections
{
	/** Represents an array of arbitrary objects. */
	class IEnumerable
	{
		/** Initializes a new instance of the IEnumerable class.
		 * @param items The underlying array data structure of the collection.
		*/
		constructor(items?: Array<any>);
		/** Gets the collection as an array. */
		items(): Array<any>;
		/** Gets the collection as an array in reverse order. */
		reverse(): Array<any>;
		/** Gets the element at the given index.
		 * @param index The index.
		*/
		item(index: number): any;
		/** Gets the number of elements. */
		count(): number;
		/** Checks if the given element is present in the collection.
		 * @param item The object to check for.
		*/
		contains(item: any): boolean;
		/** Adds an object to the end of the collection.
		 * @param item The object to add.
		*/
		add(item: any): void;
		/** Adds a range of elements to the end of the collection.
		 * @param range The range to add.
		*/
		addRange(range: Array<any>): void;
		/** Removes an element from the collection.
		 * @param item The object to remove.
		*/
		remove(item: any): void;
		/** Removes a range of elements starting from the given index.
		 * @param index The starting index of the range.
		 * @param count The length of the range.
		*/
		removeRange(index: number, count: number): void;
		/** Removes  the element at the given index.
		 * @param index The index.
		*/
		removeAt(index: number): void;
		/** Clears the collection. */
		clear(): void;
		/** Creates a copy of the collection. */
		clone(): IEnumerable;
		/** Copies a range of elements from this collection to a destination collection.
		 * @param destination The destination collection.
		 * @param length The length of the range to copy.
		 * @param sourceIndex The starting index of the range to copy.
		 * @param destinationIndex The index at which the range should be copied.
		*/
		copyTo(destination: IEnumerable, length: number, sourceIndex?: number, destinationIndex?: number): void;
		/** Sorts the underlying array.
		 * @param compareFn The comparing function.
		*/
		sort(compareFn: Function): void;
		/** Gets the index of a given object in a collection.
		 * @param obj The object to look for.
		 * @param fromIndex The starting index to search from.
		*/
		indexOfItem(obj: any, fromIndex?: number): number;
		/** Adds an element to the collection at the specified index.
		 * @param index The index.
		 * @param item The item.
		*/
		insert(index: number, item: any): void;
		/** Returns a new Object array, containing the contents of the collection. */
		toArray(): Array<any>;
		/** Invokes a transform function on each item and returns the maximum value in a sequence of numbers.
		 * @param selector A transform function to invoke on each element.
		*/
		max(selector: Function): number;
		/** Invokes a transform function on each item and returns the minimum value in a sequence of numbers.
		 * @param selector A transform function to invoke on each element.
		*/
		min(selector: Function): number;
		/** Computes the sum of the sequence of number values that are obtained by invoking a transform function on each element.
		 * @param selector A transform function to invoke on each element.
		*/
		sum(selector: Function): number;
		/** Projects each element of a sequence into a new form.
		 * @param selector A transform function to invoke on each element.
		*/
		select(selector: Function): IEnumerable;
		/** Filters a sequence of values based on a predicate.
		 * @param selector A function to test each element for a condition.
		*/
		where(selector: Function): IEnumerable;
		/** Returns the first element that satisfies the provided testing function.
		 * @param selector A function to test each element for a condition.
		*/
		find(selector: Function): any;
		/** Executes a provided function once for each element.
		 * @param callback A function to execute for each element.
		 * @param context The invokation context.
		*/
		forEach(callback: Function, context?: any): void;
		/** Returns the first element in the collection. */
		first(): any;
		/** Returns the last element in the collection. */
		last(): any;
	}
	/** Represents an array of arbitrary objects. */
	class List extends IEnumerable
	{
		/** Initializes a new instance of the List class.
		 * @param items The underlying array data structure of the collection.
		*/
		constructor(items?: Array<any>);
	}
	/** Represents an collection of arbitrary objects. */
	class ObservableCollection extends List
	{
		/** Initializes a new instance of the ObservableCollection class.
		 * @param items The underlying array data structure of the collection.
		*/
		constructor(items?: Array<any>);
	}
	/** Represents a collection of keys and values. */
	class Dictionary
	{
		/** Initializes a new instance of the Dictionary class. */
		constructor();
		/** Associates the specified value with the specified key within the dictionary.
		 * @param key The key to associate the value with.
		 * @param value The value to associate.
		*/
		set(key: any, value: any): void;
		/** Gets the value associated with the specified key within the dictionary.
		 * @param key The key whose value to get.
		*/
		get(key: any): any;
		/** Determines whether the dictionary contains a specific key.
		 * @param key The key to locate in the dictionary.
		*/
		contains(key: any): boolean;
		/** Removes the element with the specified key from the dictionary.
		 * @param key The key of the element to remove.
		*/
		remove(key: any): any;
		/** Gets an array with all keys in the dictionary. */
		keys: Array<any>;
		/** Gets an array with all values in the dictionary. */
		values: Array<any>;
		/** Gets the number of key/value pairs contained in the dictionary. */
		count: number;
	}
}

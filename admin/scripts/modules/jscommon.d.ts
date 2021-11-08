/// <reference path="../jscommon.d.ts" />

// Type definitions for MindFusion.Common for JavaScript
// Project: https://www.mindfusion.eu/javascript-pack.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2018-2020, MindFusion LLC - Bulgaria.

declare module "mindfusion-common/modules/jscommon"
{
export = MindFusion.Common;
}

declare namespace MindFusion.Common
{
	/** Describes the action that caused a CollectionChanged event. */
	enum NotifyCollectionChangedAction
	{
		/** Represents adding to the collection. */
		Add = 1,
		/** Represents removing from the collection. */
		Remove = -1,
		/** Represents resetting the collection. */
		Reset = 0
	}
	/** Specifies a control state. */
	enum ControlState
	{
		/** The control is loaded and ready for interaction. */
		Loaded = 0,
		/** The control is unloaded. */
		Unloaded = 1
	}
	/** Specifies a unit of measurement. */
	enum UnitType
	{
		/** The measurement is in pixels. */
		Pixel = 1,
		/** The measurement is a percentage relative to the parent element. */
		Percent = 2
	}
	/** Represents a dispatcher for an event. */
	class EventDispatcher
	{
		/** Subcribes an event listener to this event.
		 * @param handler The object which receives a notification.
		*/
		addEventListener(handler: any): void;
		/** Removes an event listener from this event.
		 * @param handler The object to remove.
		*/
		removeEventListener(handler: any): void;
		/** Raises this event.
		 * @param sender The sender object.
		 * @param args The event argument.
		*/
		raiseEvent(sender: any, args: any): void;
	}
	/** The base type of classes that define arguments passed to event handler functions. */
	class EventArgs
	{
	}
	/** Provides a value to use with events that do not have event data. */
	class EmptyEventArgs extends EventArgs
	{
	}
	/** Provides a value to use with cancellable events. */
	class CancelEventArgs extends EventArgs
	{
		/** Gets or sets a value indicating whether to allow the current operation. */
		cancel: boolean;
	}
	/** Provides data for PropertyChanged events. */
	class PropertyChangedEventArgs extends EventArgs
	{
		/** Gets the name of the property that changed. */
		propertyName: string;
	}
	/** Provides data for PropertyValueChanged events. */
	class PropertyEventArgs extends EventArgs
	{
		/** Gets the name of the property that changed. */
		propertyName: string;
		/** Gets the old value of the property. */
		oldValue: any;
		/** Gets the new value of the property. */
		newValue: any;
	}
	/** Provides data for CollectionChanging events. */
	class NotifyCollectionChangingEventArgs extends CancelEventArgs
	{
		/** Gets the action that caused the event. */
		action: NotifyCollectionChangedAction;
		/** Get sthe list of old items involved in the change. */
		oldItems: Array<any>;
		/** Gets the list of new items involved in the change. */
		newItems: Array<any>;
	}
	/** Provides data for CollectionChanging events. */
	class NotifyCollectionChangedEventArgs extends EventArgs
	{
		/** Gets the action that caused the event. */
		action: NotifyCollectionChangedAction;
		/** Gets the list of old items involved in the change. */
		oldItems: Array<any>;
		/** Gets the list of new items involved in the change. */
		newItems: Array<any>;
	}
	/** Represents a length measurement. */
	class Unit
	{
		/** Initializes a new instance of the Unit class.
		 * @param value The value of the unit.
		 * @param type The type of the unit.
		*/
		constructor(value?: number, type?: UnitType);
		/** Returns a string representation of this Unit. */
		toString(): string;
		/** Gets a value representing whether this Unit instance has a set value. */
		isEmpty: boolean;
		/** Creates a Unit instance with the specified value and UnitType.Pixel.
		 * @param value The value of the unit.
		*/
		static pixel(value: number): Unit;
		/** Creates a Unit instance with the specified value and UnitType.Percent.
		 * @param value The value of the unit.
		*/
		static percentage(value: number): Unit;
		/** Creates a Unit instance from a string representation.
		 * @param value The string representation of the unit.
		*/
		static parse(value: string): Unit;
		/** Creates an empty Unit instance. */
		static empty(): Unit;
	}
	/** A base class for UI controls. */
	class Control
	{
		/** Initializes a new instance of the Control class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Dispose the control. */
		dispose(): void;
		/** Attach control event handlers. */
		attach(): void;
		/** Detach control event handlers. */
		detach(): void;
		/** Draws the control. */
		draw(): HTMLElement;
		/** Draws the control and prepares it for user interaction. */
		render(): void;
		/** Returns a reference to the control DOM element. */
		element: HTMLElement;
		/** Gets a value indicating whether this control is loaded and ready for interaction. */
		loaded: boolean;
		/** Gets or sets the visibility of this control. */
		visible: boolean;
		/** Gets or sets a value indicating whether user interactions are allowed for this control. */
		enabled: boolean;
		/** Gets the bounds of this control. */
		bounds: MindFusion.Drawing.Rect;
		/** Gets the bounding rect of this control. */
		rect: MindFusion.Drawing.Rect;
		/** Gets or sets the width of this control. */
		width: Unit;
		/** Gets or sets the height of this control. */
		height: Unit;
		/** Gets or sets the X-coordinate of the location of this control. */
		left: Unit;
		/** Gets or sets the Y-coordinate of the location of this control. */
		top: Unit;
		/** Gets or sets an object, holding custom user data. */
		data: any;
		/** Gets or sets the current theme of the control. */
		theme: string;
		/** Gets or sets the css class of the control. */
		cssClass: string;
		/** Gets or sets the URL of the control's license file. */
		licenseLocation: string;
		/** Sets the X-coordinate of the location of this control.
		 * @param value An object representing the X-coordinate of the control's location.
		*/
		setLeft(value: any): void;
		/** Sets the Y-coordinate of the location of this control.
		 * @param value An object representing the Y-coordinate of the control's location.
		*/
		setTop(value: any): void;
		/** Sets the width of this control.
		 * @param value An object representing the width of this control.
		*/
		setWidth(value: any): void;
		/** Sets the height of this control.
		 * @param value An object representing height width of this control.
		*/
		setHeight(value: any): void;
		/** Returns the control with the specified ID
		 * @param id The ID.
		*/
		static find(id: string): Control;
		/** Raised when the control is loaded. */
		controlLoad: EventDispatcher;
		/** Raised when the control is unloaded. */
		controlUnload: EventDispatcher;
		/** Raised when the control is focused. */
		focus: EventDispatcher;
	}
	/** Provides culture-specific information. */
	class Locale
	{
		/** Initializes a new instance of the Locale class.
		 * @param id The string identifier of the locale.
		*/
		constructor(id?: string);
		/** Gets the string identifier of the locale. */
		id: string;
		/** Gets the DateSettings object used to hold date-specific information. */
		dateSettings: DateSettings;
		/** Gets the DateFormats object used to hold date and time format strings. */
		dateFormats: DateFormats;
		/** Deserializes the locale from a JSON string.
		 * @param dateSettingsJson A string containing data for the date settings.
		*/
		fromJson(dateSettingsJson: string): void;
		/** Returns a default Locale object. */
		static default(): Locale;
	}
	/** Defines properties that allow customization of date-specific information. */
	class DateSettings
	{
		/** Initializes a new instance of the DateSettings class.
		 * @param localeId The string identifier of the locale.
		*/
		constructor(localeId?: string);
		/** Gets or sets the index of first day of the week. */
		firstDayOfWeek: number;
		/** Gets the DateFormats object used to hold date and time format strings. */
		dateFormats: DateFormats;
		/** Gets an object, containing the lists of month names. */
		months: any;
		/** Gets or sets the list of long month names. */
		longMonths: Array<string>;
		/** Gets or sets the list of short month names. */
		shortMonths: Array<string>;
		/** Gets or sets the list of narrow month names. */
		narrowMonths: Array<string>;
		/** Gets an object, containing the lists of day names. */
		days: any;
		/** Gets or sets the list of long day names. */
		longDays: Array<string>;
		/** Gets or sets the list of short day names. */
		shortDays: Array<string>;
		/** Gets or sets the list of narrow day names. */
		narrowDays: Array<string>;
		/** Gets an object, containing the time designators. */
		dayPeriods: any;
		/** Gets or sets the before noon time designator. */
		dayPeriodAM: string;
		/** Gets or sets the after noon time designator. */
		dayPeriodPM: string;
		/** Gets or sets the date separator character. */
		dateSeparator: string;
		/** Gets or sets the time separator character. */
		timeSeparator: string;
		/** Deserializes the settings from a JSON string.
		 * @param json A string containing data for the settings.
		*/
		fromJson(json: string): void;
	}
	/** Defines format string for dates and time. */
	class DateFormats
	{
		/** Initializes a new instance of the DateFormats class. */
		constructor();
		/** Gets or sets the short date format. */
		shortDate: string;
		/** Gets or sets the short time format. */
		shortTime: string;
		/** Gets or sets the short date-time format. */
		shortDateTime: string;
		/** Gets or sets the long date format. */
		longDate: string;
		/** Gets or sets the long time format. */
		longTime: string;
		/** Gets or sets the long date-time format. */
		longDatetime: string;
		/** Gets or sets the format to display a day of month. */
		dayMonth: string;
		/** Gets or sets the format to display a month of year. */
		yearMonth: string;
	}
}

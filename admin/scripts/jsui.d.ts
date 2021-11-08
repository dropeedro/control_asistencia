/// <reference path="../jscommon.d.ts" />
/// <reference path="./jscommon.d.ts" />
/// <reference path="./jscollections.d.ts" />

// Type definitions for MindFusion.Common.UI for JavaScript
// Project: https://www.mindfusion.eu/javascript-pack.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2018-2020, MindFusion LLC - Bulgaria.

declare module "mindfusion-common/modules/jsui"
{
export = MindFusion.Common.UI;
}

declare namespace MindFusion.Common.UI
{
	/** A base class for UI controls. */
	class UIControl extends MindFusion.Common.Control
	{
	}
	/** Specifies how a window is displayed. */
	enum WindowState
	{
		/** Indicates normal state. */
		Normal = 0,
		/** Indicates minimized state. */
		Minimized = 1,
		/** Indicates maximized state. */
		Maximized = 2
	}
	/** Specifies a type of interaction. */
	enum InteractionType
	{
		/** Indicates drag interaction. */
		Drag = 0,
		/** Indicates resize interaction. */
		Resize = 1
	}
	/** Represents the return value of a modal dialog. */
	enum ModalResult
	{
		/** Default value. */
		None = 0,
		/** The dialog was closed using the OK button. */
		OK = 1,
		/**  The dialog was closed using the Cancel button. */
		Cancel = 2
	}
	/** Specifies orientation. */
	enum Orientation
	{
		/** Indicates a horizontal orientation. */
		Horizontal = 0,
		/** Indicates a vertical orientation. */
		Vertical = 1
	}
	/** Specifies how a toolStrip item is displayed. */
	enum ToolStripItemType
	{
		/** An empty item. */
		Default = 0,
		/** The item displays a separator bar. */
		Separator = 1,
		/** The item displays a label. */
		Label = 2,
		/** The item displays an image. */
		Icon = 3
	}
	/** Specifies the position of a tooltip relative to its target element. */
	enum TooltipPosition
	{
		/** Indicates that the tooltip will be shown at the left side of the target element. */
		Left = 0,
		/** Indicates that the tooltip will be shown at the right side of the target element. */
		Right = 1,
		/** Indicates that the tooltip will be shown above the target element. */
		Top = 2,
		/** Indicates that the tooltip will be shown below the target element. */
		Bottom = 3,
		/** Indicates that the tooltip will be shown at the center of the target element. */
		Center = 4,
		/** Indicates that the tooltip will be shown at the position of the mouse cursor. */
		Cursor = 5
	}
	/** Specifies the position of a tooltip relative to its target element. */
	enum TooltipTrigger
	{
		/** Indicates that the tooltip display will be triggered manually. */
		None = -1,
		/** Indicates that the tooltip will be shown when the target element is hovered. */
		Hover = 0,
		/** Indicates that the tooltip will be shown when the target element is focused. */
		Focus = 1,
		/** Indicates that the tooltip will be shown when the target element is clicked. */
		Click = 2
	}
	/** Specifies how expand/collapse of tree nodes will be triggered. */
	enum ToggleMode
	{
		/** Indicates that expand/collapse will be triggered by a click on the node header. */
		HeaderClick = 0,
		/** Indicates that expand/collapse will be triggered by a click on the +/- icon in the node header. */
		IconClick = 1
	}
	/** Specifies the validation state of a control. */
	enum ValidationState
	{
		/** Indicates that the control is in invalid state. */
		Invalid = 0,
		/** Indicates that the control is in valid state. */
		Valid = 1
	}
	/** Specifies the display mode of the button in a Picker control. */
	enum PickerButtonStyle
	{
		/** Indicates that the button wil not be displayed. */
		None = 0,
		/** Indicates that the button will be displayed to the right of the input element. */
		Block = 1,
		/** Indicates that the button will be displayed inside the input element. */
		Inline = 2
	}
	/** Specifies the display mode of a DateTimePicker control. */
	enum DateTimePickerMode
	{
		/** Indicates that the picker allows selection of dates. */
		Date = 0,
		/** Indicates that the picker allows selection of time. */
		Time = 1,
		/** Indicates that the picker allows selection of dates and time. */
		DateTime = 2
	}
	/** Specifies a time resolution. */
	enum TimeUnit
	{
		/** Specifies seconds. */
		Second = 0,
		/** Specifies minutes. */
		Minute = 1,
		/** Specifies hours. */
		Hour = 2,
		/** Specifies days. */
		Day = 2,
		/** Specifies weeks. */
		Week = 2,
		/** Specifies months. */
		Month = 2,
		/** Specifies years. */
		Year = 2,
		/** Specifies decades. */
		Decade = 2
	}
	/** A base class for UI container controls. */
	class Container extends UIControl
	{
		/** Initializes a new instance of the Container class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Returns a reference to the container's content element. */
		content: HTMLDivElement;
		/** Ensures that a child window fits into parent bounds.
		 * @param window The child window to check.
		*/
		fit(window: WindowBase): void;
		/** Brings a child window to the front, effectively making it topmost and active.
		 * @param window The child window to bring to front.
		*/
		bringToFront(window: WindowBase): void;
		/** Sends a child window to the back.
		 * @param window The child window to send to back.
		*/
		sendToBack(window: WindowBase): void;
		/** Gets the collection of child windows. */
		children: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the topmost child window. */
		activeChild: WindowBase;
		/** Gets the bounds of this container's content element. */
		contentBounds: MindFusion.Drawing.Rect;
		/** Gets the bounding rect of this container's content element */
		contentRect: MindFusion.Drawing.Rect;
	}
	/** Represents an item which can be templated. */
	class TemplatedItem
	{
		/** Initializes a new instance of the TemplatedItem class. */
		constructor();
		/** Gets or sets the item template. */
		template: string;
	}
	/** Represents an item in a list control. */
	class ListItem extends TemplatedItem
	{
		/** Initializes a new instance of the ListItem class.
		 * @param title The display text of this item.
		*/
		constructor(title?: string);
		/** Gets or sets the display text of this item. */
		title: string;
		/** Returns a reference to the item's DOM element. */
		element: HTMLElement;
		/** Returns a reference to the item's content element. */
		contentElement: HTMLElement;
		/** Gets the bounds of this item. */
		bounds: MindFusion.Drawing.Rect;
		/** Gets or sets the visibility of this item. */
		visible: boolean;
		/** Gets or sets a value indicating whether user interactions are allowed for this item. */
		enabled: boolean;
		/** Gets or sets a value indicating whether drag and drop operations are allowed for this item. */
		interactive: boolean;
		/** Gets a value indicating whether the item is selected. */
		selected: boolean;
		/** Gets or sets the URL of the image displayed by this item. */
		imageSrc: string;
		/** Gets or sets the size of this item. */
		size: MindFusion.Common.Unit;
		/** Gets or sets the unique index of this item. */
		dataIndex: number;
		/** Gets or sets an object, holding custom user data. */
		data: any;
		/** Gets or sets the css class of this item. */
		cssClass: string;
		/** Gets or sets the tooltip of this item. */
		tooltip: string;
		/** Gets the parent control of this item. */
		parent: ListContainer;
		/** Gets the DOM element in the item's hierarchy which will serve as a target for the drag behavior. */
		dragHandle: HTMLElement;
		/** Gets the HTML to show in the tooltip, displayed during a drag operation. */
		dragHTML: string;
		/** Draws the item. */
		draw(): HTMLElement;
		/** Raised when the item is being drawn. */
		itemDraw: MindFusion.Common.EventDispatcher;
	}
	/** Represents an expandable list item. */
	class TreeNode extends ListItem
	{
		/** Initializes a new instance of the TreeNode class.
		 * @param title The display text of this item.
		*/
		constructor(title?: string);
		/** Gets a value indicating whether the node is expandable. */
		expandable: boolean;
		/** Gets or sets a value indicating whether the node is expanded. */
		expanded: boolean;
		/** Gets the children of the tree node. */
		items: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the collection of children items as a flat list. */
		flatItems: MindFusion.Common.Collections.List;
		/** Gets the depth of the tree node in the tree view hierarchy. */
		level: number;
	}
	/** Represents an item in a menu. */
	class MenuItem extends TreeNode
	{
		/** Initializes a new instance of the MenuItem class.
		 * @param title The display text of this item.
		 * @param href The URL this item is pointing to.
		*/
		constructor(title?: string, href?: string);
		/** Gets or sets the URL this item is pointing to. */
		href: string;
		/** Gets or sets a value indicating where the linked document is loaded. */
		target: string;
	}
	/** Represents a button in a ToolStrip control. */
	class ToolStripItem extends ListItem
	{
		/** Initializes a new instance of the ToolStripItem class.
		 * @param type The type of this item.
		 * @param title The display text of this item.
		*/
		constructor(type?: ToolStripItemType, title?: string);
		/** Gets the type of the item. */
		type: ToolStripItemType;
	}
	/** Represents a list of items. */
	class ListContainer extends UIControl
	{
		/** Initializes a new instance of the ListContainer class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets the collection of list items. */
		items: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the collection of selected items. */
		selection: MindFusion.Common.Collections.ObservableCollection;
		/** Gets or sets a value indicating how list items are arranged. */
		orientation: Orientation;
		/** Gets or sets whether users are allowed to select more than one item at a time. */
		allowMultipleSelection: boolean;
		/** Gets or sets whether drag and drop capabilities are enabled. */
		allowDrag: boolean;
		/** Gets or sets whether the control can be used as a drop target. */
		allowDrop: boolean;
		/** Gets or sets the ListItem instance that can be dropped. */
		acceptDrop: ListItem;
		/** Gets or sets the size of the list items. */
		itemSize: MindFusion.Common.Unit;
		/** Gets a reference to the container's content element. */
		content: HTMLElement;
		/** Selects an item.
		 * @param item The item to select.
		*/
		selectItem(item: ListItem): void;
		/** Deselects an item.
		 * @param item The item to deselect.
		*/
		deselectItem(item: ListItem): void;
		/** Gets the item at the specified point.
		 * @param point The point to check.
		*/
		getItemAt(point: MindFusion.Drawing.Point): ListItem;
		/** Loads items from a data object.
		 * @param data The object containing the items data.
		*/
		fromObject(data: any): void;
		/** Serializes items to a JSON string. */
		toJson(): string;
		/** Deserializes items from a JSON string.
		 * @param json A string created by the toJson method.
		*/
		fromJson(json: string): void;
		/** Raised when the items collection is changing. */
		itemsChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the items collection is changed. */
		itemsChanged: MindFusion.Common.EventDispatcher;
		/** Raised when the selection collection is changing. */
		selectionChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the selection collection is changed. */
		selectionChanged: MindFusion.Common.EventDispatcher;
		/** Raised when an item is being drawn. */
		itemDraw: MindFusion.Common.EventDispatcher;
		/** Raised when a mouseenter event occurs in an item's element. */
		itemMouseEnter: MindFusion.Common.EventDispatcher;
		/** Raised when a mouseleave event occurs in an item's element. */
		itemMouseLeave: MindFusion.Common.EventDispatcher;
		/** Raised when a mousedown event occurs in an item's element. */
		itemMouseDown: MindFusion.Common.EventDispatcher;
		/** Raised when an item is clicked. */
		itemClick: MindFusion.Common.EventDispatcher;
		/** Raised when an item is double-clicked. */
		itemDoubleClick: MindFusion.Common.EventDispatcher;
		/** Raised when a drag operation on an item is started. */
		itemDragStart: MindFusion.Common.EventDispatcher;
		/** Raised when an item is dragged. */
		itemDrag: MindFusion.Common.EventDispatcher;
		/** Raised when when a drag operation on an item is finished. */
		itemDragEnd: MindFusion.Common.EventDispatcher;
		/** Raised when an item is dragged over the control. */
		dragOver: MindFusion.Common.EventDispatcher;
		/** Raised when an item is dropped onto the control. */
		dragDrop: MindFusion.Common.EventDispatcher;
		/** Raised when a drop operation is finished. */
		itemDrop: MindFusion.Common.EventDispatcher;
	}
	/** Represents a list view control. */
	class ListView extends ListContainer
	{
		/** Initializes a new instance of the ListView class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
	}
	/** Represents a tree view control. */
	class TreeView extends ListContainer
	{
		/** Initializes a new instance of the TreeView class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets a value indicating whether tree nodes DOM will be created only after their parent node is expanded. */
		loadOnDemand: boolean;
		/** Gets the collection of items as a flat list. */
		flatItems: MindFusion.Common.Collections.List;
		/** Gets the collection of loaded items as a flat list. */
		loadedItems: MindFusion.Common.Collections.List;
		/** Gets or sets a value indicating how nodes expand/collapse will be triggered. */
		toggleMode: ToggleMode;
		/** Gets or sets the TreeNode instance that can be dropped. */
		acceptDrop: ListItem;
		/** Selects a tree node.
		 * @param node The node to select.
		 * @param selectChildren True to select all of the node's children, otherwise false.
		*/
		selectNode(node: TreeNode, selectChildren?: boolean): void;
		/** Deselects a tree node.
		 * @param node The node to deselect.
		 * @param deselectChildren True to deselect all of the node's children, otherwise false.
		*/
		deselectNode(node: TreeNode, deselectChildren?: boolean): void;
	}
	/** Represents a vertical menu. */
	class Menu extends ListContainer
	{
		/** Initializes a new instance of the Menu class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets a value indicating whether menu items DOM will be created only after their parent item is expanded. */
		loadOnDemand: boolean;
		/** Gets or sets the number of milliseconds to wait before closing an item. */
		closeTimeout: number;
		/** Gets the collection of items as a flat list. */
		flatItems: MindFusion.Common.Collections.List;
		/** Gets the collection of loaded items as a flat list. */
		loadedItems: MindFusion.Common.Collections.List;
	}
	/** Represents a container of toolbar buttons. */
	class ToolStrip extends ListContainer
	{
		/** Initializes a new instance of the ToolStrip class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets a value indicating whether the toolstrip displays scroll arrows when there is not enough room to display all items. */
		scrollable: boolean;
		/** Gets or sets a value indicating whether the toolstrip can be collapsed. */
		collapsible: boolean;
		/** Gets a value indicating whether the toolstrip is currently expanded. */
		expanded: boolean;
		/** Gets or sets the ToolStripItem instance that can be dropped. */
		acceptDrop: ToolStripItem;
		/** Collapses the toolstrip. */
		collapse(): void;
		/** Expands the toolstrip. */
		expand(): void;
	}
	/** Represents a popup window, containing a custom message. */
	class Tooltip extends UIControl
	{
		/** Initializes a new instance of the Tooltip class.
		 * @param target The HTML element that will trigger the tooltip.
		 * @param text The display text of the tooltip.
		*/
		constructor(target: HTMLElement, text?: string);
		/** Gets or sets the text of this tooltip. */
		text: string;
		/** Gets or sets the tooltip content template. */
		template: string;
		/** Gets the target element. */
		target: HTMLElement;
		/** Gets or sets the position of the tooltip. */
		position: TooltipPosition;
		/** Gets or sets the event that shows the tooltip. */
		trigger: TooltipTrigger;
		/** Gets or sets a value indicating whether the tooltip will follow the mouse cursor. */
		follow: boolean;
		/** Gets or sets the offset of the tooltip. */
		offset: MindFusion.Drawing.Point;
		/** Shows the tooltip.
		 * @param position The point at which to display the tooltip if its position is set to TooltipPosition.Cursor.
		*/
		show(position?: MindFusion.Drawing.Point): void;
		/** Shows the tooltip without raising events.
		 * @param position The point at which to display the tooltip if its position is set to TooltipPosition.Cursor.
		*/
		doShow(position?: MindFusion.Drawing.Point): void;
		/** Hides the tooltip. */
		hide(): void;
		/** Hides the tooltip without raising events. */
		doHide(): void;
		/** Toggles the tooltip's visibility. */
		toggle(): void;
		/** Raised when the tooltip is showing. */
		tooltipShowing: MindFusion.Common.EventDispatcher;
		/** Raised when the tooltip is shown. */
		tooltipShow: MindFusion.Common.EventDispatcher;
		/** Raised when the tooltip is hiding. */
		tooltipHiding: MindFusion.Common.EventDispatcher;
		/** Raised when the tooltip is hidden. */
		raiseHide: MindFusion.Common.EventDispatcher;
	}
	/** Represents a tab pages container. */
	class TabControl extends ListContainer
	{
		/** Initializes a new instance of the TabControl class.
		 * @param element TThe control's associated Dom element.
		*/
		constructor(element: HTMLElement);
		/** Gets the collection of tab pages. */
		tabs: MindFusion.Common.Collections.ObservableCollection;
		/** Gets or sets the currently selected tab page by its index. */
		selectedIndex: number;
		/** Gets or sets the currently selected tab page. */
		selectedItem: TabPage;
		/** Gets or sets the size of the tabStrip. */
		tabStripSize: MindFusion.Common.Unit;
		/** Gets or sets the size of the tabs. */
		tabSize: MindFusion.Common.Unit;
		/** Raised when a tab header is drawn. */
		tabHeaderDraw: MindFusion.Common.EventDispatcher;
		/** Raised when a tab header is clicked. */
		tabHeaderClick: MindFusion.Common.EventDispatcher;
		/** Raised when the selected tab is changing. */
		selectedItemChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the selected tab is changed. */
		selectedItemChanged: MindFusion.Common.EventDispatcher;
	}
	/** Represents a tab page in a TabControl. */
	class TabPage extends ListItem
	{
		/** Initializes a new instance of the TabPage class.
		 * @param title The display text of this item.
		*/
		constructor(title?: string);
		/** Gets a reference to the tab page header. */
		header: ToolStripItem;
		/** Gets or sets an HTML string representing the content template. */
		template: string;
		/** Gets or sets a string, specifying the URL of the web page, that will be loaded as a control content template. */
		templateUrl: string;
		/** Gets or sets a string specifying the URL of the web page, that will be loaded in the control's content IFrame. */
		navigateUrl: string;
		/** Gets or sets a value indicating whether to show a close button in the header of this tab page. */
		allowClose: boolean;
		/** Raised when the page's content is loaded. */
		contentLoad: MindFusion.Common.EventDispatcher;
	}
	/** A base class for picker controls */
	class Picker extends UIControl
	{
		/** Initializes a new instance of the Picker class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the value of this control. */
		value: any;
		/** Gets the control value as a string. */
		displayValue: string;
		/** Gets the validation state of this control. */
		state: ValidationState;
		/** Gets or sets a value indicating the display mode of the dropdown button. */
		buttonStyle: PickerButtonStyle;
		/** Gets or sets indicating the display mode of the clear button. */
		clearButtonStyle: PickerButtonStyle;
		/** Gets or sets a value indicating whether empty input will be considered valid. */
		allowEmptyInput: boolean;
		/** Gets or sets the string to display in the control when the value is invalid. */
		invalidString: string;
		/** Gets or sets the offset of the dropdown. */
		dropdownOffset: MindFusion.Drawing.Point;
		/** Gets or sets the width of the dropdown. */
		dropdownWidth: MindFusion.Common.Unit;
		/** Gets or sets the height of the dropdown. */
		dropdownHeight: MindFusion.Common.Unit;
		/** Gets or sets a value indicating whether a wrapper div element should be created for the control. */
		createWrapper: boolean;
		/** Raised when the control value is changing.. */
		valueChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the control value is changed. */
		valueChanged: MindFusion.Common.EventDispatcher;
		/** Raised when the control validation state is changed. */
		stateChanged: MindFusion.Common.EventDispatcher;
		/** Raised when the dropdown is shown. */
		dropDownShow: MindFusion.Common.EventDispatcher;
		/** Raised when the dropdown is closed. */
		dropDownClose: MindFusion.Common.EventDispatcher;
	}
	/** Represents a month calendar. */
	class Calendar extends UIControl
	{
		/** Initializes a new instance of the Calendar class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the date of the control. */
		date: Date;
		/** Gets or sets the locale object used to format and display localizable information in the calendar. */
		locale: MindFusion.Common.Locale;
		/** Gets DateSettings object used to format and display date and time information in the calendar.  */
		formatInfo: MindFusion.Common.DateSettings;
		/** Gets the current calendar view. */
		view: DateTimeView;
		/** Gets or sets the current date-time span of the calendar. */
		span: TimeUnit;
		/** Gets or sets the minimum date-time span of the calendar. */
		minSpan: TimeUnit;
		/** Gets or sets the maximum date-time span of the calendar. */
		maxSpan: TimeUnit;
		/** Raised when the selected date is changing. */
		selectedDateChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the selected date is changed. */
		selectedDateChanged: MindFusion.Common.EventDispatcher;
		/** Raised when the selected view is changed. */
		viewChanged: MindFusion.Common.EventDispatcher;
	}
	/** A base class for calendar views. */
	class DateTimeView extends UIControl
	{
		/** Initializes a new instance of the DateTimeView class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the date of the view. */
		date: Date;
		/** Gets or sets the locale object used to format and display localizable information in the calendar. */
		locale: MindFusion.Common.Locale;
		/** Gets DateSettings object used to format and display date and time information in the calendar.  */
		formatInfo: MindFusion.Common.DateSettings;
		/** Raised when a date-time cell is clicked. */
		cellClick: MindFusion.Common.EventDispatcher;
		/** Raised when a button in the command strip is clicked. */
		buttonClick: MindFusion.Common.EventDispatcher;
	}
	/** Displays a day, represented by a grid of arbitrary time interval cells. */
	class DayView extends DateTimeView
	{
		/** Initializes a new instance of the DayView class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the time interval of a view cell in milliseconds. */
		interval: number;
		/** Gets or sets the minimum value displayed in the view. */
		minTime: number;
		/** Gets or sets the maximum value displayed in the view.. */
		maxTime: number;
	}
	/** Displays a month, represented by a grid of day cells. */
	class MonthView extends DateTimeView
	{
	}
	/** Displays a year, represented by a grid of month cells. */
	class YearView extends DateTimeView
	{
	}
	/** Displays a decade, represented by a grid of year cells. */
	class DecadeView extends DateTimeView
	{
	}
	/** Represents an input control with the ability to parse and select dates from a popup calendar and/or time from a popup list. */
	class DateTimePicker extends Picker
	{
		/** Initializes a new instance of the DateTimePicker class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the mode of the control. */
		mode: DateTimePickerMode;
		/** Gets or sets the locale object used to format and display dates. */
		locale: MindFusion.Common.Locale;
		/** Gets the formatting of the date-time value displayed in the control. */
		format: string;
		/** Gets or sets a value indicating whether the control will try to parse incomplete input. */
		autoComplete: boolean;
		/** Gets or sets a value indicating whether date part selection is enabled. */
		datePartSelect: boolean;
		/** Gets or sets the minimum time value, displayed in a Day view. */
		minTime: number;
		/** Gets or sets the maximum time value, displayed in a Day view. */
		maxTime: number;
		/** Gets or sets the time interval. */
		interval: number;
		/** Raised when the tooltip is showing. */
		tooltipShowing: MindFusion.Common.EventDispatcher;
		/** Raised when the control value is changing.. */
		valueChanging: MindFusion.Common.EventDispatcher;
	}
	/** Represents an input control with the ability select images from the filesystem or a predefined list. */
	class ImagePicker extends Picker
	{
		/** Initializes a new instance of the ImagePicker class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the list of images to choose from. */
		imageList: Array<string>;
		/** Gets or sets the size of the dropdown items. */
		itemSize: MindFusion.Common.Unit;
		/** Gets or sets the index of the selected image. */
		imageIndex: number;
		/** Loads the images from the specified list of image url-s.
		 * @param images An array of image url-s.
		*/
		static loadImageList(images: Array<string>): Promise<any>;
	}
	/** Represents a window, which can be either templated or rendered as an IFrame. */
	class WindowBase extends UIControl
	{
		/** Gets or sets an HTML string representing the content template. */
		template: string;
		/** Gets or sets a string, specifying the URL of the web page, that will be loaded as a control content template. */
		templateUrl: string;
		/** Gets or sets a string specifying the URL of the web page, that will be loaded in the control's content IFrame. */
		navigateUrl: string;
		/** Gets the host of this window. */
		host: Container;
		/** Gets the host element. */
		hostElement: HTMLElement;
		/** Gets or sets the state of this window. */
		windowState: WindowState;
		/** Raised when the windows's contents are loaded. */
		contentLoad: MindFusion.Common.EventDispatcher;
		/** Raised when the window is opening. */
		windowOpening: MindFusion.Common.EventDispatcher;
		/** Raised when the window is opened. */
		windowOpen: MindFusion.Common.EventDispatcher;
		/** Raised when the window is closing. */
		windowClosing: MindFusion.Common.EventDispatcher;
		/** Raised when the window is closed. */
		windowClose: MindFusion.Common.EventDispatcher;
		/** Raised when the window's state is changing. */
		stateChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the window's state is changed. */
		stateChanged: MindFusion.Common.EventDispatcher;
	}
	/** Represents a window with title and contents, which can be moved, resized and arranged interactively. */
	class Window extends WindowBase
	{
		/** Initializes a new instance of the Window class.
		 * @param element The element this Window is associated with.
		*/
		constructor(element?: HTMLElement);
		/** Returns a reference to the DOM element of the window header. */
		header: HTMLDivElement;
		/** Returns a reference to the DOM element of the window footer. */
		footer: HTMLDivElement;
		/** Opens the window. */
		open(): void;
		/** Closes the window. */
		close(): void;
		/** Minimizes the window. */
		minimize(): void;
		/** Maximizes the window. */
		maximize(): void;
		/** Restores the window to a normal state. */
		restore(): void;
		/** Reloads the window iframe. */
		refresh(): void;
		/** Pins the window. */
		pin(): void;
		/** Unpins the window. */
		unpin(): void;
		/** Resizes the window to fit its contents. */
		autoSize(): void;
		/** Gets or sets the title text of this window. */
		title: string;
		/** Gets or sets a value indicating whether the window will display the title of its content iframe. */
		useFrameTitle: boolean;
		/** Gets or sets the url of the title icon. */
		iconSrc: string;
		/** Gets or sets a value indicating whether to show a pin button in the header toolStrip. */
		allowPin: boolean;
		/** Gets or sets a value indicating whether to show a refresh button in the header toolStrip. */
		allowRefresh: boolean;
		/** Gets or sets a value indicating whether to show a minimize button in the header toolStrip. */
		allowMinimize: boolean;
		/** Gets or sets a value indicating whether to show a maximize button in the header toolStrip. */
		allowMaximize: boolean;
		/** Gets or sets a value indicating whether this window can be dragged. */
		allowDrag: boolean;
		/** Gets or sets a value indicating whether this window can be resized. */
		allowResize: boolean;
		/** Gets or sets a value indicating whether to show a close button in the header toolStrip. */
		allowClose: boolean;
		/** Gets or sets the minimum allowed width of this window. */
		minWidth: MindFusion.Common.Unit;
		/** Gets or sets the minimum allowed height of this window. */
		minHeight: MindFusion.Common.Unit;
		/** Gets or sets a value indicating whether this window should be modal. */
		modal: boolean;
		/** Gets or sets a value, indicating whether this window is pinned. */
		pinned: boolean;
		/** Closes the window without raising events. */
		doClose(): void;
		/** Opens the window without raising events. */
		doOpen(): void;
		/** Positions the window in the center of its host element or specified rect.
		 * @param rect The rect to center in.
		*/
		center(rect?: MindFusion.Drawing.Rect): void;
		/** Updates window dimensions after applying changes to DOM elements.
		 * @param autoSize True to autosize the window, otherwise false.
		*/
		updateBounds(autoSize?: boolean): void;
		/** Raised when the window header is clicked. */
		headerClick: MindFusion.Common.EventDispatcher;
		/** Raised when a drag operation is started. */
		dragStart: MindFusion.Common.EventDispatcher;
		/** Raised when a drag operation is finished. */
		dragEnd: MindFusion.Common.EventDispatcher;
		/** Raised when a resize operation is started. */
		resizeStart: MindFusion.Common.EventDispatcher;
		/** Raised when a resize operation is finished. */
		resizeEnd: MindFusion.Common.EventDispatcher;
	}
	/** Represents a container for Window objects. */
	class WindowHost extends Container
	{
		/** Initializes a new instance of the WindowHost class.
		 * @param element The element this WindowHost is associated with.
		*/
		constructor(element?: HTMLElement);
		/** Gets the collection of child windows. */
		windows: MindFusion.Common.Collections.ObservableCollection;
		/** Gets a reference to the default commands toolStrip. */
		commandStrip: ToolStrip;
		/** Gets a reference to the maximized windows toolStrip. */
		maximizedStrip: ToolStrip;
		/** Gets a reference to the minimized windows toolStrip. */
		minimizedStrip: ToolStrip;
		/** Closes all open child windows. */
		closeAll(): void;
		/** Restores all minimized child windows. */
		restoreAll(): void;
		/** Opens all closed child windows. */
		openAll(): void;
		/** Minimizes all child windows. */
		minimizeAll(): void;
		/** Shows an info dialog.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param callback The callback function to invoke when the dialog is closed.
		*/
		showInfoDialog(title?: string, message?: string, callback?: Function): void;
		/** Shows a confirmation dialog.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param callback The callback function to invoke when the dialog is closed.
		*/
		showConfirmDialog(title?: string, message?: string, callback?: Function): void;
		/** Shows an input dialog.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param callback The callback function to invoke when the dialog is closed.
		 * @param input The input control to show in the dialog.
		 * @param property The name of the property of the input control, whose value will be passes as the second argument to the callback function.
		*/
		showInputDialog(title?: string, message?: string, callback?: Function, input?: HTMLElement, property?: string): void;
		/** Raised when a child window is being opened. */
		windowOpening: MindFusion.Common.EventDispatcher;
		/** Raised when a child window is opened. */
		windowOpen: MindFusion.Common.EventDispatcher;
		/** Raised when a child window is being closed. */
		windowClosing: MindFusion.Common.EventDispatcher;
		/** Raised when a child window is closed. */
		windowClose: MindFusion.Common.EventDispatcher;
		/** Raised when the state of a child window is being modified. */
		windowStateChanging: MindFusion.Common.EventDispatcher;
		/** Raised when the state of a child window is modified. */
		windowStateChanged: MindFusion.Common.EventDispatcher;
	}
	/** Contains static methods for different user dialogs. */
	class Dialogs
	{
		/** Shows an info dialog, which displays a message and an OK button.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param callback The callback function to invoke when the dialog is closed.
		 * @param parentElement The Dom element to append the dialog to.
		 * @param theme The theme of the dialog.
		*/
		static showInfoDialog(title?: string, message?: string, callback?: Function, parentElement?: HTMLElement, theme?: string): void;
		/** Shows a confirm dialog, which displays a message and OK and Cancel buttons.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param callback The callback function to invoke when the dialog is closed.
		 * @param parentElement The Dom element to append the dialog to.
		 * @param theme The theme of the dialog.
		*/
		static showConfirmDialog(title?: string, message?: string, callback?: Function, parentElement?: HTMLElement, theme?: string): void;
		/** Shows an input dialog, which displays a message, a custom input control and OK and Cancel buttons.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param callback The callback function to invoke when the dialog is closed.
		 * @param parentElement The Dom element to append the dialog to.
		 * @param input The input control to show in the dialog.
		 * @param property The name of the property of the input control, whose value will be passes as the second argument to the callback function.
		 * @param theme The theme of the dialog.
		*/
		static showInputDialog(title?: string, message?: string, callback?: Function, parentElement?: HTMLElement, input?: HTMLElement, property?: string, theme?: string): void;
	}
	/** Represents a modal dialog box. */
	class Dialog extends Window
	{
		/** Initializes a new instance of the Dialog class.
		 * @param parent The DOM element to which to append the dialog.
		*/
		constructor(parent: HTMLElement);
	}
	/** Represents a modal dialog box, displaying a custom message. */
	class InfoDialog extends Dialog
	{
		/** Initializes a new instance of the InfoDialog class.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param parent The DOM element to which to append the dialog.
		*/
		constructor(title?: string, message?: string, parent?: HTMLElement);
	}
	/** Represents a modal dialog box with OK and Cancel buttons. */
	class ConfirmDialog extends Dialog
	{
		/** Initializes a new instance of the ConfirmDialog class.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param parent The DOM element to which to append the dialog.
		*/
		constructor(title?: string, message?: string, parent?: HTMLElement);
	}
	/** Represents a modal dialog box, displaying a custom input control. */
	class InputDialog extends ConfirmDialog
	{
		/** Initializes a new instance of the InputDialog class.
		 * @param title The text to display as a dialog title.
		 * @param message The message to display as a dialog text.
		 * @param parent The DOM element to which to append the dialog.
		 * @param input The input control to show in the dialog.
		 * @param property The name of the property of the input control, whose value will be passes as the second argument to the callback function.
		*/
		constructor(title?: string, message?: string, parent?: HTMLElement, input?: HTMLElement, property?: string);
		/** Returns a reference to the dialog's input element */
		input: HTMLElement;
	}
	/** Specifies data for the item related events. */
	class ItemEventArgs extends MindFusion.Common.EventArgs
	{
		/** The item, associated with the event. */
		item: ListItem;
		/** The Javascript event data. */
		rawEventArgs: any;
	}
	/** Contains the arguments passed to handlers of interaction-related events. */
	class InteractionEventArgs extends MindFusion.Common.CancelEventArgs
	{
		/** The Javascript event data. */
		rawEventArgs: any;
		/** The action associated with the event. */
		action: InteractionType;
	}
	/** Specifies data for validation events, related to control changes. */
	class ControlModifyingEventArgs extends MindFusion.Common.CancelEventArgs
	{
		/** The control that is being modified. */
		control: MindFusion.Common.Control;
		/** An object containing the changed properties. */
		changes: any;
	}
	/** Specifies data for notification events, related to control changes. */
	class ControlModifiedEventArgs extends MindFusion.Common.CancelEventArgs
	{
		/** The control that is modified. */
		control: MindFusion.Common.Control;
		/** An object containing the changed properties. */
		changes: any;
	}
	/** Specifies data for selectedItemChanging events. */
	class SelectedItemChangingEventArgs extends MindFusion.Common.CancelEventArgs
	{
		/** The selected item before the change. */
		oldItem: ListItem;
		/** The new selected item. */
		newItem: ListItem;
	}
	/** Specifies data for selectedItemChanged events. */
	class SelectedItemChangedEventArgs extends MindFusion.Common.EventArgs
	{
		/** The selected item before the change. */
		oldItem: ListItem;
		/** The new selected item. */
		newItem: ListItem;
	}
}

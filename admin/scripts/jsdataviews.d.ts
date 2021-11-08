/// <reference path="./mindfusion-common/jscommon.d.ts" />
/// <reference path="./mindfusion-common/modules/jscommon.d.ts" />
/// <reference path="./mindfusion-common/modules/jscollections.d.ts" />

// Type definitions for MindFusion.DataViews for JavaScript
// Project: https://mindfusion.eu/javascript-grid.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2020-2021, MindFusion LLC - Bulgaria.

declare module "grid-library"
{
export = MindFusion.DataViews;
}

declare namespace MindFusion.DataViews
{
	/** A base class for UI controls. */
	class UIControl extends MindFusion.Common.Control
	{
	}
	/** Specifies a row action. */
	enum RowAction
	{
		/** Indicates that a row is being selected. */
		Select = 0,
		/** Indicates that a row is being created. */
		Create = 1,
		/** Indicates that a row is being updated. */
		Update = 2,
		/** Indicates that a row is being deleted. */
		Delete = 3,
		/** Indicates that a row command is being executed. */
		Command = 4,
		/** Indicates that a row is being rendered. */
		Render = 5
	}
	/** A base class for data types. */
	class DataType
	{
	}
	/** Provides functionality for grid columns, that display string data. */
	class StringType extends DataType
	{
	}
	/** Provides functionality for grid columns, that display integer data. */
	class IntegerType extends DataType
	{
	}
	/** Provides functionality for grid columns, that display real number data. */
	class RealNumberType extends IntegerType
	{
	}
	/** Provides functionality for grid columns, that display currency data. */
	class CurrencyType extends RealNumberType
	{
	}
	/** Provides functionality for grid columns, that display dates. */
	class DateType extends DataType
	{
	}
	/** Provides functionality for grid columns, that display date-time values. */
	class DateTimeType extends DateType
	{
	}
	/** Provides functionality for grid columns, that display image data. */
	class ImageType extends DataType
	{
	}
	/** Provides functionality for grid columns, that display lookup or value lists. */
	class LookupType extends DataType
	{
	}
	/** Provides functionality for command columns. */
	class CommandType
	{
	}
	/** A base class for grid row commands. */
	class Command
	{
		/** Override this property in a derived class to set the command string identifier. */
		static commandName: string;
		/** Override this property in a derived class to change the trigger event for the command action. */
		static eventName: string;
		/** Override this method in a derived class to customize the command controller. */
		createControl(): HTMLElement;
	}
	/** Handles row deletion, triggered by a command grid column. */
	class DeleteCommand extends Command
	{
	}
	/** The interface for grid models. */
	class GridModel
	{
		/** Gets the number of rows in the backing store. */
		rowCount: number;
		/** Gets the numberof display columns. */
		columnCount: number;
		/** Gets the key of the specified row.
		 * @param row The row index.
		*/
		getRowKey(row: number): any;
		/** Gets the row with the specified key.
		 * @param key The key.
		*/
		getKeyRow(key: any): number;
		/** Gets the type of the specified column.
		 * @param column The column index.
		*/
		columnType(column: number): DataType;
		/** Gets the name of the specified column.
		 * @param column The column index.
		*/
		columnName(column: number): string;
		/** Gets the display text of the specified column.
		 * @param column The column index.
		*/
		columnCaption(column: number): string;
		/** Gets a value, indicating whether the cells in the specified column can be edited.
		 * @param column The column index.
		*/
		columnEditable(column: number): boolean;
		/** Gets a value, indicating whether the specified column can be sorted.
		 * @param column The column index.
		*/
		columnSortable(column: number): boolean;
		/** Gets the column meta data object.
		 * @param column The column index.
		*/
		columnMetaData(column: number): Map<string, any>;
		/** Sets a value at the specified position.
		 * @param row The row index.
		 * @param column The column index.
		 * @param value The value.
		*/
		setValue(row: number, column: number, value: any): void;
		/** Gets the value at the specified position.
		 * @param row The row index.
		 * @param column The column index.
		*/
		value(row: number, column: number): any;
		/** Gets the display value of the cell at the specified position.
		 * @param row The row index.
		 * @param column The column index.
		*/
		displayValue(row: number, column: number): string;
		/** Gets the values at the specified row index.
		 * @param row The row index.
		*/
		getRowData(row: number): any;
		/** Adds a row to the backing store.
		 * @param rowData The values to add.
		 * @param index The index at which to insert the data. 
		*/
		addRow(rowData?: any, index?: number): number;
		/** Removes the row at the specified index from the backing store.
		 * @param row The row index.
		*/
		deleteRow(row: number): void;
	}
	/** Represents a data cell in a grid control. */
	class GridCell
	{
		/** Gets the row index of this cell. */
		row: number;
		/** Gets the column index of this cell. */
		column: number;
		/** Gets the DOM element of this cell. */
		element: HTMLDivElement;
	}
	/** Represents a column in a grid control. */
	class GridColumn
	{
		/** Initializes a new instance of the GridColumn class.
		 * @param name The name of the field, displayed in the column.
		 * @param dataType The type of this column.
		 * @param editable A value indicating whether the cells in this column can be edited.
		*/
		constructor(name?: string, dataType?: DataType, editable?: boolean);
		/** Gets or sets the name of the field, displayed in the column. */
		name: string;
		/** Gets or sets the type of the column. */
		dataType: DataType;
		/** Gets or sets the metadata object, associated with this column. */
		metaData: Map<string, any>;
		/** Gets or sets the display text of the column. */
		caption: string;
		/** Gets or sets a value indicating whether the cells in this column can be edited. */
		editable: boolean;
		/** Gets or sets a value indicating whether this column can be sorted. */
		sortable: boolean;
	}
	/** Represents a grid model, that uses an array of objects as a backing store. */
	class ArrayModel extends GridModel
	{
		/** Initializes a new instance of the ArrayModel class.
		 * @param values The array to use as a backing store.
		 * @param columns The list of display columns.
		 * @param keyField The name of the unique key field.
		*/
		constructor(values: Array<any>, columns: Array<GridColumn>, keyField?: string);
		/** Gets the maximum value in the unique key column. */
		getMaxKey(): any;
	}
	/** Represents a grid view control. */
	class Grid extends UIControl
	{
		/** Initializes a new instance of the Grid class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets or sets the data model of this grid.. */
		model: GridModel;
		/** Gets or sets a value, indicating whether to show a new empty row at the bottom of the grid and a 'New row' option in the row context menu. */
		allowAppend: boolean;
		/** Gets or sets a value, indicating whether inplace editing is enabled.  */
		allowEdit: boolean;
		/** Gets or sets a value, indicating whether to show a 'Delete row' option in the row context menu.  */
		allowDelete: boolean;
		/** Gets or sets a value, indicating whether single cell selection is enabled.  */
		allowCellSelect: boolean;
		/** Gets or sets a value, indicating whether scrolling is enabled.  */
		allowScroll: boolean;
		/** Gets the indices of selected rows. */
		selectedRowIndices: Array<number>;
		/** Gets the selected cells. */
		selectedCells: Array<GridCell>;
		/** Gets the index of the column, by which the data is sorted. */
		sortedColumn: number;
		/** Gets a value, indicating whether the sorting is in Ascending order. */
		sortAscending: boolean;
		/** Gets or sets the index of the first visible row. */
		scrollRow: number;
		/** Gets the active grid cell. */
		focusedCell: GridCell;
		/** Gets the active grid cell editor. */
		activeEditor: any;
		/** Gets a reference to the grid header DOM element. */
		header: HTMLDivElement;
		/** Gets a reference to the grid data table DOM element. */
		dataTable: HTMLDivElement;
		/** Repaints the grid contents.
		 * @param selected True to repaint only the selected rows.
		*/
		refresh(selected?: boolean): Promise<any>;
		/** Sets the focus to the cell at the specified position.
		 * @param row The cell row.
		 * @param column The cell column.
		 * @param moveBackwards True to move backwards.
		*/
		focusCell(row: number, column: number, moveBackwards?: boolean): void;
		/** Selects the cell at the specified position.
		 * @param row The cell row.
		 * @param column The cell column.
		*/
		selectCell(row: number, column: number): void;
		/** Selects the rows in the specified range.
		 * @param index The start index of the range to select.
		 * @param count The length of the range.
		*/
		selectRows(index: number, count?: number): void;
		/** Repaints a range of rows.
		 * @param index The start index of the range to repaint.
		 * @param count The length of the range.
		*/
		refreshRows(index: number, count?: number): Promise<any>;
		/** Adds a row.
		 * @param rowData The values to add.
		*/
		addRow(rowData: any): Promise<any>;
		/** Removes a range of rows.
		 * @param index The start index of the range to remove.
		 * @param count The length of the range.
		*/
		removeRows(index: number, count?: number): Promise<any>;
		/** Sorts by the specified column and sort direction.
		 * @param index The index of the column to sort by, or null to clear the sorting.
		 * @param sortAscending True to sort ascending, otherwise false.
		*/
		sortByColumn(index: number, sortAscending?: boolean): void;
		/** Refreshes the grid after external modifications to the grid model. */
		rebind(): void;
		/** Gets the DOM element of the cell in the specified coordinates.
		 * @param row The cell row.
		 * @param column The cell column.
		*/
		getCellElement(row: number, column: number): HTMLDivElement;
		/** Gets the DOM element DOM element of the specified row.
		 * @param row The row index.
		*/
		getRowElement(row: number): HTMLDivElement;
		/** Checks if the row at the specified index is currently visible.
		 * @param row The row index.
		*/
		isRowVisible(row: number): boolean;
		/** Ensures that the specified row is visible.
		 * @param row The row index.
		*/
		bringIntoView(row: number): Promise<any>;
		/** Disposes the active grid cell editor. */
		disposeActiveEditor(): void;
		/** Disposes the current context menu. */
		disposeContextMenu(): void;
		/** Gets the width of the specified grid column.
		 * @param column The column index.
		*/
		getColumnWidth(column: number): number;
		/** Sets the width of the specified grid column.
		 * @param column The column index.
		 * @param width The width in pixels.
		*/
		setColumnWidth(column: number, width: number): void;
		/** Gets the row with the specified key.
		 * @param key The key.
		*/
		getKeyRow(key: any): number;
		/** Gets the key of the row at the specified index.
		 * @param index The row index.
		*/
		getRowKey(index: number): any;
		/** Recalculates grid's dimensions. */
		adjust(): void;
		/** Raised when a row is rendered. */
		rowRendered: MindFusion.Common.EventDispatcher;
		/** Raised before a row is selected. */
		rowSelecting: MindFusion.Common.EventDispatcher;
		/** Raised when a row is selected. */
		rowSelected: MindFusion.Common.EventDispatcher;
		/** Raised before a row is created. */
		rowCreating: MindFusion.Common.EventDispatcher;
		/** Raised when a row is created. */
		rowCreated: MindFusion.Common.EventDispatcher;
		/** Raised before a row is deleted. */
		rowDeleting: MindFusion.Common.EventDispatcher;
		/** Raised when a row is deleted. */
		rowDeleted: MindFusion.Common.EventDispatcher;
		/** Raised before a row is updated. */
		rowUpdating: MindFusion.Common.EventDispatcher;
		/** Raised when a row is updated. */
		rowUpdated: MindFusion.Common.EventDispatcher;
		/** Raised before a cell is selected. */
		cellSelecting: MindFusion.Common.EventDispatcher;
		/** Raised when a cell is selected. */
		cellSelected: MindFusion.Common.EventDispatcher;
		/** Raised before a cell is focused. */
		cellFocusing: MindFusion.Common.EventDispatcher;
		/** Raised when a cell is focused. */
		cellFocused: MindFusion.Common.EventDispatcher;
		/** Raised when a cell's contents are about to be rendered, to allow custom drawing. */
		customDrawCell: MindFusion.Common.EventDispatcher;
		/** Raised when a header cell's contents are about to be rendered, to allow custom drawing. */
		customDrawHeader: MindFusion.Common.EventDispatcher;
		/** Raised when a command is executed on a row. */
		rowCommand: MindFusion.Common.EventDispatcher;
	}
	/** Specifies data for row action validation events. */
	class RowModifyingEventArgs extends MindFusion.Common.CancelEventArgs
	{
		/** Gets the index of the row that is being modified. */
		row: number;
		/** Gets the row action. */
		action: RowAction;
		/** Gets the row data. */
		rowData: any;
		/** Gets the dictionary of the original field name/value pairs. */
		oldValues: Map<string, any>;
		/** Gets the dictionary of the new field name/value pairs. */
		newValues: Map<string, any>;
	}
	/** Specifies data for row action notification events. */
	class RowModifiedEventArgs extends MindFusion.Common.EventArgs
	{
		/** Gets the index of the row that was modified. */
		row: number;
		/** Gets the row action. */
		action: RowAction;
		/** Gets the row data. */
		rowData: any;
		/** Gets the dictionary of the original field name/value pairs. */
		oldValues: Map<string, any>;
		/** Gets the dictionary of the new field name/value pairs. */
		newValues: Map<string, any>;
	}
	/** Provides data for the cell related validation events. */
	class CellValidateEventArgs extends MindFusion.Common.CancelEventArgs
	{
		/** Gets the row index of the cell. */
		row: number;
		/** Gets the column index of the cell. */
		column: number;
	}
	/** Provides data for the cell related notification events. */
	class CellEventArgs extends MindFusion.Common.EventArgs
	{
		/** Gets the row index of the cell. */
		row: number;
		/** Gets the column index of the cell. */
		column: number;
	}
	/** Provides data for the cell related notification events. */
	class CellCustomDrawEventArgs extends MindFusion.Common.EventArgs
	{
		/** Gets the default content, displayed in the cell. */
		defaultContent: Node;
		/** Gets or sets the new content to be displayed in the cell. */
		content: Node;
	}
	/** Specifies data for the rowCommand event. */
	class CommandEventArgs extends RowModifyingEventArgs
	{
		/** Gets the string identifier of the executed command. */
		commandName: string;
		/** Gets the controller that triggered the command. */
		control: HTMLElement;
	}
}

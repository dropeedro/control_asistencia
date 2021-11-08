/// <reference path="../mindfusion-common/jscommon.d.ts" />

// Type definitions for MindFusion.Gauges for JavaScript
// Project: https://www.mindfusion.eu/javascript-chart.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2018-2020, MindFusion LLC - Bulgaria.

declare module "gauges-library"
{
export = MindFusion.Gauges;
}

declare namespace MindFusion.Gauges
{
	/** Represents the base class of linear and oval gauges. */
	class BaseGauge
	{
		/** Registers a single event listener with the Diagram.
		 * @param eventName The name of the event; a member of the Events class.
		 * @param handler Represents the method that will handle the event specified with eventName.
		 * @param element 
		*/
		addEventListener(eventName: string, handler: any, element?: any): void;
		/** Removes a single event listener attached to the Diagram.
		 * @param eventName The name of the event; a member of the Events class.
		 * @param handler Represents the method that will handle the event specified with eventName.
		*/
		removeEventListener(eventName: string, handler: any): void;
		/** Repaints the gauge. */
		repaint(): void;
		/** Sets the width of the gauge.
		 * @param value The width.
		*/
		setWidth(value: number): void;
		/** Sets the height of the gauge.
		 * @param value The height.
		*/
		setHeight(value: number): void;
		handleMouse(action: MouseAction, point: MindFusion.Drawing.Point): void;
		/** Returns the VisualElement object corresponding to the specified name.
		 * @param name The name of the object to find.
		*/
		getElementByName(name: string): VisualElement;
		/** A list of scale objects. */
		scales: Array<BaseScale>;
		stopRepaint: boolean;
		/** Adds a scale to the gauge.
		 * @param scale The scale to add.
		*/
		addScale(scale: BaseScale): void;
		/** Removes a scale from the gauge.
		 * @param scale The scale to remove.
		*/
		removeScale(scale: BaseScale): void;
		fromJson(json: any): void;
		toJson(): any;
		dispose(): void;
	}
	/** Represents a linear gauge control. */
	class LinearGauge extends BaseGauge
	{
		/** Creates and initializes a new LinearGauge from the specified element. 
		 * @param element The DOM element that the LinearGauge should be attached to.
		 * @param parentEvents 
		*/
		static create(element: any, parentEvents: boolean): LinearGauge;
		/** Gets the orientation of the gauge. */
		getOrientation(): Orientation;
		/** Sets the orientation of the gauge. */
		setOrientation(value: Orientation): void;
		/** Returns the specified LinearGauge object.
		 * @param id A string that contains the ID of the LinearGauge to find.
		 * @param parent The component or element that contains the LinearGauge to find.
		*/
		static find(id: string, parent?: any): LinearGauge;
	}
	/** Represents a circular gauge control. */
	class OvalGauge extends BaseGauge
	{
		/** Creates and initializes a new OvalGauge from the specified element. 
		 * @param element The DOM element that the OvalGauge should be attached to.
		 * @param parentEvents 
		*/
		static create(element: any, parentEvents: boolean): OvalGauge;
		/** Gets the visual style of the gauge. */
		getStyle(): OvalGaugeStyle;
		/** Sets the visual style of the gauge. */
		setStyle(value: OvalGaugeStyle): void;
		/** Returns the specified OvalGauge object.
		 * @param id A string that contains the ID of the OvalGauge to find.
		 * @param parent The component or element that contains the OvalGauge to find.
		*/
		static find(id: string, parent?: any): OvalGauge;
	}
	/** Represents a scale within a gauge control. */
	class BaseScale extends VisualElement
	{
		/** Adds a Pointer object to the pointers collection.
		 * @param pointer The pointer to add.
		*/
		addPointer(pointer: Pointer): void;
		/** Removes a Pointer object from the pointers collection.
		 * @param pointer The pointer to remove.
		*/
		removePointer(pointer: Pointer): void;
		/** Adds a Range object to the ranges collection.
		 * @param range The range to add.
		*/
		addRange(range: Range): void;
		/** Removes a Range object from the ranges collection.
		 * @param range The range to remove.
		*/
		removeRange(range: Range): void;
		/** Gets the settings for the major ticks and their associated labels. */
		majorTickSettings: TickSettings;
		/** Gets the settings for the middle ticks and their associated labels. */
		middleTickSettings: TickSettings;
		/** Gets the settings for the minor ticks and their associated labels. */
		minorTickSettings: TickSettings;
		/** A list of pointer objects. */
		pointers: Array<Pointer>;
		/** A list of range objects. */
		ranges: Array<Range>;
		/** Gets the minimal value displayed by the scale. */
		getMinValue(): number;
		/** Sets the minimal value displayed by the scale. */
		setMinValue(value: number): void;
		/** Gets the maximal value displayed by the scale. */
		getMaxValue(): number;
		/** Sets the maximal value displayed by the scale. */
		setMaxValue(value: number): void;
		/** Gets the width of the scale at its beginning. */
		getStartWidth(): Length;
		/** Sets the width of the scale at its beginning. */
		setStartWidth(value: Length): void;
		/** Gets the width of the scale at its end. */
		getEndWidth(): Length;
		/** Sets the width of the scale at its end. */
		setEndWidth(value: Length): void;
		/** Gets the logarithm base when FunctionType is set to Logarithmic. */
		getLogarithmBase(): number;
		/** Sets the logarithm base when FunctionType is set to Logarithmic. */
		setLogarithmBase(value: number): void;
		/** Gets the type of the function used to calculate the distribution of values along the scale. */
		getFunctionType(): FunctionType;
		/** Sets the type of the function used to calculate the distribution of values along the scale. */
		setFunctionType(value: FunctionType): void;
		/** Gets the argument passed to custom functions. */
		getFunctionArgument(): number;
		/** Sets the argument passed to custom functions. */
		setFunctionArgument(value: number): void;
		/** Gets the function to be used for distribution of values along the scale when functionType is set to Custom. */
		getCustomFunction(): Function;
		/** Sets the function to be used for distribution of values along the scale when functionType is set to Custom. */
		setCustomFunction(value: Function): void;
		/** Gets the reversed version of the function specified through customFunction. */
		getReversedCustomFunction(): Function;
		/** Sets the reversed version of the function specified through customFunction. */
		setReversedCustomFunction(value: Function): void;
		updateTicksAndLabels(): void;
	}
	/** Represents a linear scale. */
	class LinearScale extends BaseScale
	{
		/** Creates an instance of LinearScale.
		 * @param parent The gauge control this scale belongs to.
		*/
		constructor(parent?: LinearGauge);
		/** Gets the length of the scale. */
		getScaleLength(): Length;
		/** Sets the length of the scale. */
		setScaleLength(value: Length): void;
		/** Gets the alignment of the scale. */
		getScaleAlignment(): Alignment;
		/** Sets the alignment of the scale. */
		setScaleAlignment(value: Alignment): void;
		/** Gets the orientation of the scale. */
		getOrientation(): Orientation;
		/** Sets the orientation of the scale. */
		setOrientation(value: Orientation): void;
		/** Gets the distance between the left of this scale and the left of its container. */
		getLeft(): Length;
		/** Sets the distance between the left of this scale and the left of its container. */
		setLeft(value: Length): void;
		/** Gets the distance between the top of this scale and the top of its container. */
		getTop(): Length;
		/** Sets the distance between the top of this scale and the top of its container. */
		setTop(value: Length): void;
	}
	/** Represents a radial scale. */
	class OvalScale extends BaseScale
	{
		/** Creates an instance of OvalScale.
		 * @param parent The gauge control this scale belongs to.
		*/
		constructor(parent?: OvalGauge);
		/** Gets the center of the scale relative to the scale bounds. */
		getScaleRelativeCenter(): MindFusion.Drawing.Point;
		/** Sets the center of the scale relative to the scale bounds. */
		setScaleRelativeCenter(value: MindFusion.Drawing.Point): void;
		/** Gets the radius of the scale relative to the scale bounds. */
		getScaleRelativeRadius(): number;
		/** Sets the radius of the scale relative to the scale bounds. */
		setScaleRelativeRadius(value: number): void;
		/** Gets the start angle of the scale. */
		getStartAngle(): number;
		/** Sets the start angle of the scale. */
		setStartAngle(value: number): void;
		/** Gets the end angle of the scale. */
		getEndAngle(): number;
		/** Sets the end angle of the scale. */
		setEndAngle(value: number): void;
	}
	/** Represents an object with outline and fill, which can render itself to a canvas. */
	class VisualElement
	{
		fill: any;
		stroke: any;
		/** Gets the name of this element. */
		getName(): string;
		/** Sets the name of this element. */
		setName(value: string): void;
		/** Gets the fill of this element. */
		getFill(): any;
		/** Sets the fill of this element. */
		setFill(value: any): void;
		/** Gets the stroke of this element. */
		getStroke(): any;
		/** Sets the stroke of this element. */
		setStroke(value: any): void;
		/** Gets a value indicating whether this element is visible. */
		getIsVisible(): boolean;
		/** Sets a value indicating whether this element is visible. */
		setIsVisible(value: boolean): void;
		/** Gets the margin of this element. */
		getMargin(): Thickness;
		/** Sets the margin of this element. */
		setMargin(value: Thickness): void;
		/** Gets the normalized x position of this element, relative to its parent. */
		getX(): number;
		/** Sets the normalized x position of this element, relative to its parent. */
		setX(value: number): void;
		/** Gets the normalized y position of this element, relative to its parent. */
		getY(): number;
		/** Sets the normalized y position of this element, relative to its parent. */
		setY(value: number): void;
		/** Gets the bounding rectangle of this element. */
		getBounds(): MindFusion.Drawing.Rect;
		/** Sets the bounding rectangle of this element. */
		setBounds(value: MindFusion.Drawing.Rect): void;
		/** Gets the size of this element. */
		getSize(): MindFusion.Drawing.Size;
		/** Sets the size of this element. */
		setSize(value: MindFusion.Drawing.Size): void;
		/** Gets a value indicating whether the metrics of this element are expressed as relative or absolute quantities. */
		getRelativeCoordinates(): boolean;
		/** Sets a value indicating whether the metrics of this element are expressed as relative or absolute quantities. */
		setRelativeCoordinates(value: boolean): void;
		/** Gets the rendering size of this element. */
		getRenderSize(): MindFusion.Drawing.Size;
		/** Sets the rendering size of this element. */
		setRenderSize(value: MindFusion.Drawing.Size): void;
	}
	/** Represents a needle (or arrow) within a gauge scale. */
	class Pointer extends VisualElement
	{
		/** Initializes a new instance of the Pointer class. */
		constructor();
		isInteractive: boolean;
		/** Gets the value this pointer points to. */
		getValue(): number;
		/** Sets the value this pointer points to. */
		setValue(value: number): void;
		/** Gets a value indicating whether the pointer position should be affected by user interactions. */
		getIsInteractive(): boolean;
		/** Sets a value indicating whether the pointer position should be affected by user interactions. */
		setIsInteractive(value: boolean): void;
		/** Gets the width of the pointer. */
		getPointerWidth(): Length;
		/** Sets the width of the pointer. */
		setPointerWidth(value: Length): void;
		/** Gets the height of the pointer. */
		getPointerHeight(): Length;
		/** Sets the height of the pointer. */
		setPointerHeight(value: Length): void;
		/** Gets the offset of the pointer along the direction it points to. */
		getPointerOffset(): Length;
		/** Sets the offset of the pointer along the direction it points to. */
		setPointerOffset(value: Length): void;
		/** Gets the alignment of the pointer relative to the scale. */
		getAlignment(): Alignment;
		/** Sets the alignment of the pointer relative to the scale. */
		setAlignment(value: Alignment): void;
		/** Gets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer). */
		getIsDiscrete(): boolean;
		/** Sets a value indicating whether the pointer value can be changed only discretely(the pointer Value can be only integer). */
		setIsDiscrete(value: boolean): void;
		/** Gets the shape of the pointer. */
		getShape(): PointerShape;
		/** Sets the shape of the pointer. */
		setShape(value: PointerShape): void;
		/** Gets the definition of the pointer shape when Shape is set to Custom. */
		getCustomShape(): string;
		/** Sets the definition of the pointer shape when Shape is set to Custom. */
		setCustomShape(value: string): void;
	}
	/** Represents a range within a gauge scale. */
	class Range extends VisualElement
	{
		/** Initializes a new instance of the Range class. */
		constructor();
		/** Gets the start value of this range. */
		getMinValue(): number;
		/** Sets the start value of this range. */
		setMinValue(value: number): void;
		/** Gets the end value of this range. */
		getMaxValue(): number;
		/** Sets the end value of this range. */
		setMaxValue(value: number): void;
		/** Gets the alignment of this range relative to the scale it is associated with. */
		getAlignment(): Alignment;
		/** Sets the alignment of this range relative to the scale it is associated with. */
		setAlignment(value: Alignment): void;
		/** Gets the width of this range at its start. */
		getStartWidth(): Length;
		/** Sets the width of this range at its start. */
		setStartWidth(value: Length): void;
		/** Gets the width of this range at its end. */
		getEndWidth(): Length;
		/** Sets the width of this range at its end. */
		setEndWidth(value: Length): void;
		/** Gets the offset of the range from the position calculated according to its alignment. */
		getOffset(): Length;
		/** Sets the offset of the range from the position calculated according to its alignment. */
		setOffset(value: Length): void;
		/** Gets a value indicating whether to draw a stroke in the beginning of this range. */
		getCapStart(): boolean;
		/** Sets a value indicating whether to draw a stroke in the beginning of this range. */
		setCapStart(value: boolean): void;
		/** Gets a value indicating whether to draw a stroke in the end of this range. */
		getCapEnd(): boolean;
		/** Sets a value indicating whether to draw a stroke in the end of this range. */
		setCapEnd(value: boolean): void;
		/** Gets a value indicating whether to draw a stroke at the inside of this range. */
		getStrokeInside(): boolean;
		/** Sets a value indicating whether to draw a stroke at the inside of this range. */
		setStrokeInside(value: boolean): void;
		/** Gets a value indicating whether to draw a stroke at the outside of this range. */
		getStrokeOutside(): boolean;
		/** Sets a value indicating whether to draw a stroke at the outside of this range. */
		setStrokeOutside(value: boolean): void;
		/** Gets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale. */
		getAutoSize(): boolean;
		/** Sets a value indicating whether the start and end width of the range will be automatically adjusted to match the width of the scale. */
		setAutoSize(value: boolean): void;
	}
	/** Specifies distance expressed either absolutely, through pixels, or relatively, through a percentage of the container's size. */
	class Length
	{
		/** Creates an instance of Length class.
		 * @param value A number specifying the initial length value.
		 * @param type A member of the LengthType enumeration specifying the length type.
		*/
		constructor(value: number, type?: LengthType);
		/** Calculates the absolute length corresponding to the specified argument, relative to the the specified area.
		 * @param space 
		*/
		getAbsoluteLength(space: number): any;
		/** Gets the value representing this length. */
		getValue(): number;
		/** Sets the value representing this length. */
		setValue(value: number): void;
		/** Gets the type of this length. */
		getType(): LengthType;
		/** Sets the type of this length. */
		setType(value: LengthType): void;
	}
	/** Indicates the type of the units of a Length object. */
	enum LengthType
	{
		/** Specifies absolute length, expressed in pixels. */
		Absolute = 0,
		/** Specifies relative length, expressed as a percentage of the container's size. */
		Relative = 1
	}
	/** Specifies the orientation of elements. */
	enum Orientation
	{
		/** The element is oriented horizontally. */
		Horizontal = 0,
		/** The element is oriented vertically. */
		Vertical = 1
	}
	/** Specifies an action performed with the mouse. */
	enum MouseAction
	{
		/** Indicates the release of a mouse button. */
		Up = 0,
		/** Indicates the press of a mouse button. */
		Down = 1,
		/** Indicates the move of a mouse. */
		Move = 2
	}
	/** Indicates an alignment of an object relative to the scale. */
	enum Alignment
	{
		/** Specifies that the outbound of an object is aligned with the inbound of the scale. */
		InnerInside = 0,
		/** Specifies that the center of an object is aligned with the inbound of the scale. */
		InnerCenter = 1,
		/** Specifies that the inbound of an object is aligned with the inbound of the scale. */
		InnerOutside = 2,
		/** Specifies that the outbound of an object is aligned with the outbound of the scale. */
		OuterInside = 3,
		/** Specifies that the center of an object is aligned with the outbound of the scale. */
		OuterCenter = 4,
		/** Specifies that the inbound of an object is aligned with the outbound of the scale. */
		OuterOutside = 5,
		/** Specifies that the outbound of an object is aligned with the center of the scale. */
		CenterInside = 6,
		/** Specifies that the center of an object is aligned with the center of the scale. */
		TrueCenter = 7,
		/** Specifies that the outbound of an object is aligned with the center of the scale. */
		CenterOutside = 8
	}
	/** Indicates the shape of a scale tick. */
	enum TickShape
	{
		/** Specifies an empty shape, that is, the tick is not displayed. */
		None = 0,
		/** Specifies a custom shape. */
		Custom = 1,
		/** Specifies an elliptical shape. */
		Ellipse = 2,
		/** Specifies an rectangular shape. */
		Rectangle = 3,
		/** Specifies a rounded rectangle as a shape. */
		RoundRect = 4,
		/** Specifies a rhombus as a shape. */
		Rhombus = 5,
		/** Specifies a line as a shape. */
		Line = 6,
		/** Specifies a triangular shape.. */
		Triangle = 7,
		/** Specifies an arrow shape. */
		Arrow1 = 8,
		/** Specifies an arrow shape. */
		Arrow2 = 9,
		/** Specifies an arrow shape. */
		Arrow3 = 10
	}
	/** Indicates the rotation of a label within a scale. */
	enum LabelRotation
	{
		/** Specifies no rotation. */
		None = 0,
		/** Specifies that the labels are automatically rotated so that their baseline always points downwards. */
		Auto = 1,
		/** Specifies that the labels are rotated so that their baseline points towards the center of the scale. */
		BaselineToCenter = 0,
		/** Specifies that the labels are rotated so that their baseline points away from the center of the scale. */
		BaselineAwayFromCenter = 1,
		/** Specifies that the labels are aligned sideways to the scale. */
		Sideways = 1
	}
	/** Specifies the pointer shape. */
	enum PointerShape
	{
		/** Specifies an empty shape, that is, the pointer is not displayed. */
		None = 0,
		/** Specifies a custom shape. */
		Custom = 1,
		/** Specifies a sharp pointer with a circle at its base. */
		Needle = 2,
		/** Specifies a sharp pointer with a circle at its base. */
		Needle2 = 3,
		/** Specifies an elliptical shape. */
		Ellipse = 4,
		/** Specifies a rectangular shape. */
		Rectangle = 5
	}
	/** Specifies the appearance of an oval gauge. */
	enum OvalGaugeStyle
	{
		/** Indicates a regular circular appearance. */
		Circular = 0,
		/** Indicates a quadratic appearance with the scales oriented towards North-East. */
		QuadraticNE = 1,
		/** Indicates a quadratic appearance with the scales oriented towards North-West. */
		QuadraticNW = 2,
		/** Indicates a quadratic appearance with the scales oriented towards South-East. */
		QuadraticSE = 3,
		/** Indicates a quadratic appearance with the scales oriented towards South-West. */
		QuadraticSW = 4,
		/** Indicates a semi-circular appearance with the scales oriented towards North. */
		SemicircleN = 5,
		/** Indicates a semi-circular appearance with the scales oriented towards East. */
		SemicircleE = 6,
		/** Indicates a semi-circular appearance with the scales oriented towards South. */
		SemicircleS = 7,
		/** Indicates a semi-circular appearance with the scales oriented towards West. */
		SemicircleW = 8
	}
	/** Indicates the type of function that will be used to distribute values along the gauge scale. */
	enum FunctionType
	{
		/** Specifies that the values will be distributed linearly. */
		Linear = 0,
		/** Specifies a logarithmic function with base specified by the LogarithmBase property. */
		Logarithmic = 1,
		/** Specifies a user defined function, which will be supplied by the CustomFunction property. */
		Custom = 2
	}
	/** Represents an interval with associated custom values for fill and stroke. */
	class CustomInterval
	{
		/** Creates an instance of CustomInterval class. */
		constructor();
		/** Checks whether the specified value falls within this interval.
		 * @param value 
		*/
		contains(value: number): boolean;
		/** Gets the start of this custom interval. */
		getMinValue(): number;
		/** Sets the start of this custom interval. */
		setMinValue(value: number): void;
		/** Gets the end of this custom interval. */
		getMaxValue(): number;
		/** Sets the end of this custom interval. */
		setMaxValue(value: number): void;
		/** Gets the brush to apply as a background of the elements within the custom interval. */
		getFill(): any;
		/** Sets the brush to apply as a background of the elements within the custom interval. */
		setFill(value: any): void;
		/** Gets the brush to apply as an outline of the elements within the custom interval. */
		getStroke(): any;
		/** Sets the brush to apply as an outline of the elements within the custom interval. */
		setStroke(value: any): void;
		/** Gets the color to apply as a foreground to the elements within this custom interval. */
		getForeground(): any;
		/** Sets the color to apply as a foreground to the elements within this custom interval. */
		setForeground(value: any): void;
	}
	/** Represents a connected series of geometric segments. */
	class PathFigure extends VisualElement
	{
		/** Creates an instance of PathFigure class.
		 * @param data The path data string.
		*/
		constructor(data: string);
	}
	/** Describes the thickness on all four sides of a rectangular frame. */
	class Thickness
	{
		/** Creates an instance of Thickness class.
		 * @param left The width of the left side of the frame.
		 * @param top The width of the top side of the frame.
		 * @param right The width of the right side of the frame.
		 * @param bottom The width of the bottom side of the frame.
		 * @param isRelative A flag indicating whether the thickness properties are expressed as relative or absolute quantities.
		*/
		constructor(left: number, top?: number, right?: number, bottom?: number, isRelative?: boolean);
		/** Converts the current thickness to absolute value relative to the specified size.
		 * @param size 
		*/
		toAbsolute(size: MindFusion.Drawing.Size): Thickness;
		/** Applies the current thickness to the specified rectangle by deflating the rectangle.
		 * @param rect The rectangle to deflate.
		*/
		apply(rect: MindFusion.Drawing.Rect): MindFusion.Drawing.Rect;
		/** Gets the width of the left side of the frame. */
		getLeft(): number;
		/** Gets the width of the top side of the frame. */
		getTop(): number;
		/** Gets the width of the right side of the frame. */
		getRight(): number;
		/** Gets the width of the bottom side of the frame. */
		getBottom(): number;
	}
	/** Represents an intersection of two ellipses. */
	class ArcArea extends VisualElement
	{
		/** Creates an instance of ArcArea class. */
		constructor();
		/** Gets the start angle of the arc. */
		getStartAngle(): number;
		/** Sets the start angle of the arc. */
		setStartAngle(value: number): void;
		/** Gets the end angle of the arc. */
		getEndAngle(): number;
		/** Sets the end angle of the arc. */
		setEndAngle(value: number): void;
	}
	/** Represents an ellipse visual. */
	class Ellipse extends VisualElement
	{
		/** Creates an instance of Ellipse class. */
		constructor();
	}
	/** Represents a rounded rectangle. */
	class RoundRectangle extends VisualElement
	{
		/** Creates an instance of RoundRectangle class. */
		constructor();
		/** Gets the relative roundness of this rectangle's corners. */
		getRoundness(): number;
		/** Sets the relative roundness of this rectangle's corners. */
		setRoundness(value: number): void;
	}
	/** Represents a tick mark within a gauge scale. */
	class Tick extends VisualElement
	{
		/** Creates an instance of Tick class.
		 * @param settings The TickSettings object associated with this tick.
		*/
		constructor(settings: TickSettings);
		/** Gets the value associated with this tick. */
		getValue(): number;
		/** Gets the value associated with this tick before it was processed by any value distribution functions. */
		getRawValue(): number;
		/** Gets the TickSettings object associated with this tick. */
		getSettings(): TickSettings;
	}
	/** Represents a tick label within a gauge scale. */
	class TickLabel extends VisualElement
	{
		/** Creates an instance of TickLabel class.
		 * @param settings The TickSettings object associated with this label.
		*/
		constructor(settings: TickSettings);
		/** Gets the value associated with this label. */
		getValue(): number;
		/** Gets the value associated with this label before it was processed by any value distribution functions. */
		getRawValue(): number;
		/** Gets the TickSettings object associated with this label. */
		getSettings(): TickSettings;
		/** Gets the foreground color of this label */
		getForeground(): any;
	}
	/** Defines all events raised by the gauge components. */
	class Events
	{
		/** Raised when the control is loaded. */
		static controlLoaded: string;
		/** Raised before the gauge is painted */
		static prepaint: string;
		/** Raised before the gauge background is painted. */
		static prepaintBackground: string;
		/** Raised before the gauge foreground is painted. */
		static prepaintForeground: string;
		/** Raised before a gauge scale is painted. */
		static prepaintScale: string;
		/** Raised before a gauge tick is painted. */
		static prepaintTick: string;
		/** Raised before a gauge pointer is painted. */
		static prepaintPointer: string;
		/** Raised when a gauge is being painted. */
		static paint: string;
		/** Raised when a gauge background is being painted. */
		static paintBackground: string;
		/** Raised when a gauge foreground is being painted. */
		static paintForeground: string;
		/** Raised when a gauge scale is being painted. */
		static paintScale: string;
		/** Raised when a gauge tick is being painted. */
		static paintTick: string;
		/** Raised when a gauge pointer is being painted. */
		static paintPointer: string;
		/** Raised when the value of a pointer is being changed interactively. */
		static valueChanging: string;
		/** Raised when the value of a pointer has changed interactively. */
		static valueChanged: string;
	}
	/** Provides data for the various custom painting event. */
	class PaintEventArgs extends MindFusion.EventArgs
	{
		/** Creates an instance of PaintEventArgs class.
		 * @param args An object containing event data.
		*/
		constructor(args: any);
		/** Paints the specified visual element to the underlying canvas.
		 * @param element The VisualElement to paint.
		 * @param constraint The available size.
		*/
		paintVisualElement(element: VisualElement, constraint: MindFusion.Drawing.Size): void;
		/** Gets the canvas rendering context. */
		getContext(): any;
		/** Gets the element being custom drawn. */
		getElement(): VisualElement;
		/** Sets the element being custom drawn. */
		setElement(value: VisualElement): void;
	}
	/** Provides data for various pre-paint events. */
	class PrepaintEventArgs extends PaintEventArgs
	{
		/** Creates an instance of PrepaintEventArgs class.
		 * @param args An object containing event data.
		*/
		constructor(args: any);
		/** Gets a value indicating whether the default painting of this element should be performed. */
		getCancelDefaultPainting(): boolean;
		/** Sets a value indicating whether the default painting of this element should be performed. */
		setCancelDefaultPainting(value: boolean): void;
	}
	/** Contains the arguments passed to value changed notification handlers. */
	class ValueChangedEventArgs extends MindFusion.EventArgs
	{
		/** Creates an instance of ValueChangedEventArgs class.
		 * @param oldValue The previous value of the changed property.
		 * @param newValue The current value of the changed property.
		*/
		constructor(oldValue: any, newValue: any);
		/**  Gets the previous value of the changed property. */
		getOldValue(): any;
		/**  Gets the new value of the changed property. */
		getNewValue(): any;
	}
	/** Contains the arguments passed to value changing notification handlers. */
	class ValueChangingEventArgs extends MindFusion.CancelEventArgs
	{
		/** Creates an instance of ValueChangingEventArgs class.
		 * @param oldValue The previous value of the changing property.
		 * @param newValue The current value of the changing property.
		*/
		constructor(oldValue: any, newValue: any);
		/**  Gets the previous value of the changing property. */
		getOldValue(): any;
		/**  Gets the new value of the changing property. */
		getNewValue(): any;
	}
	/** Utility methods for the gauge controls. */
	class Utils
	{
		/** Creates a linear gradient brush with the specified data.
		 * @param angle 
		 * @param params 
		*/
		static createLinearGradient(angle: number, params?: Array<any>): any;
		/** Creates a radial gradient brush with the specified data.
		 * @param center 
		 * @param radius 
		 * @param params 
		 * @param center2 
		 * @param radius2 
		*/
		static createRadialGradient(center: MindFusion.Drawing.Point, radius: number, params: any, center2: MindFusion.Drawing.Point, radius2: any): any;
		static getBrush(context: any, brush: any, bounds: any, isPen: any): any;
	}
	/** Provides settings for the ticks and labels in a gauge scale. */
	class TickSettings
	{
		fill: any;
		stroke: any;
		fontFamily: string;
		fontSize: Length;
		fontStyle: string;
		/** Gets the number of ticks and labels. */
		getCount(): number;
		/** Sets the number of ticks and labels. */
		setCount(value: number): void;
		/** Gets the value between adjacent ticks and labels. */
		getStep(): number;
		/** Sets the value between adjacent ticks and labels. */
		setStep(value: number): void;
		/** Gets the width of a tick. */
		getTickWidth(): Length;
		/** Sets the width of a tick. */
		setTickWidth(value: Length): void;
		/** Gets the height of a tick. */
		getTickHeight(): Length;
		/** Sets the height of a tick. */
		setTickHeight(value: Length): void;
		/** Gets the fill brush of the ticks. */
		getFill(): any;
		/** Sets the fill brush of the ticks. */
		setFill(value: any): void;
		/** Gets the stroke brush of the ticks. */
		getStroke(): any;
		/** Sets the stroke brush of the ticks. */
		setStroke(value: any): void;
		/** Gets a value indicating whether the ticks are visible. */
		getShowTicks(): boolean;
		/** Sets a value indicating whether the ticks are visible. */
		setShowTicks(value: boolean): void;
		/** Gets a value indicating whether the labels are visible. */
		getShowLabels(): boolean;
		/** Sets a value indicating whether the labels are visible. */
		setShowLabels(value: boolean): void;
		/** Gets the shape of the ticks. */
		getTickShape(): TickShape;
		/** Sets the shape of the ticks. */
		setTickShape(value: TickShape): void;
		/** Gets the alignment of the ticks. */
		getTickAlignment(): Alignment;
		/** Sets the alignment of the ticks. */
		setTickAlignment(value: Alignment): void;
		/** Gets the offset of the ticks relative to their calculated position. */
		getTickOffset(): Length;
		/** Sets the offset of the ticks relative to their calculated position. */
		setTickOffset(value: Length): void;
		/** Gets the alignment of the labels. */
		getLabelAlignment(): Alignment;
		/** Sets the alignment of the labels. */
		setLabelAlignment(value: Alignment): void;
		/** Gets the offset of the labels relative to their calculated position. */
		getLabelOffset(): Length;
		/** Sets the offset of the labels relative to their calculated position. */
		setLabelOffset(value: Length): void;
		/** Gets the rotation mode of the labels. */
		getLabelRotation(): LabelRotation;
		/** Sets the rotation mode of the labels. */
		setLabelRotation(value: LabelRotation): void;
		/** Gets the number recision of the labels. */
		getNumberPrecision(): number;
		/** Sets the number recision of the labels. */
		setNumberPrecision(value: number): void;
		/** Gets the font family of the labels. */
		getFontFamily(): string;
		/** Sets the font family of the labels. */
		setFontFamily(value: string): void;
		/** Gets the font size of the labels. */
		getFontSize(): Length;
		/** Sets the font size of the labels. */
		setFontSize(value: Length): void;
		/** Gets the font style of the labels. */
		getFontStyle(): string;
		/** Sets the font style of the labels. */
		setFontStyle(value: string): void;
		/** Gets the brush used to paint label texts. */
		getLabelForeground(): any;
		/** Sets the brush used to paint label texts. */
		setLabelForeground(value: any): void;
		/** Gets a value indicating whether to display a tick for the maxValue of the scale. */
		getShowMaxValueTick(): boolean;
		/** Sets a value indicating whether to display a tick for the maxValue of the scale. */
		setShowMaxValueTick(value: boolean): void;
		/** Gets an array of CustomInterval objects, which can be used to customize the appearance of the ticks in a particular interval. */
		getCustomIntervals(): Array<CustomInterval>;
		/** Adds a CustomInterval object to these settings' customIntervals collection.
		 * @param interval The interval to add.
		*/
		addCustomInterval(interval: CustomInterval): void;
		/** Removes a CustomInterval object from these settings' customIntervals collection.
		 * @param interval The interval to remove.
		*/
		removeCustomInterval(interval: CustomInterval): void;
	}
}

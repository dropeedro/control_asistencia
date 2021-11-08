/// <reference path="./mindfusion-common/jscommon.d.ts" />
/// <reference path="./mindfusion-common/modules/jscommon.d.ts" />

// Type definitions for MindFusion.Mapping for JavaScript
// Project: https://www.mindfusion.eu/javascript-pack.html
// Definitions by: MindFusion <https://www.mindfusion.eu>

// Copyright (c) 2019-2020, MindFusion LLC - Bulgaria.

declare module "mapping-library"
{
export = MindFusion.Mapping;
}

declare namespace MindFusion.Mapping
{
	/** A base class for UI controls. */
	class UIControl extends MindFusion.Common.Control
	{
	}
	/** Specifies the pivot point of the mouse wheel zoom in a MapView control. */
	enum ZoomPivot
	{
		/** The zoom pivot point is the current cursor position. */
		Cursor = 0,
		/** The zoom pivot point is the center of the map. */
		Center = 1
	}
	/** Specifies a location in a geographic coordinate system. */
	class LatLong
	{
		/** Initializes a new instance of the LatLong class.
		 * @param latitude The latitude of the location.
		 * @param longitude The longitude of the location.
		*/
		constructor(latitude: number, longitude: number);
		/** Gets the latitude of the location. */
		latitude: number;
		/** Gets the longitude of the location. */
		longitude: number;
	}
	/** Specifies a rectangular area in a geographic coordinate system. */
	class LatLongRect
	{
		/** Initializes a new instance of the LatLongRect class.
		 * @param minLatitude The minimum latitude of the area.
		 * @param minLongitude The minimum longitude of the area.
		 * @param maxLatitude The maximum latitude of the area.
		 * @param maxLongitude The maximum longitude of the area.
		*/
		constructor(minLatitude: number, minLongitude: number, maxLatitude: number, maxLongitude: number);
		/** Gets the minimum latitude of the area. */
		minLatitude: number;
		/** Gets the minimum longitude of the area. */
		minLongitude: number;
		/** Gets the maximum latitude of the area. */
		maxLatitude: number;
		/** Gets the maximum longitude of the area. */
		maxLongitude: number;
		/** Creates a LatLongRect instance from center coordinate and size.
		 * @param location The center coordinate.
		 * @param size The size in meters.
		*/
		static fromCenter(location: number, size: MindFusion.Drawing.Size): LatLongRect;
	}
	/** Represents a decoration element drawn over the map. */
	class Decoration
	{
		/** Initializes a new instance of the Decoration class.
		 * @param location The location of this decoration in geographical coordinates.
		*/
		constructor(location?: LatLong);
		/** Gets or sets the location of this decoration. */
		location: LatLong;
		/** Gets or sets the text of this decoration. */
		text: string;
		/** Gets or sets visibility of this decoration. */
		visible: boolean;
		/** Gets or sets client offset of this decoration. */
		offset: MindFusion.Drawing.Point;
		/** Gets or sets the css class of this decoration. */
		cssClass: string;
		/** Gets a reference to the decoration DOM element. */
		element: HTMLDivElement;
		/** Gets or sets the string identifier of this decoration. */
		id: string;
		/** Gets or sets an object, holding custom user data. */
		data: string;
	}
	/** Represents an image decoration. */
	class Marker extends Decoration
	{
		/** Gets or sets the URL of the image displayed by this marker. */
		imageSrc: string;
	}
	/** Represents an circle decoration. */
	class CircleMarker extends Decoration
	{
		/** Initializes a new instance of the CircleMarker class.
		 * @param location The location of this marker in geographical coordinates.
		 * @param radius The radius of this marker in meters.
		*/
		constructor(location?: LatLong, radius?: number);
		/** Gets or sets the radius of this marker in meters. */
		radius: number;
	}
	/** Represents a text decoration. */
	class Bubble extends Decoration
	{
		/** Initializes a new instance of the Bubble class.
		 * @param location The location of this decoration in geographical coordinates.
		 * @param text The text of this bubble.
		*/
		constructor(location?: LatLong, text?: string);
		/** Gets or sets a value indicating whether this bubble can display multiline text. */
		multiline: boolean;
	}
	/** Represents a layer containing map tiles. */
	class MapLayer
	{
		/** Initializes a new instance of the MapLayer class.
		 * @param id The id of this layer.
		*/
		constructor(id?: string);
		/** Gets the id of this layer. */
		id: string;
		/** Gets the parent control of this layer. */
		parent: MapView;
		/** Gets or sets the template string of the tile server URL. */
		urlTemplate: string;
		/** Gets or sets the attribution HTML of the layer. */
		attribution: string;
	}
	/** Represents a layer containing decoration elements. */
	class DecorationLayer
	{
		/** Initializes a new instance of the DecorationLayer class.
		 * @param id The id of this layer.
		*/
		constructor(id?: string);
		/** Gets the id of this layer. */
		id: string;
		/** Gets the parent control of this layer. */
		parent: MapView;
		/** Gets the collection of decorations, displayed by this layer. */
		decorations: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the collection of markers, displayed by this layer. */
		markers: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the collection of bubbles, displayed by this layer. */
		bubbles: MindFusion.Common.Collections.ObservableCollection;
		/** Gets or sets the visibility of this layer. */
		visible: boolean;
	}
	/** Represents a container for map layers. */
	class MapView extends UIControl
	{
		/** Initializes a new instance of the MapView class.
		 * @param element The control's associated Dom element.
		*/
		constructor(element?: HTMLElement);
		/** Gets the collection of all layers. */
		layers: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the collection of map layers. */
		mapLayers: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the collection of decoration layers. */
		overlays: MindFusion.Common.Collections.ObservableCollection;
		/** Gets the default decorations collection. */
		decorations: MindFusion.Common.Collections.ObservableCollection;
		/** Gets or sets the zoom level of the map. */
		zoomLevel: number;
		/** Gets or sets the minimum zoom of the map. */
		minZoomLevel: number;
		/** Gets or sets the maximum zoom of the map. */
		maxZoomLevel: number;
		/** Gets or sets the zoom step. */
		zoomStep: number;
		/** Gets the geographical center of a loaded map. */
		mapCenter: LatLong;
		/** Gets or sets the active map layer. */
		activeLayer: MapLayer;
		/** Gets or sets a value indicating whether drag panning is enabled. */
		allowPan: boolean;
		/** Gets or sets a value indicating whether mouse wheel zooming is enabled. */
		allowZoom: boolean;
		/** Gets or sets the visibility of the built-in zoom controller. */
		showZoomController: boolean;
		/** Gets or sets the visibility of the built-in layer controller. */
		showLayerController: boolean;
		/** Gets the map's horizontal scroll position relative to the control bounds. */
		scrollX: number;
		/** Gets the map's vertical scroll position relative to the control bounds. */
		scrollY: number;
		/** Gets or sets the zoom pivot point of the mouse wheel zoom. */
		zoomPivot: ZoomPivot;
		/** Gets or sets the geographical bounds of the map. */
		mapBounds: LatLongRect;
		/** Loads all layers.
		 * @param center A LatLong instance representing the georgaphical center of the map.
		 * @param zoomLevel The zoom level of the map.
		*/
		load(center: LatLong, zoomLevel?: number): void;
		/** Loads decoration layers. */
		loadOverlays(): void;
		/** Gets the list of decoration at a specified client position.
		 * @param point The point to test.
		*/
		getDecorationsAt(point: MindFusion.Drawing.Point): Array<Decoration>;
		/** Converts the specified client point to geographic coordinates.
		 * @param point The client point to convert.
		*/
		clientToLatLong(point: MindFusion.Drawing.Point): LatLong;
		/** Converts the specified geographic coordinates to a client position.
		 * @param location The location to convert.
		*/
		latLongToClient(location: LatLong): MindFusion.Drawing.Point;
		/** Pans the map to a new center location.
		 * @param center A LatLong instance representing the geographic location of the new map center.
		*/
		panTo(center: LatLong): void;
		/** Scrolls the map to a new center point.
		 * @param center A Point instance representing the client position of the new map center.
		*/
		scrollTo(center: MindFusion.Drawing.Point): void;
		/** Scrolls the map by the specified amount.
		 * @param x The number of pixels to scroll horizontally.
		 * @param y The number of pixels to scroll vertically.
		*/
		scrollBy(x: number, y?: number): void;
		/** Raised when map view layers are loaded. */
		viewLoad: MindFusion.Common.EventDispatcher;
		/** Raised when all tiles in a map layer are loaded. */
		layerLoad: MindFusion.Common.EventDispatcher;
		/** Raised when the user clicks on the map surface. */
		click: MindFusion.Common.EventDispatcher;
		/** Raised when the user hovers over the map surface. */
		hover: MindFusion.Common.EventDispatcher;
		/** Raised when the user clicks on a decoration element. */
		decorationClick: MindFusion.Common.EventDispatcher;
		/** Raised when the user hovers over a decoration element. */
		decorationHover: MindFusion.Common.EventDispatcher;
	}
	/** Specifies data for map related events. */
	class MapEventArgs extends MindFusion.Common.EventArgs
	{
		/** Gets the geographic cooordinates related to the event. */
		location: LatLong;
		/** Gets the client position related to the event. */
		position: MindFusion.Drawing.Point;
		/** Gets the Javascript event data. */
		rawEventArgs: any;
	}
	/** Specifies data for map decoration related events. */
	class DecorationEventArgs extends MapEventArgs
	{
		/** Gets the decoration related to the event. */
		decoration: Decoration;
	}
	/** Represents a canvas layer, containing decoration drawings. */
	class CanvasLayer
	{
		/** Initializes a new instance of the CanvasLayer class.
		 * @param id The id of this layer.
		*/
		constructor(id?: string);
		/** Gets the id of this layer. */
		id: string;
		/** Gets the parent control of this layer. */
		parent: MapView;
		/** Gets the collection of decorations, displayed by this layer. */
		decorations: MindFusion.Common.Collections.ObservableCollection;
		/** Gets or sets the visibility of this layer. */
		visible: boolean;
	}
	/** Represents a decoration drawing. */
	class Drawing
	{
		/** Initializes a new instance of the Drawing class. */
		constructor();
		/** Gets or sets visibility of this decoration. */
		visible: boolean;
		/** Gets or sets the string identifier of this decoration. */
		id: string;
		/** Gets or sets an object, holding custom user data. */
		data: string;
		/** Gets or sets the text of this decoration. */
		text: string;
		/** Gets or sets the fill of this drawing */
		fill: any;
		/** Gets or sets stroke of this drawing. */
		stroke: any;
		/** Gets or sets the stroke thickness of this drawing. */
		strokeThickness: number;
		/** Gets or sets the stroke dash style of this drawing. */
		strokeDashStyle: MindFusion.Drawing.DashStyle;
		/** Gets or sets a value indicating whether stroke thickness is set in pixels. */
		pixelThickness: boolean;
	}
	/** Represents an circle drawing. */
	class Circle extends Drawing
	{
		/** Initializes a new instance of the Circle class.
		 * @param center The center of this drawing in geographical coordinates.
		 * @param radius The radius of this drawing.
		*/
		constructor(center?: LatLong, radius?: number);
		/** Gets or sets the center point of this drawing in geographical coordinates. */
		center: LatLong;
		/** Gets or sets the radius of this marker in meters. */
		radius: number;
		/** Gets or sets a value indicating whether the radius is set in pixels. */
		pixelRadius: boolean;
	}
	/** Represents a polyline drawing. */
	class Poly extends Drawing
	{
		/** Initializes a new instance of the Poly class.
		 * @param points The array of points in geographical coordinates.
		 * @param closed True if the drawing should be closed, otherwise false.
		*/
		constructor(points?: Array<LatLong>, closed?: boolean);
		/** Gets or sets the array of points in geographical coordinates. */
		points: Array<LatLong>;
		/** Gets or sets a value indicating whether the drawing should be closed. */
		closed: boolean;
		/** Gets or sets a value indicating whether to smooth the drawing vertices. */
		smooth: boolean;
	}
}

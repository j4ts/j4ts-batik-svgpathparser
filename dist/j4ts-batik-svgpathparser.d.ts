declare namespace org.apache.batik.ext.awt.geom {
    /**
     * Constructs a new <code>ExtendedGeneralPath</code> object with
     * the specified winding rule and the specified initial capacity
     * to store path coordinates.
     * @param {number} rule
     * @param {number} initialCapacity
     * @class
     */
    class ExtendedGeneralPath implements org.apache.batik.ext.awt.geom.ExtendedShape {
        /**
         * The enclosed general path.
         */
        path: GeneralPath;
        numVals: number;
        numSeg: number;
        values: number[];
        types: number[];
        mx: number;
        my: number;
        cx: number;
        cy: number;
        constructor(rule?: any, initialCapacity?: any);
        /**
         * Adds an elliptical arc, defined by two radii, an angle from the
         * x-axis, a flag to choose the large arc or not, a flag to
         * indicate if we increase or decrease the angles and the final
         * point of the arc.
         *
         * @param {number} rx the x radius of the ellipse
         * @param {number} ry the y radius of the ellipse
         *
         * @param {number} angle the angle from the x-axis of the current
         * coordinate system to the x-axis of the ellipse in degrees.
         *
         * @param {boolean} largeArcFlag the large arc flag. If true the arc
         * spanning less than or equal to 180 degrees is chosen, otherwise
         * the arc spanning greater than 180 degrees is chosen
         *
         * @param {boolean} sweepFlag the sweep flag. If true the line joining
         * center to arc sweeps through decreasing angles otherwise it
         * sweeps through increasing angles
         *
         * @param {number} x the absolute x coordinate of the final point of the arc.
         * @param {number} y the absolute y coordinate of the final point of the arc.
         */
        arcTo(rx: number, ry: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): void;
        /**
         * This constructs an unrotated Arc2D from the SVG specification of an
         * Elliptical arc.  To get the final arc you need to apply a rotation
         * transform such as:
         *
         * AffineTransform.getRotateInstance
         * (angle, arc.getX()+arc.getWidth()/2, arc.getY()+arc.getHeight()/2);
         * @param {number} x0
         * @param {number} y0
         * @param {number} rx
         * @param {number} ry
         * @param {number} angle
         * @param {boolean} largeArcFlag
         * @param {boolean} sweepFlag
         * @param {number} x
         * @param {number} y
         * @return {Arc2D}
         */
        static computeArc(x0: number, y0: number, rx: number, ry: number, angle: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): Arc2D;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         */
        moveTo(x: number, y: number): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         */
        lineTo(x: number, y: number): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         */
        quadTo(x1: number, y1: number, x2: number, y2: number): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} x3
         * @param {number} y3
         */
        curveTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         */
        closePath(): void;
        /**
         * Checks if previous command was a moveto command,
         * skipping a close command (if present).
         */
        checkMoveTo(): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {java.awt.Shape} s
         * @param {boolean} connect
         */
        append$java_awt_Shape$boolean(s: java.awt.Shape, connect: boolean): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {java.awt.Shape} s
         * @param {boolean} connect
         */
        append(s?: any, connect?: any): any;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {PathIterator} pi
         * @param {boolean} connect
         */
        append$java_awt_geom_PathIterator$boolean(pi: PathIterator, connect: boolean): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {org.apache.batik.ext.awt.geom.ExtendedPathIterator} epi
         * @param {boolean} connect
         */
        append$org_apache_batik_ext_awt_geom_ExtendedPathIterator$boolean(epi: org.apache.batik.ext.awt.geom.ExtendedPathIterator, connect: boolean): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} rule
         */
        setWindingRule(rule: number): void;
        /**
         * get the current position or <code>null</code>.
         * @return {Point2D}
         */
        getCurrentPoint(): Point2D;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         */
        reset(): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {AffineTransform} at
         */
        transform(at: AffineTransform): void;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {AffineTransform} at
         * @return {java.awt.Shape}
         */
        createTransformedShape(at: AffineTransform): java.awt.Shape;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @return {Rectangle2D}
         */
        getBounds2D(): Rectangle2D;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         * @return {boolean}
         */
        contains$double$double(x: number, y: number): boolean;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {Point2D} p
         * @return {boolean}
         */
        contains$java_awt_geom_Point2D(p: Point2D): boolean;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        contains(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {Rectangle2D} r
         * @return {boolean}
         */
        contains$java_awt_geom_Rectangle2D(r: Rectangle2D): boolean;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects$double$double$double$double(x: number, y: number, w: number, h: number): boolean;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {number} x
         * @param {number} y
         * @param {number} w
         * @param {number} h
         * @return {boolean}
         */
        intersects(x?: any, y?: any, w?: any, h?: any): any;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {Rectangle2D} r
         * @return {boolean}
         */
        intersects$java_awt_geom_Rectangle2D(r: Rectangle2D): boolean;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {AffineTransform} at
         * @return {PathIterator}
         */
        getPathIterator$java_awt_geom_AffineTransform(at: AffineTransform): PathIterator;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {AffineTransform} at
         * @param {number} flatness
         * @return {PathIterator}
         */
        getPathIterator$java_awt_geom_AffineTransform$double(at: AffineTransform, flatness: number): PathIterator;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @param {AffineTransform} at
         * @param {number} flatness
         * @return {PathIterator}
         */
        getPathIterator(at?: any, flatness?: any): any;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @return {org.apache.batik.ext.awt.geom.ExtendedPathIterator}
         */
        getExtendedPathIterator(): org.apache.batik.ext.awt.geom.ExtendedPathIterator;
        /**
         * Delegates to the enclosed <code>GeneralPath</code>.
         * @return {*}
         */
        clone(): any;
        /**
         * Make sure, that the requested number of slots in vales[] are available.
         * Must be called even for numValues = 0, because it is also
         * used for initialization of those arrays.
         *
         * @param {number} numValues number of requested coordinates
         * @private
         */
        makeRoom(numValues: number): void;
    }
    namespace ExtendedGeneralPath {
        class EPI implements org.apache.batik.ext.awt.geom.ExtendedPathIterator {
            __parent: any;
            segNum: number;
            valsIdx: number;
            currentSegment$(): number;
            currentSegment$double_A(coords: number[]): number;
            currentSegment(coords?: any): any;
            currentSegment$float_A(coords: number[]): number;
            getWindingRule(): number;
            isDone(): boolean;
            next(): void;
            constructor(__parent: any);
        }
    }
}
declare namespace org.apache.batik.ext.awt.geom {
    /**
     * The <code>ExtendedPathIterator</code> class represents a geometric
     * path constructed from straight lines, quadratic and cubic (Bezier)
     * curves and elliptical arcs.  This interface is identical to that of
     * PathIterator except it can return SEG_ARCTO from currentSegment,
     * also the array of values passed to currentSegment must be of length
     * 7 or an error will be thrown.
     *
     * This does not extend PathIterator as it would break the interface
     * contract for that class.
     *
     * @author <a href="mailto:deweese@apache.org">Thomas DeWeese</a>
     * @version $Id$
     */
    interface ExtendedPathIterator {
        currentSegment(coords?: any): any;
        getWindingRule(): number;
        isDone(): boolean;
        next(): any;
    }
    namespace ExtendedPathIterator {
        /**
         * The segment type constant that specifies that the preceding
         * subpath should be closed by appending a line segment back to
         * the point corresponding to the most recent SEG_MOVETO.
         */
        let SEG_CLOSE: number;
        /**
         *
         * The segment type constant for a point that specifies the end
         * point of a line to be drawn from the most recently specified
         * point.
         */
        let SEG_MOVETO: number;
        /**
         * The segment type constant for a point that specifies the end
         * point of a line to be drawn from the most recently specified
         * point.
         */
        let SEG_LINETO: number;
        /**
         * The segment type constant for the pair of points that specify a
         * quadratic parametric curve to be drawn from the most recently
         * specified point. The curve is interpolated by solving the
         * parametric control equation in the range (t=[0..1]) using the
         * most recently specified (current) point (CP), the first control
         * point (P1), and the final interpolated control point (P2).
         */
        let SEG_QUADTO: number;
        /**
         * The segment type constant for the set of 3 points that specify
         * a cubic parametric curve to be drawn from the most recently
         * specified point. The curve is interpolated by solving the
         * parametric control equation in the range (t=[0..1]) using the
         * most recently specified (current) point (CP), the first control
         * point (P1), the second control point (P2), and the final
         * interpolated control point (P3).
         */
        let SEG_CUBICTO: number;
        /**
         * The segment type constant for an elliptical arc.  This consists of
         * Seven values [rx, ry, angle, largeArcFlag, sweepFlag, x, y].
         * rx, ry are the radious of the ellipse.
         * angle is angle of the x axis of the ellipse.
         * largeArcFlag is zero if the smaller of the two arcs are to be used.
         * sweepFlag is zero if the 'left' branch is taken one otherwise.
         * x and y are the destination for the ellipse.
         */
        let SEG_ARCTO: number;
        /**
         * The winding rule constant for specifying an even-odd rule for
         * determining the interior of a path. The even-odd rule specifies
         * that a point lies inside the path if a ray drawn in any
         * direction from that point to infinity is crossed by path
         * segments an odd number of times.
         */
        let WIND_EVEN_ODD: number;
        /**
         * The winding rule constant for specifying a non-zero rule for
         * determining the interior of a path. The non-zero rule specifies
         * that a point lies inside the path if a ray drawn in any
         * direction from that point to infinity is crossed by path
         * segments a different number of times in the counter-clockwise
         * direction than the clockwise direction.
         */
        let WIND_NON_ZERO: number;
    }
}
declare namespace org.apache.batik.ext.awt.geom {
    /**
     * The <code>ExtendedShape</code> class represents a geometric
     * path constructed from straight lines, quadratic and cubic (Bezier)
     * curves and elliptical arcs.
     * @author <a href="mailto:deweese@apache.org">Thomas DeWeese</a>
     * @version $Id$
     */
    interface ExtendedShape {
        /**
         * Get an extended Path iterator that may return SEG_ARCTO commands
         * @return {org.apache.batik.ext.awt.geom.ExtendedPathIterator}
         */
        getExtendedPathIterator(): org.apache.batik.ext.awt.geom.ExtendedPathIterator;
    }
}
declare namespace org.apache.batik.i18n {
    /**
     * This class represents a group of ExtendedLocalizable objects which
     * have a shared default locale.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    class LocaleGroup {
        /**
         * The default group.
         */
        static DEFAULT: LocaleGroup;
        static DEFAULT_$LI$(): LocaleGroup;
        /**
         * The shared Locale.
         */
        locale: string;
        /**
         * Sets the default locale for all the instances of ExtendedLocalizable
         * in this group.
         * @param {string} l
         */
        setLocale(l: string): void;
        /**
         * Gets the current default locale in this group, or null.
         * @return {string}
         */
        getLocale(): string;
        constructor();
    }
}
declare namespace org.apache.batik.i18n {
    /**
     * This interface must be implemented by the classes which must provide a
     * way to override the default locale.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    interface Localizable {
        /**
         * Provides a way to the user to specify a locale which override the
         * default one. If null is passed to this method, the used locale
         * becomes the global one.
         * @param {string} l The locale to set.
         */
        setLocale(l: string): any;
        /**
         * Returns the current locale or null if the locale currently used is
         * the default one.
         * @return {string}
         */
        getLocale(): string;
        /**
         * Creates and returns a localized message, given the key of the message
         * in the resource bundle and the message parameters.
         * The messages in the resource bundle must have the syntax described in
         * the java.text.MessageFormat class documentation.
         * @param {string} key  The key used to retreive the message from the resource
         * bundle.
         * @param {Array} args The objects that compose the message.
         * @exception MissingResourceException if the key is not in the bundle.
         * @return {string}
         */
        formatMessage(key: string, args: any[]): string;
    }
}
declare namespace org.apache.batik.i18n {
    /**
     * Same as LocalizableSupport(cls, null).
     * @param {string} s
     * @param {Function<>} cls
     * @param {*} cl
     * @class
     */
    class LocalizableSupport implements org.apache.batik.i18n.Localizable {
        /**
         * The locale group to which this object belongs.
         */
        localeGroup: org.apache.batik.i18n.LocaleGroup;
        /**
         * The resource bundle classname.
         */
        bundleName: string;
        /**
         * The classloader to use to create the resource bundle.
         */
        classLoader: any;
        /**
         * The current locale.
         */
        locale: string;
        /**
         * The locale in use.
         */
        usedLocale: string;
        /**
         * The resources
         */
        resourceBundles: Array<any>;
        lastResourceClass: Function;
        /**
         * The class to lookup bundleName from.
         */
        cls: Function;
        constructor(s?: any, cls?: any, cl?: any);
        /**
         * Implements {@link org.apache.batik.i18n.Localizable#setLocale(Locale)}.
         * @param {string} l
         */
        setLocale(l: string): void;
        /**
         * Implements {@link org.apache.batik.i18n.Localizable#getLocale()}.
         * @return {string}
         */
        getLocale(): string;
        /**
         * Implements {@link
         * org.apache.batik.i18n.ExtendedLocalizable#setLocaleGroup(LocaleGroup)}.
         * @param {org.apache.batik.i18n.LocaleGroup} lg
         */
        setLocaleGroup(lg: org.apache.batik.i18n.LocaleGroup): void;
        /**
         * Implements {@link
         * org.apache.batik.i18n.ExtendedLocalizable#getLocaleGroup()}.
         * @return {org.apache.batik.i18n.LocaleGroup}
         */
        getLocaleGroup(): org.apache.batik.i18n.LocaleGroup;
        /**
         * Implements {@link
         * org.apache.batik.i18n.ExtendedLocalizable#setDefaultLocale(Locale)}.
         * Later invocations of the instance methods will lead to update the
         * resource bundle used.
         * @param {string} l
         */
        setDefaultLocale(l: string): void;
        /**
         * Implements {@link
         * org.apache.batik.i18n.ExtendedLocalizable#getDefaultLocale()}.
         * @return {string}
         */
        getDefaultLocale(): string;
        /**
         * Implements {@link
         * org.apache.batik.i18n.Localizable#formatMessage(String,Object[])}.
         * @param {string} key
         * @param {Array} args
         * @return {string}
         */
        formatMessage(key: string, args: any[]): string;
        getCurrentLocale(): string;
        /**
         * returns true if the locale is different from the previously
         * used locale.  Also sets 'usedLocale' to the current locale.
         * @return {boolean}
         */
        setUsedLocale(): boolean;
        /**
         * Here for backwards compatability
         * @return {*}
         */
        getResourceBundle$(): any;
        hasNextResourceBundle(i: number): boolean;
        lookupResourceBundle(bundle: string, theClass: Function): any;
        getResourceBundle$int(i: number): any;
        getResourceBundle(i?: any): any;
        /**
         *
         * @param {string} key
         * @return {string}
         */
        getString(key: string): string;
        /**
         * Returns the integer mapped with the given string
         * @param {string} key a key of the resource bundle
         * @throws MissingResourceException if key is not the name of a resource
         * @return {number}
         */
        getInteger(key: string): number;
        getCharacter(key: string): number;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This class is the superclass of all parsers. It provides localization
     * and error handling methods.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    abstract class AbstractParser implements org.apache.batik.parser.Parser {
        /**
         * The default resource bundle base name.
         */
        static BUNDLE_CLASSNAME: string;
        /**
         * The error handler.
         */
        errorHandler: org.apache.batik.parser.ErrorHandler;
        /**
         * The localizable support.
         */
        localizableSupport: org.apache.batik.i18n.LocalizableSupport;
        /**
         * The normalizing reader.
         */
        reader: org.apache.batik.util.io.NormalizingReader;
        /**
         * The current character.
         */
        current: number;
        /**
         * Returns the current character value.
         * @return {number}
         */
        getCurrent(): number;
        /**
         * Implements {@link org.apache.batik.i18n.Localizable#setLocale(Locale)}.
         * @param {string} l
         */
        setLocale(l: string): void;
        /**
         * Implements {@link org.apache.batik.i18n.Localizable#getLocale()}.
         * @return {string}
         */
        getLocale(): string;
        /**
         * Implements {@link
         * org.apache.batik.i18n.Localizable#formatMessage(String,Object[])}.
         * @param {string} key
         * @param {Array} args
         * @return {string}
         */
        formatMessage(key: string, args: any[]): string;
        /**
         * Allow an application to register an error event handler.
         *
         * <p>If the application does not register an error event handler,
         * all error events reported by the parser will cause an exception
         * to be thrown.
         *
         * <p>Applications may register a new or different handler in the
         * middle of a parse, and the parser must begin using the new
         * handler immediately.</p>
         * @param {org.apache.batik.parser.ErrorHandler} handler The error handler.
         */
        setErrorHandler(handler: org.apache.batik.parser.ErrorHandler): void;
        /**
         * Parses the given string.
         * @param {string} s
         */
        parse$java_lang_String(s: string): void;
        /**
         * Parses the given string.
         * @param {string} s
         */
        parse(s?: any): any;
        /**
         * Method responsible for actually parsing data after AbstractParser
         * has initialized itself.
         */
        abstract doParse(): any;
        /**
         * Signals an error to the error handler.
         * @param {string} key The message key in the resource bundle.
         * @param {Array} args The message arguments.
         */
        reportError(key: string, args: any[]): void;
        /**
         * simple api to call often reported error.
         * Just a wrapper for reportError().
         *
         * @param {string} expectedChar what caller expected
         * @param {number} currentChar what caller found
         */
        reportCharacterExpectedError(expectedChar: string, currentChar: number): void;
        /**
         * simple api to call often reported error.
         * Just a wrapper for reportError().
         *
         * @param {number} currentChar what the caller found and didnt expect
         */
        reportUnexpectedCharacterError(currentChar: number): void;
        /**
         * Returns a localized error message.
         * @param {string} key The message key in the resource bundle.
         * @param {Array} args The message arguments.
         * @return {string}
         */
        createErrorMessage(key: string, args: any[]): string;
        /**
         * Returns the resource bundle base name.
         * @return {string} BUNDLE_CLASSNAME.
         */
        getBundleClassName(): string;
        /**
         * Skips the whitespaces in the current reader.
         */
        skipSpaces(): void;
        /**
         * Skips the whitespaces and an optional comma.
         */
        skipCommaSpaces(): void;
        constructor();
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This class provides an implementation of the PathHandler that initializes
     * a Shape from the value of a path's 'd' attribute.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    class AWTPathProducer implements org.apache.batik.parser.PathHandler, org.apache.batik.parser.ShapeProducer {
        /**
         * The temporary value of extendedGeneralPath.
         */
        path: org.apache.batik.ext.awt.geom.ExtendedGeneralPath;
        /**
         * The current x position.
         */
        currentX: number;
        /**
         * The current y position.
         */
        currentY: number;
        /**
         * The reference x point for smooth arcs.
         */
        xCenter: number;
        /**
         * The reference y point for smooth arcs.
         */
        yCenter: number;
        /**
         * The winding rule to use to construct the path.
         */
        windingRule: number;
        /**
         * Utility method for creating an ExtendedGeneralPath.
         * @param {{ str: string, cursor: number }} r The reader used to read the path specification.
         * @param {number} wr The winding rule to use for creating the path.
         * @return {java.awt.Shape}
         */
        static createShape(r: {
            str: string;
            cursor: number;
        }, wr: number): java.awt.Shape;
        /**
         * Sets the winding rule used to construct the path.
         * @param {number} i
         */
        setWindingRule(i: number): void;
        /**
         * Returns the current winding rule.
         * @return {number}
         */
        getWindingRule(): number;
        /**
         * Returns the Shape object initialized during the last parsing.
         * @return {java.awt.Shape} the shape or null if this handler has not been used by
         * a parser.
         */
        getShape(): java.awt.Shape;
        /**
         * Implements {@link PathHandler#startPath()}.
         */
        startPath(): void;
        /**
         * Implements {@link PathHandler#endPath()}.
         */
        endPath(): void;
        /**
         * Implements {@link PathHandler#movetoRel(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        movetoRel(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#movetoAbs(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        movetoAbs(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#closePath()}.
         */
        closePath(): void;
        /**
         * Implements {@link PathHandler#linetoRel(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        linetoRel(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#linetoAbs(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        linetoAbs(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#linetoHorizontalRel(float)}.
         * @param {number} x
         */
        linetoHorizontalRel(x: number): void;
        /**
         * Implements {@link PathHandler#linetoHorizontalAbs(float)}.
         * @param {number} x
         */
        linetoHorizontalAbs(x: number): void;
        /**
         * Implements {@link PathHandler#linetoVerticalRel(float)}.
         * @param {number} y
         */
        linetoVerticalRel(y: number): void;
        /**
         * Implements {@link PathHandler#linetoVerticalAbs(float)}.
         * @param {number} y
         */
        linetoVerticalAbs(y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoCubicRel(float,float,float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicRel(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoCubicAbs(float,float,float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicAbs(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements
         * {@link PathHandler#curvetoCubicSmoothRel(float,float,float,float)}.
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicSmoothRel(x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements
         * {@link PathHandler#curvetoCubicSmoothAbs(float,float,float,float)}.
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicSmoothAbs(x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements
         * {@link PathHandler#curvetoQuadraticRel(float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticRel(x1: number, y1: number, x: number, y: number): void;
        /**
         * Implements
         * {@link PathHandler#curvetoQuadraticAbs(float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticAbs(x1: number, y1: number, x: number, y: number): void;
        /**
         * Implements {@link PathHandler#curvetoQuadraticSmoothRel(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticSmoothRel(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#curvetoQuadraticSmoothAbs(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticSmoothAbs(x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#arcRel(float,float,float,boolean,boolean,float,float)}.
         * @param {number} rx
         * @param {number} ry
         * @param {number} xAxisRotation
         * @param {boolean} largeArcFlag
         * @param {boolean} sweepFlag
         * @param {number} x
         * @param {number} y
         */
        arcRel(rx: number, ry: number, xAxisRotation: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#arcAbs(float,float,float,boolean,boolean,float,float)}.
         * @param {number} rx
         * @param {number} ry
         * @param {number} xAxisRotation
         * @param {boolean} largeArcFlag
         * @param {boolean} sweepFlag
         * @param {number} x
         * @param {number} y
         */
        arcAbs(rx: number, ry: number, xAxisRotation: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): void;
        constructor();
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This class provides a default implementation of ErrorHandler.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    class DefaultErrorHandler implements org.apache.batik.parser.ErrorHandler {
        /**
         * Implements {@link ErrorHandler#error(ParseException)}.
         * Throws the given exception.
         * @param {org.apache.batik.parser.ParseException} e
         */
        error(e: org.apache.batik.parser.ParseException): void;
        constructor();
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This class does not need to be instantiated.
     * @class
     */
    class DefaultPathHandler implements org.apache.batik.parser.PathHandler {
        /**
         * The only instance of this class.
         */
        static INSTANCE: org.apache.batik.parser.PathHandler;
        static INSTANCE_$LI$(): org.apache.batik.parser.PathHandler;
        constructor();
        /**
         * Implements {@link PathHandler#startPath()}.
         */
        startPath(): void;
        /**
         * Implements {@link PathHandler#endPath()}.
         */
        endPath(): void;
        /**
         * Implements {@link PathHandler#movetoRel(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        movetoRel(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#movetoAbs(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        movetoAbs(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#closePath()}.
         */
        closePath(): void;
        /**
         * Implements {@link PathHandler#linetoRel(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        linetoRel(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#linetoAbs(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        linetoAbs(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#linetoHorizontalRel(float)}.
         * @param {number} x
         */
        linetoHorizontalRel(x: number): void;
        /**
         * Implements {@link PathHandler#linetoHorizontalAbs(float)}.
         * @param {number} x
         */
        linetoHorizontalAbs(x: number): void;
        /**
         * Implements {@link PathHandler#linetoVerticalRel(float)}.
         * @param {number} y
         */
        linetoVerticalRel(y: number): void;
        /**
         * Implements {@link PathHandler#linetoVerticalAbs(float)}.
         * @param {number} y
         */
        linetoVerticalAbs(y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoCubicRel(float,float,float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicRel(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoCubicAbs(float,float,float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicAbs(x1: number, y1: number, x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoCubicSmoothRel(float,float,float,float)}.
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicSmoothRel(x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoCubicSmoothAbs(float,float,float,float)}.
         * @param {number} x2
         * @param {number} y2
         * @param {number} x
         * @param {number} y
         */
        curvetoCubicSmoothAbs(x2: number, y2: number, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoQuadraticRel(float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticRel(x1: number, y1: number, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#curvetoQuadraticAbs(float,float,float,float)}.
         * @param {number} x1
         * @param {number} y1
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticAbs(x1: number, y1: number, x: number, y: number): void;
        /**
         * Implements {@link PathHandler#curvetoQuadraticSmoothRel(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticSmoothRel(x: number, y: number): void;
        /**
         * Implements {@link PathHandler#curvetoQuadraticSmoothAbs(float,float)}.
         * @param {number} x
         * @param {number} y
         */
        curvetoQuadraticSmoothAbs(x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#arcRel(float,float,float,boolean,boolean,float,float)}.
         * @param {number} rx
         * @param {number} ry
         * @param {number} xAxisRotation
         * @param {boolean} largeArcFlag
         * @param {boolean} sweepFlag
         * @param {number} x
         * @param {number} y
         */
        arcRel(rx: number, ry: number, xAxisRotation: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): void;
        /**
         * Implements {@link
         * PathHandler#arcAbs(float,float,float,boolean,boolean,float,float)}.
         * @param {number} rx
         * @param {number} ry
         * @param {number} xAxisRotation
         * @param {boolean} largeArcFlag
         * @param {boolean} sweepFlag
         * @param {number} x
         * @param {number} y
         */
        arcAbs(rx: number, ry: number, xAxisRotation: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): void;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This interface must be implemented and then registred as the error handler
     * in order to be notified of parsing errors.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    interface ErrorHandler {
        /**
         * Called when a parse error occurs.
         * @param {org.apache.batik.parser.ParseException} e
         */
        error(e: org.apache.batik.parser.ParseException): any;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * Creates a new ParseException.
     * @param {string} message The error or warning message.
     * @param {number} line The line of the last parsed character.
     * @param {number} column The column of the last parsed character.
     * @class
     */
    class ParseException extends Error {
        /**
         * @serial The embedded exception if tunnelling, or null.
         */
        exception: Error;
        /**
         * @serial The line number.
         */
        lineNumber: number;
        /**
         * @serial The column number.
         */
        columnNumber: number;
        constructor(message?: any, line?: any, column?: any);
        /**
         * Return a detail message for this exception.
         *
         * <p>If there is a embedded exception, and if the ParseException
         * has no detail message of its own, this method will return
         * the detail message from the embedded exception.
         * @return {string} The error or warning message.
         */
        getMessage(): string;
        /**
         * Return the embedded exception, if any.
         * @return {Error} The embedded exception, or null if there is none.
         */
        getException(): Error;
        /**
         * Returns the line of the last parsed character.
         * @return {number}
         */
        getLineNumber(): number;
        /**
         * Returns the column of the last parsed character.
         * @return {number}
         */
        getColumnNumber(): number;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This interface represents a parser.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    interface Parser extends org.apache.batik.i18n.Localizable {
        /**
         * Parses the given reader
         * @param {{ str: string, cursor: number }} r
         */
        parse(r?: any): any;
        /**
         * Allows an application to register an error event handler.
         *
         * <p>If the application does not register an error event handler,
         * all error events reported by the parser will cause an exception
         * to be thrown.
         *
         * <p>Applications may register a new or different handler in the
         * middle of a parse, and the parser must begin using the new
         * handler immediately.</p>
         * @param {org.apache.batik.parser.ErrorHandler} handler The error handler.
         */
        setErrorHandler(handler: org.apache.batik.parser.ErrorHandler): any;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This interface must be implemented and then registred as the
     * handler of a <code>PathParser</code> instance in order to be
     * notified of parsing events.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    interface PathHandler {
        /**
         * Invoked when the path starts.
         * @exception ParseException if an error occured while processing the path
         */
        startPath(): any;
        /**
         * Invoked when the path ends.
         * @exception ParseException if an error occured while processing the path
         */
        endPath(): any;
        /**
         * Invoked when a relative moveto command has been parsed.
         * <p>Command : <b>m</b>
         * @param {number} x the relative x coordinate for the end point
         * @param {number} y the relative y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        movetoRel(x: number, y: number): any;
        /**
         * Invoked when an absolute moveto command has been parsed.
         * <p>Command : <b>M</b>
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        movetoAbs(x: number, y: number): any;
        /**
         * Invoked when a closepath has been parsed.
         * <p>Command : <b>z</b> | <b>Z</b>
         * @exception ParseException if an error occured while processing the path
         */
        closePath(): any;
        /**
         * Invoked when a relative line command has been parsed.
         * <p>Command : <b>l</b>
         * @param {number} x the relative x coordinates for the end point
         * @param {number} y the relative y coordinates for the end point
         * @exception ParseException if an error occured while processing the path
         */
        linetoRel(x: number, y: number): any;
        /**
         * Invoked when an absolute line command has been parsed.
         * <p>Command : <b>L</b>
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        linetoAbs(x: number, y: number): any;
        /**
         * Invoked when an horizontal relative line command has been parsed.
         * <p>Command : <b>h</b>
         * @param {number} x the relative X coordinate of the end point
         * @exception ParseException if an error occured while processing the path
         */
        linetoHorizontalRel(x: number): any;
        /**
         * Invoked when an horizontal absolute line command has been parsed.
         * <p>Command : <b>H</b>
         * @param {number} x the absolute X coordinate of the end point
         * @exception ParseException if an error occured while processing the path
         */
        linetoHorizontalAbs(x: number): any;
        /**
         * Invoked when a vertical relative line command has been parsed.
         * <p>Command : <b>v</b>
         * @param {number} y the relative Y coordinate of the end point
         * @exception ParseException if an error occured while processing the path
         */
        linetoVerticalRel(y: number): any;
        /**
         * Invoked when a vertical absolute line command has been parsed.
         * <p>Command : <b>V</b>
         * @param {number} y the absolute Y coordinate of the end point
         * @exception ParseException if an error occured while processing the path
         */
        linetoVerticalAbs(y: number): any;
        /**
         * Invoked when a relative cubic bezier curve command has been parsed.
         * <p>Command : <b>c</b>
         * @param {number} x1 the relative x coordinate for the first control point
         * @param {number} y1 the relative y coordinate for the first control point
         * @param {number} x2 the relative x coordinate for the second control point
         * @param {number} y2 the relative y coordinate for the second control point
         * @param {number} x the relative x coordinate for the end point
         * @param {number} y the relative y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoCubicRel(x1: number, y1: number, x2: number, y2: number, x: number, y: number): any;
        /**
         * Invoked when an absolute cubic bezier curve command has been parsed.
         * <p>Command : <b>C</b>
         * @param {number} x1 the absolute x coordinate for the first control point
         * @param {number} y1 the absolute y coordinate for the first control point
         * @param {number} x2 the absolute x coordinate for the second control point
         * @param {number} y2 the absolute y coordinate for the second control point
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoCubicAbs(x1: number, y1: number, x2: number, y2: number, x: number, y: number): any;
        /**
         * Invoked when a relative smooth cubic bezier curve command has
         * been parsed. The first control point is assumed to be the
         * reflection of the second control point on the previous command
         * relative to the current point.
         * <p>Command : <b>s</b>
         * @param {number} x2 the relative x coordinate for the second control point
         * @param {number} y2 the relative y coordinate for the second control point
         * @param {number} x the relative x coordinate for the end point
         * @param {number} y the relative y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoCubicSmoothRel(x2: number, y2: number, x: number, y: number): any;
        /**
         * Invoked when an absolute smooth cubic bezier curve command has
         * been parsed. The first control point is assumed to be the
         * reflection of the second control point on the previous command
         * relative to the current point.
         * <p>Command : <b>S</b>
         * @param {number} x2 the absolute x coordinate for the second control point
         * @param {number} y2 the absolute y coordinate for the second control point
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoCubicSmoothAbs(x2: number, y2: number, x: number, y: number): any;
        /**
         * Invoked when a relative quadratic bezier curve command has been parsed.
         * <p>Command : <b>q</b>
         * @param {number} x1 the relative x coordinate for the control point
         * @param {number} y1 the relative y coordinate for the control point
         * @param {number} x the relative x coordinate for the end point
         * @param {number} y the relative x coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoQuadraticRel(x1: number, y1: number, x: number, y: number): any;
        /**
         * Invoked when an absolute quadratic bezier curve command has been parsed.
         * <p>Command : <b>Q</b>
         * @param {number} x1 the absolute x coordinate for the control point
         * @param {number} y1 the absolute y coordinate for the control point
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute x coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoQuadraticAbs(x1: number, y1: number, x: number, y: number): any;
        /**
         * Invoked when a relative smooth quadratic bezier curve command
         * has been parsed. The control point is assumed to be the
         * reflection of the control point on the previous command
         * relative to the current point.
         * <p>Command : <b>t</b>
         * @param {number} x the relative x coordinate for the end point
         * @param {number} y the relative y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoQuadraticSmoothRel(x: number, y: number): any;
        /**
         * Invoked when an absolute smooth quadratic bezier curve command
         * has been parsed. The control point is assumed to be the
         * reflection of the control point on the previous command
         * relative to the current point.
         * <p>Command : <b>T</b>
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        curvetoQuadraticSmoothAbs(x: number, y: number): any;
        /**
         * Invoked when a relative elliptical arc command has been parsed.
         * <p>Command : <b>a</b>
         * @param {number} rx the X axis radius for the ellipse
         * @param {number} ry the Y axis radius for the ellipse
         * @param {number} xAxisRotation the rotation angle in degrees for the ellipse's
         * X-axis relative to the X-axis
         * @param {boolean} largeArcFlag the value of the large-arc-flag
         * @param {boolean} sweepFlag the value of the sweep-flag
         * @param {number} x the relative x coordinate for the end point
         * @param {number} y the relative y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        arcRel(rx: number, ry: number, xAxisRotation: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): any;
        /**
         * Invoked when an absolute elliptical arc command has been parsed.
         * <p>Command : <b>A</b>
         * @param {number} rx the X axis radius for the ellipse
         * @param {number} ry the Y axis radius for the ellipse
         * @param {number} xAxisRotation the rotation angle in degrees for the ellipse's
         * X-axis relative to the X-axis
         * @param {boolean} largeArcFlag the value of the large-arc-flag
         * @param {boolean} sweepFlag the value of the sweep-flag
         * @param {number} x the absolute x coordinate for the end point
         * @param {number} y the absolute y coordinate for the end point
         * @exception ParseException if an error occured while processing the path
         */
        arcAbs(rx: number, ry: number, xAxisRotation: number, largeArcFlag: boolean, sweepFlag: boolean, x: number, y: number): any;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This interface represents objects which creates Shape objects.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    interface ShapeProducer {
        /**
         * Returns the Shape object initialized during the last parsing.
         * @return {java.awt.Shape} the shape or null if this handler has not been used to
         * parse a path.
         */
        getShape(): java.awt.Shape;
        /**
         * Sets the winding rule used to construct the path.
         * @param {number} i
         */
        setWindingRule(i: number): any;
        /**
         * Returns the current winding rule.
         * @return {number}
         */
        getWindingRule(): number;
    }
}
declare namespace org.apache.batik.util {
    /**
     * This class does not need to be instantiated.
     * @class
     */
    class EncodingUtilities {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * The standard to Java encoding table.
         */
        static ENCODINGS: any;
        static ENCODINGS_$LI$(): any;
        static __static_initializer_0(): void;
        constructor();
        /**
         * Returns the Java encoding string mapped with the given standard
         * encoding string.
         * @return {string} null if no mapping was found.
         * @param {string} encoding
         */
        static javaEncoding(encoding: string): string;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new CharDecoder object.
     * @param {{ str: string, cursor: number }} is The stream to read.
     * @class
     */
    abstract class AbstractCharDecoder implements org.apache.batik.util.io.CharDecoder {
        abstract readChar(): any;
        /**
         * The buffer size.
         */
        static BUFFER_SIZE: number;
        /**
         * The input stream to read.
         */
        inputStream: {
            str: string;
            cursor: number;
        };
        /**
         * The input buffer.
         */
        buffer: number[];
        /**
         * The current position in the buffer.
         */
        position: number;
        /**
         * The byte count in the buffer.
         */
        count: number;
        constructor(is: {
            str: string;
            cursor: number;
        });
        /**
         * Disposes the associated resources.
         */
        dispose(): void;
        /**
         * Fills the input buffer.
         */
        fillBuffer(): void;
        /**
         * To throws an exception when the input stream contains an
         * invalid character.
         * @param {string} encoding The encoding name.
         */
        charError(encoding: string): void;
        /**
         * To throws an exception when the end of stream was unexpected.
         * @param {string} encoding The encoding name.
         */
        endOfStreamError(encoding: string): void;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * This interface represents an object which decodes characters from a
     * stream of bytes.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     */
    interface CharDecoder {
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
        /**
         * Disposes the associated resources.
         */
        dispose(): any;
    }
    namespace CharDecoder {
        /**
         * This constant represents the end of stream character.
         */
        let END_OF_STREAM: number;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new GenericDecoder.
     * @param {{ str: string, cursor: number }} is The input stream to decode.
     * @param {string} enc The Java encoding name.
     * @class
     */
    class GenericDecoder implements org.apache.batik.util.io.CharDecoder {
        /**
         * The reader used to decode the stream.
         */
        reader: {
            str: string;
            cursor: number;
        };
        constructor(is?: any, enc?: any);
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
        /**
         * Disposes the associated resources.
         */
        dispose(): void;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * This class represents a reader which normalizes the line break: \n,
     * \r, \r\n are replaced by \n.  The methods of this reader are not
     * synchronized.  The input is buffered.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     * @extends { str: string, cursor: number }
     */
    abstract class NormalizingReader {
        /**
         * Read characters into a portion of an array.
         * @param {Array} cbuf  Destination buffer
         * @param {number} off   Offset at which to start writing characters
         * @param {number} len   Maximum number of characters to read
         * @return {number} The number of characters read, or -1 if the end of the
         * stream has been reached
         */
        read$char_A$int$int(cbuf: string[], off: number, len: number): number;
        /**
         * Read characters into a portion of an array.
         * @param {Array} cbuf  Destination buffer
         * @param {number} off   Offset at which to start writing characters
         * @param {number} len   Maximum number of characters to read
         * @return {number} The number of characters read, or -1 if the end of the
         * stream has been reached
         */
        read(cbuf?: any, off?: any, len?: any): any;
        /**
         * Returns the current line in the stream.
         * @return {number}
         */
        abstract getLine(): number;
        /**
         * Returns the current column in the stream.
         * @return {number}
         */
        abstract getColumn(): number;
        constructor();
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new StringDecoder.
     * @param {string} s
     * @class
     */
    class StringDecoder implements org.apache.batik.util.io.CharDecoder {
        /**
         * The string which contains the decoded characters.
         */
        string: string;
        /**
         * The number of chars in the string.
         */
        length: number;
        /**
         * The next char index.
         */
        next: number;
        constructor(s: string);
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
        /**
         * Disposes the associated resources.
         */
        dispose(): void;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * This class does not need to be instantiated.
     * @class
     */
    class Messages {
        constructor();
        /**
         * The error messages bundle class name.
         */
        static RESOURCES: string;
        /**
         * The localizable support for the error messages.
         */
        static localizableSupport: org.apache.batik.i18n.LocalizableSupport;
        static localizableSupport_$LI$(): org.apache.batik.i18n.LocalizableSupport;
        /**
         * Implements {@link org.apache.batik.i18n.Localizable#setLocale(Locale)}.
         * @param {string} l
         */
        static setLocale(l: string): void;
        /**
         * Implements {@link org.apache.batik.i18n.Localizable#getLocale()}.
         * @return {string}
         */
        static getLocale(): string;
        /**
         * Implements {@link
         * org.apache.batik.i18n.Localizable#formatMessage(String,Object[])}.
         * @param {string} key
         * @param {Array} args
         * @return {string}
         */
        static formatMessage(key: string, args: any[]): string;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * This class represents a parser with support for numbers.
     *
     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
     * @version $Id$
     * @extends org.apache.batik.parser.AbstractParser
     */
    abstract class NumberParser extends org.apache.batik.parser.AbstractParser {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * Parses the content of the buffer and converts it to a float.
         * @return {number}
         */
        parseFloat(): number;
        /**
         * Computes a float from mantissa and exponent.
         * @param {number} mant
         * @param {number} exp
         * @return {number}
         */
        static buildFloat(mant: number, exp: number): number;
        /**
         * Array of powers of ten. Using double instead of float gives a tiny bit more precision.
         */
        static pow10: number[];
        static pow10_$LI$(): number[];
        static __static_initializer_0(): void;
        constructor();
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new ASCIIDecoder.
     * @param {{ str: string, cursor: number }} is
     * @class
     */
    class ASCIIDecoder extends org.apache.batik.util.io.AbstractCharDecoder {
        constructor(is: {
            str: string;
            cursor: number;
        });
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new ISO_8859_1Decoder.
     * @param {{ str: string, cursor: number }} is
     * @class
     */
    class ISO_8859_1Decoder extends org.apache.batik.util.io.AbstractCharDecoder {
        constructor(is: {
            str: string;
            cursor: number;
        });
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new UTF16Decoder.
     * @param {{ str: string, cursor: number }} is The stream to decode.
     * @param {boolean} be Whether or not the given stream's byte-order is
     * big-endian.
     * @class
     */
    class UTF16Decoder extends org.apache.batik.util.io.AbstractCharDecoder {
        /**
         * Whether the stream's byte-order is big-endian.
         */
        bigEndian: boolean;
        constructor(is?: any, be?: any);
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new UTF8Decoder.
     * @param {{ str: string, cursor: number }} is
     * @class
     */
    class UTF8Decoder extends org.apache.batik.util.io.AbstractCharDecoder {
        /**
         * The number of bytes of a UTF-8 sequence indexed by the first
         * byte of the sequence.
         */
        static UTF8_BYTES: number[];
        static UTF8_BYTES_$LI$(): number[];
        /**
         * The next char, in case of a 4 bytes sequence.
         */
        nextChar: number;
        constructor(is: {
            str: string;
            cursor: number;
        });
        /**
         * Reads the next character.
         * @return {number} a character or END_OF_STREAM.
         */
        readChar(): number;
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new NormalizingReader.
     * @param {{ str: string, cursor: number }} is The input stream to decode.
     * @param {string} enc The standard encoding name. A null encoding means
     * ISO-8859-1.
     * @class
     */
    class StreamNormalizingReader extends org.apache.batik.util.io.NormalizingReader {
        static __static_initialized: boolean;
        static __static_initialize(): void;
        /**
         * The char decoder.
         */
        charDecoder: org.apache.batik.util.io.CharDecoder;
        /**
         * The next char.
         */
        nextChar: number;
        /**
         * The current line in the stream.
         */
        line: number;
        /**
         * The current column in the stream.
         */
        column: number;
        constructor(is?: any, enc?: any);
        read(cbuf?: any, off?: any, len?: any): any;
        /**
         * Read a single character.  This method will block until a
         * character is available, an I/O error occurs, or the end of the
         * stream is reached.
         * @return {number}
         */
        read$(): number;
        /**
         * Returns the current line in the stream.
         * @return {number}
         */
        getLine(): number;
        /**
         * Returns the current column in the stream.
         * @return {number}
         */
        getColumn(): number;
        /**
         * Close the stream.
         */
        close(): void;
        /**
         * Creates the CharDecoder mapped with the given encoding name.
         * @param {{ str: string, cursor: number }} is
         * @param {string} enc
         * @return {org.apache.batik.util.io.CharDecoder}
         */
        createCharDecoder(is: {
            str: string;
            cursor: number;
        }, enc: string): org.apache.batik.util.io.CharDecoder;
        /**
         * The CharDecoder factories map.
         */
        static charDecoderFactories: any;
        static charDecoderFactories_$LI$(): any;
        static __static_initializer_0(): void;
    }
    namespace StreamNormalizingReader {
        /**
         * Represents a CharDecoder factory.
         */
        interface CharDecoderFactory {
            createCharDecoder(is: {
                str: string;
                cursor: number;
            }): org.apache.batik.util.io.CharDecoder;
        }
        /**
         * To create an ASCIIDecoder.
         */
        class ASCIIDecoderFactory implements StreamNormalizingReader.CharDecoderFactory {
            createCharDecoder(is: {
                str: string;
                cursor: number;
            }): org.apache.batik.util.io.CharDecoder;
            constructor();
        }
        /**
         * To create an ISO_8859_1Decoder.
         */
        class ISO_8859_1DecoderFactory implements StreamNormalizingReader.CharDecoderFactory {
            createCharDecoder(is: {
                str: string;
                cursor: number;
            }): org.apache.batik.util.io.CharDecoder;
            constructor();
        }
        /**
         * To create a UTF8Decoder.
         */
        class UTF8DecoderFactory implements StreamNormalizingReader.CharDecoderFactory {
            createCharDecoder(is: {
                str: string;
                cursor: number;
            }): org.apache.batik.util.io.CharDecoder;
            constructor();
        }
        /**
         * To create a UTF16Decoder.
         */
        class UTF16DecoderFactory implements StreamNormalizingReader.CharDecoderFactory {
            createCharDecoder(is: {
                str: string;
                cursor: number;
            }): org.apache.batik.util.io.CharDecoder;
            constructor();
        }
    }
}
declare namespace org.apache.batik.util.io {
    /**
     * Creates a new StringNormalizingReader.
     * @param {string} s The string to read.
     * @class
     */
    class StringNormalizingReader extends org.apache.batik.util.io.NormalizingReader {
        /**
         * The characters.
         */
        string: string;
        /**
         * The length of the string.
         */
        length: number;
        /**
         * The index of the next character.
         */
        next: number;
        /**
         * The current line in the stream.
         */
        line: number;
        /**
         * The current column in the stream.
         */
        column: number;
        constructor(s: string);
        read(cbuf?: any, off?: any, len?: any): any;
        /**
         * Read a single character.  This method will block until a
         * character is available, an I/O error occurs, or the end of the
         * stream is reached.
         * @return {number}
         */
        read$(): number;
        /**
         * Returns the current line in the stream.
         * @return {number}
         */
        getLine(): number;
        /**
         * Returns the current column in the stream.
         * @return {number}
         */
        getColumn(): number;
        /**
         * Close the stream.
         */
        close(): void;
    }
}
declare namespace org.apache.batik.parser {
    /**
     * Creates a new PathParser.
     * @class
     */
    class PathParser extends org.apache.batik.parser.NumberParser {
        /**
         * The path handler used to report parse events.
         */
        pathHandler: org.apache.batik.parser.PathHandler;
        constructor();
        /**
         * Allows an application to register a path handler.
         *
         * <p>If the application does not register a handler, all
         * events reported by the parser will be silently ignored.
         *
         * <p>Applications may register a new or different handler in the
         * middle of a parse, and the parser must begin using the new
         * handler immediately.</p>
         * @param {org.apache.batik.parser.PathHandler} handler The transform list handler.
         */
        setPathHandler(handler: org.apache.batik.parser.PathHandler): void;
        /**
         * Returns the path handler in use.
         * @return {org.apache.batik.parser.PathHandler}
         */
        getPathHandler(): org.apache.batik.parser.PathHandler;
        doParse(): void;
        /**
         * Parses a 'm' command.
         */
        parsem(): void;
        /**
         * Parses a 'M' command.
         */
        parseM(): void;
        /**
         * Parses a 'l' command.
         */
        parsel(): void;
        _parsel(expectNumber: boolean): void;
        /**
         * Parses a 'L' command.
         */
        parseL(): void;
        _parseL(expectNumber: boolean): void;
        /**
         * Parses a 'h' command.
         */
        parseh(): void;
        /**
         * Parses a 'H' command.
         */
        parseH(): void;
        /**
         * Parses a 'v' command.
         */
        parsev(): void;
        /**
         * Parses a 'V' command.
         */
        parseV(): void;
        /**
         * Parses a 'c' command.
         */
        parsec(): void;
        /**
         * Parses a 'C' command.
         */
        parseC(): void;
        /**
         * Parses a 'q' command.
         */
        parseq(): void;
        /**
         * Parses a 'Q' command.
         */
        parseQ(): void;
        /**
         * Parses a 's' command.
         */
        parses(): void;
        /**
         * Parses a 'S' command.
         */
        parseS(): void;
        /**
         * Parses a 't' command.
         */
        parset(): void;
        /**
         * Parses a 'T' command.
         */
        parseT(): void;
        /**
         * Parses a 'a' command.
         */
        parsea(): void;
        /**
         * Parses a 'A' command.
         */
        parseA(): void;
        /**
         * Skips a sub-path.
         */
        skipSubPath(): void;
        reportUnexpected(ch: number): void;
        /**
         * Skips the whitespaces and an optional comma.
         * @return {boolean} true if comma was skipped.
         */
        skipCommaSpaces2(): boolean;
    }
}

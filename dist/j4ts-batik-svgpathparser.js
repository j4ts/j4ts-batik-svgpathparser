var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/* Generated from Java with JSweet 2.0.0-rc1 - http://www.jsweet.org */
var org;
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var ext;
            (function (ext) {
                var awt;
                (function (awt) {
                    var geom;
                    (function (geom) {
                        /**
                         * Constructs a new <code>ExtendedGeneralPath</code> object with
                         * the specified winding rule and the specified initial capacity
                         * to store path coordinates.
                         * @param {number} rule
                         * @param {number} initialCapacity
                         * @class
                         */
                        var ExtendedGeneralPath = (function () {
                            function ExtendedGeneralPath(rule, initialCapacity) {
                                var _this = this;
                                this.numVals = 0;
                                this.numSeg = 0;
                                this.values = null;
                                this.types = null;
                                if (((typeof rule === 'number') || rule === null) && ((typeof initialCapacity === 'number') || initialCapacity === null)) {
                                    var __args = Array.prototype.slice.call(arguments);
                                    this.path = null;
                                    this.mx = 0;
                                    this.my = 0;
                                    this.cx = 0;
                                    this.cy = 0;
                                    this.numVals = 0;
                                    this.numSeg = 0;
                                    this.values = null;
                                    this.types = null;
                                    this.path = null;
                                    this.mx = 0;
                                    this.my = 0;
                                    this.cx = 0;
                                    this.cy = 0;
                                    (function () {
                                        _this.path = new java.awt.geom.GeneralPath(rule, initialCapacity);
                                    })();
                                }
                                else if (((rule != null && (rule["__interfaces"] != null && rule["__interfaces"].indexOf("java.awt.Shape") >= 0 || rule.constructor != null && rule.constructor["__interfaces"] != null && rule.constructor["__interfaces"].indexOf("java.awt.Shape") >= 0)) || rule === null) && initialCapacity === undefined) {
                                    var __args = Array.prototype.slice.call(arguments);
                                    var s_1 = __args[0];
                                    {
                                        var __args_1 = Array.prototype.slice.call(arguments);
                                        this.path = null;
                                        this.mx = 0;
                                        this.my = 0;
                                        this.cx = 0;
                                        this.cy = 0;
                                        this.numVals = 0;
                                        this.numSeg = 0;
                                        this.values = null;
                                        this.types = null;
                                        this.path = null;
                                        this.mx = 0;
                                        this.my = 0;
                                        this.cx = 0;
                                        this.cy = 0;
                                        (function () {
                                            _this.path = new java.awt.geom.GeneralPath();
                                        })();
                                    }
                                    (function () {
                                        _this.append$java_awt_Shape$boolean(s_1, false);
                                    })();
                                }
                                else if (((typeof rule === 'number') || rule === null) && initialCapacity === undefined) {
                                    var __args = Array.prototype.slice.call(arguments);
                                    this.path = null;
                                    this.mx = 0;
                                    this.my = 0;
                                    this.cx = 0;
                                    this.cy = 0;
                                    this.numVals = 0;
                                    this.numSeg = 0;
                                    this.values = null;
                                    this.types = null;
                                    this.path = null;
                                    this.mx = 0;
                                    this.my = 0;
                                    this.cx = 0;
                                    this.cy = 0;
                                    (function () {
                                        _this.path = new java.awt.geom.GeneralPath(rule);
                                    })();
                                }
                                else if (rule === undefined && initialCapacity === undefined) {
                                    var __args = Array.prototype.slice.call(arguments);
                                    this.path = null;
                                    this.mx = 0;
                                    this.my = 0;
                                    this.cx = 0;
                                    this.cy = 0;
                                    this.numVals = 0;
                                    this.numSeg = 0;
                                    this.values = null;
                                    this.types = null;
                                    this.path = null;
                                    this.mx = 0;
                                    this.my = 0;
                                    this.cx = 0;
                                    this.cy = 0;
                                    (function () {
                                        _this.path = new java.awt.geom.GeneralPath();
                                    })();
                                }
                                else
                                    throw new Error('invalid overload');
                            }
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
                            ExtendedGeneralPath.prototype.arcTo = function (rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
                                if (rx === 0 || ry === 0) {
                                    this.lineTo(x, y);
                                    return;
                                }
                                this.checkMoveTo();
                                var x0 = this.cx;
                                var y0 = this.cy;
                                if (x0 === x && y0 === y) {
                                    return;
                                }
                                var arc = ExtendedGeneralPath.computeArc(x0, y0, rx, ry, angle, largeArcFlag, sweepFlag, x, y);
                                if (arc == null)
                                    return;
                                var t = java.awt.geom.AffineTransform.getRotateInstance(/* toRadians */ (function (x) { return x * Math.PI / 180; })(angle), arc.getCenterX(), arc.getCenterY());
                                var s = t.createTransformedShape(arc);
                                this.path.append(s, true);
                                this.makeRoom(7);
                                this.types[this.numSeg++] = org.apache.batik.ext.awt.geom.ExtendedPathIterator.SEG_ARCTO;
                                this.values[this.numVals++] = rx;
                                this.values[this.numVals++] = ry;
                                this.values[this.numVals++] = angle;
                                this.values[this.numVals++] = largeArcFlag ? 1 : 0;
                                this.values[this.numVals++] = sweepFlag ? 1 : 0;
                                this.cx = this.values[this.numVals++] = x;
                                this.cy = this.values[this.numVals++] = y;
                            };
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
                             * @return {java.awt.geom.Arc2D}
                             */
                            ExtendedGeneralPath.computeArc = function (x0, y0, rx, ry, angle, largeArcFlag, sweepFlag, x, y) {
                                var dx2 = (x0 - x) / 2.0;
                                var dy2 = (y0 - y) / 2.0;
                                angle = (function (x) { return x * Math.PI / 180; })(angle % 360.0);
                                var cosAngle = Math.cos(angle);
                                var sinAngle = Math.sin(angle);
                                var x1 = (cosAngle * dx2 + sinAngle * dy2);
                                var y1 = (-sinAngle * dx2 + cosAngle * dy2);
                                rx = Math.abs(rx);
                                ry = Math.abs(ry);
                                var Prx = rx * rx;
                                var Pry = ry * ry;
                                var Px1 = x1 * x1;
                                var Py1 = y1 * y1;
                                var radiiCheck = Px1 / Prx + Py1 / Pry;
                                if (radiiCheck > 0.99999) {
                                    var radiiScale = Math.sqrt(radiiCheck) * 1.00001;
                                    rx = radiiScale * rx;
                                    ry = radiiScale * ry;
                                    Prx = rx * rx;
                                    Pry = ry * ry;
                                }
                                var sign = (largeArcFlag === sweepFlag) ? -1 : 1;
                                var sq = ((Prx * Pry) - (Prx * Py1) - (Pry * Px1)) / ((Prx * Py1) + (Pry * Px1));
                                sq = (sq < 0) ? 0 : sq;
                                var coef = (sign * Math.sqrt(sq));
                                var cx1 = coef * ((rx * y1) / ry);
                                var cy1 = coef * -((ry * x1) / rx);
                                var sx2 = (x0 + x) / 2.0;
                                var sy2 = (y0 + y) / 2.0;
                                var cx = sx2 + (cosAngle * cx1 - sinAngle * cy1);
                                var cy = sy2 + (sinAngle * cx1 + cosAngle * cy1);
                                var ux = (x1 - cx1) / rx;
                                var uy = (y1 - cy1) / ry;
                                var vx = (-x1 - cx1) / rx;
                                var vy = (-y1 - cy1) / ry;
                                var p;
                                var n;
                                n = Math.sqrt((ux * ux) + (uy * uy));
                                p = ux;
                                sign = (uy < 0) ? -1.0 : 1.0;
                                var angleStart = (function (x) { return x * 180 / Math.PI; })(sign * Math.acos(p / n));
                                n = Math.sqrt((ux * ux + uy * uy) * (vx * vx + vy * vy));
                                p = ux * vx + uy * vy;
                                sign = (ux * vy - uy * vx < 0) ? -1.0 : 1.0;
                                var angleExtent = (function (x) { return x * 180 / Math.PI; })(sign * Math.acos(p / n));
                                if (!sweepFlag && angleExtent > 0) {
                                    angleExtent -= 360.0;
                                }
                                else if (sweepFlag && angleExtent < 0) {
                                    angleExtent += 360.0;
                                }
                                angleExtent %= 360.0;
                                angleStart %= 360.0;
                                var arc = new java.awt.geom.Arc2D.Double();
                                arc.x = cx - rx;
                                arc.y = cy - ry;
                                arc.width = rx * 2.0;
                                arc.height = ry * 2.0;
                                arc.start = -angleStart;
                                arc.extent = -angleExtent;
                                return arc;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} x
                             * @param {number} y
                             */
                            ExtendedGeneralPath.prototype.moveTo = function (x, y) {
                                this.makeRoom(2);
                                this.types[this.numSeg++] = java.awt.geom.PathIterator.SEG_MOVETO;
                                this.cx = this.mx = this.values[this.numVals++] = x;
                                this.cy = this.my = this.values[this.numVals++] = y;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} x
                             * @param {number} y
                             */
                            ExtendedGeneralPath.prototype.lineTo = function (x, y) {
                                this.checkMoveTo();
                                this.path.lineTo(x, y);
                                this.makeRoom(2);
                                this.types[this.numSeg++] = java.awt.geom.PathIterator.SEG_LINETO;
                                this.cx = this.values[this.numVals++] = x;
                                this.cy = this.values[this.numVals++] = y;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} x1
                             * @param {number} y1
                             * @param {number} x2
                             * @param {number} y2
                             */
                            ExtendedGeneralPath.prototype.quadTo = function (x1, y1, x2, y2) {
                                this.checkMoveTo();
                                this.path.quadTo(x1, y1, x2, y2);
                                this.makeRoom(4);
                                this.types[this.numSeg++] = java.awt.geom.PathIterator.SEG_QUADTO;
                                this.values[this.numVals++] = x1;
                                this.values[this.numVals++] = y1;
                                this.cx = this.values[this.numVals++] = x2;
                                this.cy = this.values[this.numVals++] = y2;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} x1
                             * @param {number} y1
                             * @param {number} x2
                             * @param {number} y2
                             * @param {number} x3
                             * @param {number} y3
                             */
                            ExtendedGeneralPath.prototype.curveTo = function (x1, y1, x2, y2, x3, y3) {
                                this.checkMoveTo();
                                this.path.curveTo(x1, y1, x2, y2, x3, y3);
                                this.makeRoom(6);
                                this.types[this.numSeg++] = java.awt.geom.PathIterator.SEG_CUBICTO;
                                this.values[this.numVals++] = x1;
                                this.values[this.numVals++] = y1;
                                this.values[this.numVals++] = x2;
                                this.values[this.numVals++] = y2;
                                this.cx = this.values[this.numVals++] = x3;
                                this.cy = this.values[this.numVals++] = y3;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             */
                            ExtendedGeneralPath.prototype.closePath = function () {
                                if ((this.numSeg !== 0) && (this.types[this.numSeg - 1] === java.awt.geom.PathIterator.SEG_CLOSE))
                                    return;
                                if ((this.numSeg !== 0) && (this.types[this.numSeg - 1] !== java.awt.geom.PathIterator.SEG_MOVETO))
                                    this.path.closePath();
                                this.makeRoom(0);
                                this.types[this.numSeg++] = java.awt.geom.PathIterator.SEG_CLOSE;
                                this.cx = this.mx;
                                this.cy = this.my;
                            };
                            /**
                             * Checks if previous command was a moveto command,
                             * skipping a close command (if present).
                             */
                            ExtendedGeneralPath.prototype.checkMoveTo = function () {
                                if (this.numSeg === 0)
                                    return;
                                switch ((this.types[this.numSeg - 1])) {
                                    case java.awt.geom.PathIterator.SEG_MOVETO:
                                        this.path.moveTo(this.values[this.numVals - 2], this.values[this.numVals - 1]);
                                        break;
                                    case java.awt.geom.PathIterator.SEG_CLOSE:
                                        if (this.numSeg === 1)
                                            return;
                                        if (this.types[this.numSeg - 2] === java.awt.geom.PathIterator.SEG_MOVETO)
                                            this.path.moveTo(this.values[this.numVals - 2], this.values[this.numVals - 1]);
                                        break;
                                    default:
                                        break;
                                }
                            };
                            ExtendedGeneralPath.prototype.append$java_awt_Shape$boolean = function (s, connect) {
                                this.append$java_awt_geom_PathIterator$boolean(s.getPathIterator(new java.awt.geom.AffineTransform()), connect);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {*} s
                             * @param {boolean} connect
                             */
                            ExtendedGeneralPath.prototype.append = function (s, connect) {
                                if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.awt.Shape") >= 0 || s.constructor != null && s.constructor["__interfaces"] != null && s.constructor["__interfaces"].indexOf("java.awt.Shape") >= 0)) || s === null) && ((typeof connect === 'boolean') || connect === null)) {
                                    return this.append$java_awt_Shape$boolean(s, connect);
                                }
                                else if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.awt.geom.PathIterator") >= 0 || s.constructor != null && s.constructor["__interfaces"] != null && s.constructor["__interfaces"].indexOf("java.awt.geom.PathIterator") >= 0)) || s === null) && ((typeof connect === 'boolean') || connect === null)) {
                                    return this.append$java_awt_geom_PathIterator$boolean(s, connect);
                                }
                                else if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("org.apache.batik.ext.awt.geom.ExtendedPathIterator") >= 0 || s.constructor != null && s.constructor["__interfaces"] != null && s.constructor["__interfaces"].indexOf("org.apache.batik.ext.awt.geom.ExtendedPathIterator") >= 0)) || s === null) && ((typeof connect === 'boolean') || connect === null)) {
                                    return this.append$org_apache_batik_ext_awt_geom_ExtendedPathIterator$boolean(s, connect);
                                }
                                else
                                    throw new Error('invalid overload');
                            };
                            ExtendedGeneralPath.prototype.append$java_awt_geom_PathIterator$boolean = function (pi, connect) {
                                var vals = [0, 0, 0, 0, 0, 0];
                                while ((!pi.isDone())) {
                                    /* fill */ (function (a, v) { for (var i = 0; i < a.length; i++)
                                        a[i] = v; })(vals, 0);
                                    var type = pi.currentSegment(vals);
                                    pi.next();
                                    if (connect && (this.numVals !== 0)) {
                                        if (type === java.awt.geom.PathIterator.SEG_MOVETO) {
                                            var x = vals[0];
                                            var y = vals[1];
                                            if ((x !== this.cx) || (y !== this.cy)) {
                                                type = java.awt.geom.PathIterator.SEG_LINETO;
                                            }
                                            else {
                                                if (pi.isDone())
                                                    break;
                                                type = pi.currentSegment(vals);
                                                pi.next();
                                            }
                                        }
                                        connect = false;
                                    }
                                    switch ((type)) {
                                        case java.awt.geom.PathIterator.SEG_CLOSE:
                                            this.closePath();
                                            break;
                                        case java.awt.geom.PathIterator.SEG_MOVETO:
                                            this.moveTo(vals[0], vals[1]);
                                            break;
                                        case java.awt.geom.PathIterator.SEG_LINETO:
                                            this.lineTo(vals[0], vals[1]);
                                            break;
                                        case java.awt.geom.PathIterator.SEG_QUADTO:
                                            this.quadTo(vals[0], vals[1], vals[2], vals[3]);
                                            break;
                                        case java.awt.geom.PathIterator.SEG_CUBICTO:
                                            this.curveTo(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5]);
                                            break;
                                    }
                                }
                                ;
                            };
                            ExtendedGeneralPath.prototype.append$org_apache_batik_ext_awt_geom_ExtendedPathIterator$boolean = function (epi, connect) {
                                var vals = [0, 0, 0, 0, 0, 0, 0];
                                while ((!epi.isDone())) {
                                    /* fill */ (function (a, v) { for (var i = 0; i < a.length; i++)
                                        a[i] = v; })(vals, 0);
                                    var type = epi['currentSegment$float_A'](vals);
                                    epi.next();
                                    if (connect && (this.numVals !== 0)) {
                                        if (type === java.awt.geom.PathIterator.SEG_MOVETO) {
                                            var x = vals[0];
                                            var y = vals[1];
                                            if ((x !== this.cx) || (y !== this.cy)) {
                                                type = java.awt.geom.PathIterator.SEG_LINETO;
                                            }
                                            else {
                                                if (epi.isDone())
                                                    break;
                                                type = epi['currentSegment$float_A'](vals);
                                                epi.next();
                                            }
                                        }
                                        connect = false;
                                    }
                                    switch ((type)) {
                                        case java.awt.geom.PathIterator.SEG_CLOSE:
                                            this.closePath();
                                            break;
                                        case java.awt.geom.PathIterator.SEG_MOVETO:
                                            this.moveTo(vals[0], vals[1]);
                                            break;
                                        case java.awt.geom.PathIterator.SEG_LINETO:
                                            this.lineTo(vals[0], vals[1]);
                                            break;
                                        case java.awt.geom.PathIterator.SEG_QUADTO:
                                            this.quadTo(vals[0], vals[1], vals[2], vals[3]);
                                            break;
                                        case java.awt.geom.PathIterator.SEG_CUBICTO:
                                            this.curveTo(vals[0], vals[1], vals[2], vals[3], vals[4], vals[5]);
                                            break;
                                        case org.apache.batik.ext.awt.geom.ExtendedPathIterator.SEG_ARCTO:
                                            this.arcTo(vals[0], vals[1], vals[2], (vals[3] !== 0), (vals[4] !== 0), vals[5], vals[6]);
                                            break;
                                    }
                                }
                                ;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @return {number}
                             */
                            ExtendedGeneralPath.prototype.getWindingRule = function () {
                                return this.path.getWindingRule();
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} rule
                             */
                            ExtendedGeneralPath.prototype.setWindingRule = function (rule) {
                                this.path.setWindingRule(rule);
                            };
                            /**
                             * get the current position or <code>null</code>.
                             * @return {java.awt.geom.Point2D}
                             */
                            ExtendedGeneralPath.prototype.getCurrentPoint = function () {
                                if (this.numVals === 0)
                                    return null;
                                return new java.awt.geom.Point2D.Double(this.cx, this.cy);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             */
                            ExtendedGeneralPath.prototype.reset = function () {
                                this.path.reset();
                                this.numSeg = 0;
                                this.numVals = 0;
                                this.values = null;
                                this.types = null;
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {java.awt.geom.AffineTransform} at
                             */
                            ExtendedGeneralPath.prototype.transform = function (at) {
                                if (at.getType() !== java.awt.geom.AffineTransform.TYPE_IDENTITY)
                                    throw Object.defineProperty(new Error("ExtendedGeneralPaths can not be transformed"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception'] });
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {java.awt.geom.AffineTransform} at
                             * @return {*}
                             */
                            ExtendedGeneralPath.prototype.createTransformedShape = function (at) {
                                return this.path.createTransformedShape(at);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @return {java.awt.geom.Rectangle2D}
                             */
                            ExtendedGeneralPath.prototype.getBounds2D = function () {
                                return this.path.getBounds2D();
                            };
                            ExtendedGeneralPath.prototype.contains$double$double = function (x, y) {
                                return this.path.contains(x, y);
                            };
                            ExtendedGeneralPath.prototype.contains$java_awt_geom_Point2D = function (p) {
                                return this.path.contains(p);
                            };
                            ExtendedGeneralPath.prototype.contains$double$double$double$double = function (x, y, w, h) {
                                return this.path.contains(x, y, w, h);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} x
                             * @param {number} y
                             * @param {number} w
                             * @param {number} h
                             * @return {boolean}
                             */
                            ExtendedGeneralPath.prototype.contains = function (x, y, w, h) {
                                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof w === 'number') || w === null) && ((typeof h === 'number') || h === null)) {
                                    return this.contains$double$double$double$double(x, y, w, h);
                                }
                                else if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && w === undefined && h === undefined) {
                                    return this.contains$double$double(x, y);
                                }
                                else if (((x != null && x instanceof java.awt.geom.Point2D) || x === null) && y === undefined && w === undefined && h === undefined) {
                                    return this.contains$java_awt_geom_Point2D(x);
                                }
                                else if (((x != null && x instanceof java.awt.geom.Rectangle2D) || x === null) && y === undefined && w === undefined && h === undefined) {
                                    return this.contains$java_awt_geom_Rectangle2D(x);
                                }
                                else
                                    throw new Error('invalid overload');
                            };
                            ExtendedGeneralPath.prototype.contains$java_awt_geom_Rectangle2D = function (r) {
                                return this.path.contains(r);
                            };
                            ExtendedGeneralPath.prototype.intersects$double$double$double$double = function (x, y, w, h) {
                                return this.path.intersects(x, y, w, h);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {number} x
                             * @param {number} y
                             * @param {number} w
                             * @param {number} h
                             * @return {boolean}
                             */
                            ExtendedGeneralPath.prototype.intersects = function (x, y, w, h) {
                                if (((typeof x === 'number') || x === null) && ((typeof y === 'number') || y === null) && ((typeof w === 'number') || w === null) && ((typeof h === 'number') || h === null)) {
                                    return this.intersects$double$double$double$double(x, y, w, h);
                                }
                                else if (((x != null && x instanceof java.awt.geom.Rectangle2D) || x === null) && y === undefined && w === undefined && h === undefined) {
                                    return this.intersects$java_awt_geom_Rectangle2D(x);
                                }
                                else
                                    throw new Error('invalid overload');
                            };
                            ExtendedGeneralPath.prototype.intersects$java_awt_geom_Rectangle2D = function (r) {
                                return this.path.intersects(r);
                            };
                            ExtendedGeneralPath.prototype.getPathIterator$java_awt_geom_AffineTransform = function (at) {
                                return this.path.getPathIterator(at);
                            };
                            ExtendedGeneralPath.prototype.getPathIterator$java_awt_geom_AffineTransform$double = function (at, flatness) {
                                return this.path.getPathIterator(at, flatness);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @param {java.awt.geom.AffineTransform} at
                             * @param {number} flatness
                             * @return {*}
                             */
                            ExtendedGeneralPath.prototype.getPathIterator = function (at, flatness) {
                                if (((at != null && at instanceof java.awt.geom.AffineTransform) || at === null) && ((typeof flatness === 'number') || flatness === null)) {
                                    return this.getPathIterator$java_awt_geom_AffineTransform$double(at, flatness);
                                }
                                else if (((at != null && at instanceof java.awt.geom.AffineTransform) || at === null) && flatness === undefined) {
                                    return this.getPathIterator$java_awt_geom_AffineTransform(at);
                                }
                                else
                                    throw new Error('invalid overload');
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @return {*}
                             */
                            ExtendedGeneralPath.prototype.getExtendedPathIterator = function () {
                                return new ExtendedGeneralPath.EPI(this);
                            };
                            /**
                             * Delegates to the enclosed <code>GeneralPath</code>.
                             * @return {*}
                             */
                            ExtendedGeneralPath.prototype.clone = function () {
                                try {
                                    var result = (function (o) { var clone = Object.create(o); for (var p in o) {
                                        if (o.hasOwnProperty(p))
                                            clone[p] = o[p];
                                    } return clone; })(this);
                                    result.path = (function (o) { if (o.clone != undefined) {
                                        return o.clone();
                                    }
                                    else {
                                        var clone = Object.create(o);
                                        for (var p in o) {
                                            if (o.hasOwnProperty(p))
                                                clone[p] = o[p];
                                        }
                                        return clone;
                                    } })(this.path);
                                    if (this.values != null) {
                                        result.values = (function (s) { var a = []; while (s-- > 0)
                                            a.push(0); return a; })(this.values.length);
                                        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                            while (--size >= 0)
                                                dstPts[dstOff++] = srcPts[srcOff++];
                                        }
                                        else {
                                            var tmp = srcPts.slice(srcOff, srcOff + size);
                                            for (var i = 0; i < size; i++)
                                                dstPts[dstOff++] = tmp[i];
                                        } })(this.values, 0, result.values, 0, this.values.length);
                                    }
                                    result.numVals = this.numVals;
                                    if (this.types != null) {
                                        result.types = (function (s) { var a = []; while (s-- > 0)
                                            a.push(0); return a; })(this.types.length);
                                        /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                            while (--size >= 0)
                                                dstPts[dstOff++] = srcPts[srcOff++];
                                        }
                                        else {
                                            var tmp = srcPts.slice(srcOff, srcOff + size);
                                            for (var i = 0; i < size; i++)
                                                dstPts[dstOff++] = tmp[i];
                                        } })(this.types, 0, result.types, 0, this.types.length);
                                    }
                                    result.numSeg = this.numSeg;
                                    return result;
                                }
                                catch (ex) {
                                }
                                ;
                                return null;
                            };
                            /**
                             * Make sure, that the requested number of slots in vales[] are available.
                             * Must be called even for numValues = 0, because it is also
                             * used for initialization of those arrays.
                             *
                             * @param {number} numValues number of requested coordinates
                             * @private
                             */
                            ExtendedGeneralPath.prototype.makeRoom = function (numValues) {
                                if (this.values == null) {
                                    this.values = (function (s) { var a = []; while (s-- > 0)
                                        a.push(0); return a; })(2 * numValues);
                                    this.types = [0, 0];
                                    this.numVals = 0;
                                    this.numSeg = 0;
                                    return;
                                }
                                var newSize = this.numVals + numValues;
                                if (newSize > this.values.length) {
                                    var nlen = this.values.length * 2;
                                    if (nlen < newSize)
                                        nlen = newSize;
                                    var nvals = (function (s) { var a = []; while (s-- > 0)
                                        a.push(0); return a; })(nlen);
                                    /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                        while (--size >= 0)
                                            dstPts[dstOff++] = srcPts[srcOff++];
                                    }
                                    else {
                                        var tmp = srcPts.slice(srcOff, srcOff + size);
                                        for (var i = 0; i < size; i++)
                                            dstPts[dstOff++] = tmp[i];
                                    } })(this.values, 0, nvals, 0, this.numVals);
                                    this.values = nvals;
                                }
                                if (this.numSeg === this.types.length) {
                                    var ntypes = (function (s) { var a = []; while (s-- > 0)
                                        a.push(0); return a; })(this.types.length * 2);
                                    /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                        while (--size >= 0)
                                            dstPts[dstOff++] = srcPts[srcOff++];
                                    }
                                    else {
                                        var tmp = srcPts.slice(srcOff, srcOff + size);
                                        for (var i = 0; i < size; i++)
                                            dstPts[dstOff++] = tmp[i];
                                    } })(this.types, 0, ntypes, 0, this.types.length);
                                    this.types = ntypes;
                                }
                            };
                            return ExtendedGeneralPath;
                        }());
                        geom.ExtendedGeneralPath = ExtendedGeneralPath;
                        ExtendedGeneralPath["__class"] = "org.apache.batik.ext.awt.geom.ExtendedGeneralPath";
                        ExtendedGeneralPath["__interfaces"] = ["java.awt.Shape", "java.lang.Cloneable", "org.apache.batik.ext.awt.geom.ExtendedShape"];
                        (function (ExtendedGeneralPath) {
                            var EPI = (function () {
                                function EPI(__parent) {
                                    this.__parent = __parent;
                                    this.segNum = 0;
                                    this.valsIdx = 0;
                                }
                                EPI.prototype.currentSegment$ = function () {
                                    return this.__parent.types[this.segNum];
                                };
                                EPI.prototype.currentSegment$double_A = function (coords) {
                                    var ret = this.__parent.types[this.segNum];
                                    switch ((ret)) {
                                        case 4 /* SEG_CLOSE */:
                                            break;
                                        case 0 /* SEG_MOVETO */:
                                        case 1 /* SEG_LINETO */:
                                            coords[0] = this.__parent.values[this.valsIdx];
                                            coords[1] = this.__parent.values[this.valsIdx + 1];
                                            break;
                                        case 2 /* SEG_QUADTO */:
                                            coords[0] = this.__parent.values[this.valsIdx];
                                            coords[1] = this.__parent.values[this.valsIdx + 1];
                                            coords[2] = this.__parent.values[this.valsIdx + 2];
                                            coords[3] = this.__parent.values[this.valsIdx + 3];
                                            break;
                                        case 3 /* SEG_CUBICTO */:
                                            coords[0] = this.__parent.values[this.valsIdx];
                                            coords[1] = this.__parent.values[this.valsIdx + 1];
                                            coords[2] = this.__parent.values[this.valsIdx + 2];
                                            coords[3] = this.__parent.values[this.valsIdx + 3];
                                            coords[4] = this.__parent.values[this.valsIdx + 4];
                                            coords[5] = this.__parent.values[this.valsIdx + 5];
                                            break;
                                        case 4321 /* SEG_ARCTO */:
                                            coords[0] = this.__parent.values[this.valsIdx];
                                            coords[1] = this.__parent.values[this.valsIdx + 1];
                                            coords[2] = this.__parent.values[this.valsIdx + 2];
                                            coords[3] = this.__parent.values[this.valsIdx + 3];
                                            coords[4] = this.__parent.values[this.valsIdx + 4];
                                            coords[5] = this.__parent.values[this.valsIdx + 5];
                                            coords[6] = this.__parent.values[this.valsIdx + 6];
                                            break;
                                    }
                                    return ret;
                                };
                                EPI.prototype.currentSegment = function (coords) {
                                    if (((coords != null && coords instanceof Array && (coords.length == 0 || coords[0] == null || (typeof coords[0] === 'number'))) || coords === null)) {
                                        return this.currentSegment$double_A(coords);
                                    }
                                    else if (((coords != null && coords instanceof Array && (coords.length == 0 || coords[0] == null || (typeof coords[0] === 'number'))) || coords === null)) {
                                        return this.currentSegment$float_A(coords);
                                    }
                                    else if (coords === undefined) {
                                        return this.currentSegment$();
                                    }
                                    else
                                        throw new Error('invalid overload');
                                };
                                EPI.prototype.currentSegment$float_A = function (coords) {
                                    var ret = this.__parent.types[this.segNum];
                                    switch ((ret)) {
                                        case 4 /* SEG_CLOSE */:
                                            break;
                                        case 0 /* SEG_MOVETO */:
                                        case 1 /* SEG_LINETO */:
                                            coords[0] = this.__parent.values[this.valsIdx];
                                            coords[1] = this.__parent.values[this.valsIdx + 1];
                                            break;
                                        case 2 /* SEG_QUADTO */:
                                            /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                                while (--size >= 0)
                                                    dstPts[dstOff++] = srcPts[srcOff++];
                                            }
                                            else {
                                                var tmp = srcPts.slice(srcOff, srcOff + size);
                                                for (var i = 0; i < size; i++)
                                                    dstPts[dstOff++] = tmp[i];
                                            } })(this.__parent.values, this.valsIdx, coords, 0, 4);
                                            break;
                                        case 3 /* SEG_CUBICTO */:
                                            /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                                while (--size >= 0)
                                                    dstPts[dstOff++] = srcPts[srcOff++];
                                            }
                                            else {
                                                var tmp = srcPts.slice(srcOff, srcOff + size);
                                                for (var i = 0; i < size; i++)
                                                    dstPts[dstOff++] = tmp[i];
                                            } })(this.__parent.values, this.valsIdx, coords, 0, 6);
                                            break;
                                        case 4321 /* SEG_ARCTO */:
                                            /* arraycopy */ (function (srcPts, srcOff, dstPts, dstOff, size) { if (srcPts !== dstPts || dstOff >= srcOff + size) {
                                                while (--size >= 0)
                                                    dstPts[dstOff++] = srcPts[srcOff++];
                                            }
                                            else {
                                                var tmp = srcPts.slice(srcOff, srcOff + size);
                                                for (var i = 0; i < size; i++)
                                                    dstPts[dstOff++] = tmp[i];
                                            } })(this.__parent.values, this.valsIdx, coords, 0, 7);
                                            break;
                                    }
                                    return ret;
                                };
                                EPI.prototype.getWindingRule = function () {
                                    return this.__parent.path.getWindingRule();
                                };
                                EPI.prototype.isDone = function () {
                                    return this.segNum === this.__parent.numSeg;
                                };
                                EPI.prototype.next = function () {
                                    var type = this.__parent.types[this.segNum++];
                                    switch ((type)) {
                                        case 4 /* SEG_CLOSE */:
                                            break;
                                        case 0 /* SEG_MOVETO */:
                                        case 1 /* SEG_LINETO */:
                                            this.valsIdx += 2;
                                            break;
                                        case 2 /* SEG_QUADTO */:
                                            this.valsIdx += 4;
                                            break;
                                        case 3 /* SEG_CUBICTO */:
                                            this.valsIdx += 6;
                                            break;
                                        case 4321 /* SEG_ARCTO */:
                                            this.valsIdx += 7;
                                            break;
                                    }
                                };
                                return EPI;
                            }());
                            ExtendedGeneralPath.EPI = EPI;
                            EPI["__class"] = "org.apache.batik.ext.awt.geom.ExtendedGeneralPath.EPI";
                            EPI["__interfaces"] = ["org.apache.batik.ext.awt.geom.ExtendedPathIterator"];
                        })(ExtendedGeneralPath = geom.ExtendedGeneralPath || (geom.ExtendedGeneralPath = {}));
                    })(geom = awt.geom || (awt.geom = {}));
                })(awt = ext.awt || (ext.awt = {}));
            })(ext = batik.ext || (batik.ext = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var ext;
            (function (ext) {
                var awt;
                (function (awt) {
                    var geom;
                    (function (geom) {
                        var ExtendedPathIterator;
                        (function (ExtendedPathIterator) {
                            /**
                             * The segment type constant that specifies that the preceding
                             * subpath should be closed by appending a line segment back to
                             * the point corresponding to the most recent SEG_MOVETO.
                             */
                            ExtendedPathIterator.SEG_CLOSE = java.awt.geom.PathIterator.SEG_CLOSE;
                            /**
                             *
                             * The segment type constant for a point that specifies the end
                             * point of a line to be drawn from the most recently specified
                             * point.
                             */
                            ExtendedPathIterator.SEG_MOVETO = java.awt.geom.PathIterator.SEG_MOVETO;
                            /**
                             * The segment type constant for a point that specifies the end
                             * point of a line to be drawn from the most recently specified
                             * point.
                             */
                            ExtendedPathIterator.SEG_LINETO = java.awt.geom.PathIterator.SEG_LINETO;
                            /**
                             * The segment type constant for the pair of points that specify a
                             * quadratic parametric curve to be drawn from the most recently
                             * specified point. The curve is interpolated by solving the
                             * parametric control equation in the range (t=[0..1]) using the
                             * most recently specified (current) point (CP), the first control
                             * point (P1), and the final interpolated control point (P2).
                             */
                            ExtendedPathIterator.SEG_QUADTO = java.awt.geom.PathIterator.SEG_QUADTO;
                            /**
                             * The segment type constant for the set of 3 points that specify
                             * a cubic parametric curve to be drawn from the most recently
                             * specified point. The curve is interpolated by solving the
                             * parametric control equation in the range (t=[0..1]) using the
                             * most recently specified (current) point (CP), the first control
                             * point (P1), the second control point (P2), and the final
                             * interpolated control point (P3).
                             */
                            ExtendedPathIterator.SEG_CUBICTO = java.awt.geom.PathIterator.SEG_CUBICTO;
                            /**
                             * The segment type constant for an elliptical arc.  This consists of
                             * Seven values [rx, ry, angle, largeArcFlag, sweepFlag, x, y].
                             * rx, ry are the radious of the ellipse.
                             * angle is angle of the x axis of the ellipse.
                             * largeArcFlag is zero if the smaller of the two arcs are to be used.
                             * sweepFlag is zero if the 'left' branch is taken one otherwise.
                             * x and y are the destination for the ellipse.
                             */
                            ExtendedPathIterator.SEG_ARCTO = 4321;
                            /**
                             * The winding rule constant for specifying an even-odd rule for
                             * determining the interior of a path. The even-odd rule specifies
                             * that a point lies inside the path if a ray drawn in any
                             * direction from that point to infinity is crossed by path
                             * segments an odd number of times.
                             */
                            ExtendedPathIterator.WIND_EVEN_ODD = java.awt.geom.PathIterator.WIND_EVEN_ODD;
                            /**
                             * The winding rule constant for specifying a non-zero rule for
                             * determining the interior of a path. The non-zero rule specifies
                             * that a point lies inside the path if a ray drawn in any
                             * direction from that point to infinity is crossed by path
                             * segments a different number of times in the counter-clockwise
                             * direction than the clockwise direction.
                             */
                            ExtendedPathIterator.WIND_NON_ZERO = java.awt.geom.PathIterator.WIND_NON_ZERO;
                        })(ExtendedPathIterator = geom.ExtendedPathIterator || (geom.ExtendedPathIterator = {}));
                    })(geom = awt.geom || (awt.geom = {}));
                })(awt = ext.awt || (ext.awt = {}));
            })(ext = batik.ext || (batik.ext = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var i18n;
            (function (i18n) {
                /**
                 * This class represents a group of ExtendedLocalizable objects which
                 * have a shared default locale.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 */
                var LocaleGroup = (function () {
                    function LocaleGroup() {
                        this.locale = null;
                    }
                    LocaleGroup.DEFAULT_$LI$ = function () { if (LocaleGroup.DEFAULT == null)
                        LocaleGroup.DEFAULT = new LocaleGroup(); return LocaleGroup.DEFAULT; };
                    ;
                    /**
                     * Sets the default locale for all the instances of ExtendedLocalizable
                     * in this group.
                     * @param {string} l
                     */
                    LocaleGroup.prototype.setLocale = function (l) {
                        this.locale = l;
                    };
                    /**
                     * Gets the current default locale in this group, or null.
                     * @return {string}
                     */
                    LocaleGroup.prototype.getLocale = function () {
                        return this.locale;
                    };
                    return LocaleGroup;
                }());
                i18n.LocaleGroup = LocaleGroup;
                LocaleGroup["__class"] = "org.apache.batik.i18n.LocaleGroup";
            })(i18n = batik.i18n || (batik.i18n = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var i18n;
            (function (i18n) {
                /**
                 * Same as LocalizableSupport(cls, null).
                 * @param {string} s
                 * @param {*} cls
                 * @param {*} cl
                 * @class
                 */
                var LocalizableSupport = (function () {
                    function LocalizableSupport(s, cls, cl) {
                        var _this = this;
                        /**
                         * The locale group to which this object belongs.
                         */
                        this.localeGroup = org.apache.batik.i18n.LocaleGroup.DEFAULT_$LI$();
                        /**
                         * The resources
                         */
                        this.resourceBundles = ([]);
                        if (((typeof s === 'string') || s === null) && ((cls != null) || cls === null) && ((cl != null) || cl === null)) {
                            var __args = Array.prototype.slice.call(arguments);
                            this.bundleName = null;
                            this.classLoader = null;
                            this.locale = null;
                            this.usedLocale = null;
                            this.lastResourceClass = null;
                            this.cls = null;
                            this.localeGroup = org.apache.batik.i18n.LocaleGroup.DEFAULT_$LI$();
                            this.resourceBundles = ([]);
                            this.bundleName = null;
                            this.classLoader = null;
                            this.locale = null;
                            this.usedLocale = null;
                            this.lastResourceClass = null;
                            this.cls = null;
                            (function () {
                                _this.bundleName = s;
                                _this.cls = cls;
                                _this.classLoader = cl;
                            })();
                        }
                        else if (((typeof s === 'string') || s === null) && ((cls != null) || cls === null) && cl === undefined) {
                            var __args = Array.prototype.slice.call(arguments);
                            {
                                var __args_2 = Array.prototype.slice.call(arguments);
                                var cl_1 = null;
                                this.bundleName = null;
                                this.classLoader = null;
                                this.locale = null;
                                this.usedLocale = null;
                                this.lastResourceClass = null;
                                this.cls = null;
                                this.localeGroup = org.apache.batik.i18n.LocaleGroup.DEFAULT_$LI$();
                                this.resourceBundles = ([]);
                                this.bundleName = null;
                                this.classLoader = null;
                                this.locale = null;
                                this.usedLocale = null;
                                this.lastResourceClass = null;
                                this.cls = null;
                                (function () {
                                    _this.bundleName = s;
                                    _this.cls = cls;
                                    _this.classLoader = cl_1;
                                })();
                            }
                        }
                        else if (((typeof s === 'string') || s === null) && ((cls != null) || cls === null) && cl === undefined) {
                            var __args = Array.prototype.slice.call(arguments);
                            var cl_2 = __args[1];
                            this.bundleName = null;
                            this.classLoader = null;
                            this.locale = null;
                            this.usedLocale = null;
                            this.lastResourceClass = null;
                            this.cls = null;
                            this.localeGroup = org.apache.batik.i18n.LocaleGroup.DEFAULT_$LI$();
                            this.resourceBundles = ([]);
                            this.bundleName = null;
                            this.classLoader = null;
                            this.locale = null;
                            this.usedLocale = null;
                            this.lastResourceClass = null;
                            this.cls = null;
                            (function () {
                                _this.bundleName = s;
                                _this.classLoader = cl_2;
                            })();
                        }
                        else if (((typeof s === 'string') || s === null) && cls === undefined && cl === undefined) {
                            var __args = Array.prototype.slice.call(arguments);
                            {
                                var __args_3 = Array.prototype.slice.call(arguments);
                                var cl_3 = null;
                                this.bundleName = null;
                                this.classLoader = null;
                                this.locale = null;
                                this.usedLocale = null;
                                this.lastResourceClass = null;
                                this.cls = null;
                                this.localeGroup = org.apache.batik.i18n.LocaleGroup.DEFAULT_$LI$();
                                this.resourceBundles = ([]);
                                this.bundleName = null;
                                this.classLoader = null;
                                this.locale = null;
                                this.usedLocale = null;
                                this.lastResourceClass = null;
                                this.cls = null;
                                (function () {
                                    _this.bundleName = s;
                                    _this.classLoader = cl_3;
                                })();
                            }
                        }
                        else
                            throw new Error('invalid overload');
                    }
                    /**
                     * Implements {@link org.apache.batik.i18n.Localizable#setLocale(Locale)}.
                     * @param {string} l
                     */
                    LocalizableSupport.prototype.setLocale = function (l) {
                        if (this.locale !== l) {
                            this.locale = l;
                            /* clear */ (this.resourceBundles.length = 0);
                            this.lastResourceClass = null;
                        }
                    };
                    /**
                     * Implements {@link org.apache.batik.i18n.Localizable#getLocale()}.
                     * @return {string}
                     */
                    LocalizableSupport.prototype.getLocale = function () {
                        return this.locale;
                    };
                    /**
                     * Implements {@link
                     * org.apache.batik.i18n.ExtendedLocalizable#setLocaleGroup(LocaleGroup)}.
                     * @param {org.apache.batik.i18n.LocaleGroup} lg
                     */
                    LocalizableSupport.prototype.setLocaleGroup = function (lg) {
                        this.localeGroup = lg;
                    };
                    /**
                     * Implements {@link
                     * org.apache.batik.i18n.ExtendedLocalizable#getLocaleGroup()}.
                     * @return {org.apache.batik.i18n.LocaleGroup}
                     */
                    LocalizableSupport.prototype.getLocaleGroup = function () {
                        return this.localeGroup;
                    };
                    /**
                     * Implements {@link
                     * org.apache.batik.i18n.ExtendedLocalizable#setDefaultLocale(Locale)}.
                     * Later invocations of the instance methods will lead to update the
                     * resource bundle used.
                     * @param {string} l
                     */
                    LocalizableSupport.prototype.setDefaultLocale = function (l) {
                        this.localeGroup.setLocale(l);
                    };
                    /**
                     * Implements {@link
                     * org.apache.batik.i18n.ExtendedLocalizable#getDefaultLocale()}.
                     * @return {string}
                     */
                    LocalizableSupport.prototype.getDefaultLocale = function () {
                        return this.localeGroup.getLocale();
                    };
                    /**
                     * Implements {@link
                     * org.apache.batik.i18n.Localizable#formatMessage(String,Object[])}.
                     * @param {string} key
                     * @param {Array} args
                     * @return {string}
                     */
                    LocalizableSupport.prototype.formatMessage = function (key, args) {
                        return key;
                    };
                    LocalizableSupport.prototype.getCurrentLocale = function () {
                        if (this.locale != null)
                            return this.locale;
                        var l = this.localeGroup.getLocale();
                        if (l != null)
                            return l;
                        return (window.navigator['userLanguage'] || window.navigator.language);
                    };
                    /**
                     * returns true if the locale is different from the previously
                     * used locale.  Also sets 'usedLocale' to the current locale.
                     * @return {boolean}
                     */
                    LocalizableSupport.prototype.setUsedLocale = function () {
                        var l = this.getCurrentLocale();
                        if (this.usedLocale === l)
                            return false;
                        this.usedLocale = l;
                        /* clear */ (this.resourceBundles.length = 0);
                        this.lastResourceClass = null;
                        return true;
                    };
                    LocalizableSupport.prototype.getResourceBundle$ = function () {
                        return this.getResourceBundle$int(0);
                    };
                    LocalizableSupport.prototype.hasNextResourceBundle = function (i) {
                        if (i === 0)
                            return true;
                        if (i < this.resourceBundles.length)
                            return true;
                        if (this.lastResourceClass == null)
                            return false;
                        if (this.lastResourceClass === Object)
                            return false;
                        return true;
                    };
                    LocalizableSupport.prototype.lookupResourceBundle = function (bundle, theClass) {
                        return null;
                    };
                    LocalizableSupport.prototype.getResourceBundle$int = function (i) {
                        return null;
                    };
                    LocalizableSupport.prototype.getResourceBundle = function (i) {
                        if (((typeof i === 'number') || i === null)) {
                            return this.getResourceBundle$int(i);
                        }
                        else if (i === undefined) {
                            return this.getResourceBundle$();
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    /**
                     *
                     * @param {string} key
                     * @return {string}
                     */
                    LocalizableSupport.prototype.getString = function (key) {
                        this.setUsedLocale();
                        for (var i = 0; this.hasNextResourceBundle(i); i++) {
                            var rb = this.getResourceBundle$int(i);
                            if (rb == null)
                                continue;
                            try {
                                var ret = rb.getString(key);
                                if (ret != null)
                                    return ret;
                            }
                            catch (mre) {
                            }
                            ;
                        }
                        ;
                        var classStr = (this.cls != null) ? this.cls.toString() : this.bundleName;
                        throw Object.defineProperty(new Error("Unable to find resource: " + key), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.util.MissingResourceException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                    };
                    /**
                     * Returns the integer mapped with the given string
                     * @param {string} key a key of the resource bundle
                     * @throws MissingResourceException if key is not the name of a resource
                     * @return {number}
                     */
                    LocalizableSupport.prototype.getInteger = function (key) {
                        var i = this.getString(key);
                        try {
                            return parseInt(i);
                        }
                        catch (e) {
                            throw Object.defineProperty(new Error("Malformed integer"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.util.MissingResourceException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        }
                        ;
                    };
                    LocalizableSupport.prototype.getCharacter = function (key) {
                        var s = this.getString(key);
                        if (s == null || s.length === 0) {
                            throw Object.defineProperty(new Error("Malformed character"), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.util.MissingResourceException', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception'] });
                        }
                        return (s.charAt(0)).charCodeAt(0);
                    };
                    return LocalizableSupport;
                }());
                i18n.LocalizableSupport = LocalizableSupport;
                LocalizableSupport["__class"] = "org.apache.batik.i18n.LocalizableSupport";
                LocalizableSupport["__interfaces"] = ["org.apache.batik.i18n.Localizable"];
            })(i18n = batik.i18n || (batik.i18n = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * This class is the superclass of all parsers. It provides localization
                 * and error handling methods.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 */
                var AbstractParser = (function () {
                    function AbstractParser() {
                        /**
                         * The error handler.
                         */
                        this.errorHandler = new org.apache.batik.parser.DefaultErrorHandler();
                        /**
                         * The localizable support.
                         */
                        this.localizableSupport = new org.apache.batik.i18n.LocalizableSupport(AbstractParser.BUNDLE_CLASSNAME, null);
                        this.reader = null;
                        this.current = 0;
                    }
                    /**
                     * Returns the current character value.
                     * @return {number}
                     */
                    AbstractParser.prototype.getCurrent = function () {
                        return this.current;
                    };
                    /**
                     * Implements {@link org.apache.batik.i18n.Localizable#setLocale(Locale)}.
                     * @param {string} l
                     */
                    AbstractParser.prototype.setLocale = function (l) {
                        this.localizableSupport.setLocale(l);
                    };
                    /**
                     * Implements {@link org.apache.batik.i18n.Localizable#getLocale()}.
                     * @return {string}
                     */
                    AbstractParser.prototype.getLocale = function () {
                        return this.localizableSupport.getLocale();
                    };
                    /**
                     * Implements {@link
                     * org.apache.batik.i18n.Localizable#formatMessage(String,Object[])}.
                     * @param {string} key
                     * @param {Array} args
                     * @return {string}
                     */
                    AbstractParser.prototype.formatMessage = function (key, args) {
                        return this.localizableSupport.formatMessage(key, args);
                    };
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
                     * @param {*} handler The error handler.
                     */
                    AbstractParser.prototype.setErrorHandler = function (handler) {
                        this.errorHandler = handler;
                    };
                    AbstractParser.prototype.parse$java_lang_String = function (s) {
                        try {
                            this.reader = new org.apache.batik.util.io.StringNormalizingReader(s);
                            this.doParse();
                        }
                        catch (e) {
                            this.errorHandler.error(new org.apache.batik.parser.ParseException(this.createErrorMessage("io.exception", null), e));
                        }
                        ;
                    };
                    /**
                     * Parses the given string.
                     * @param {string} s
                     */
                    AbstractParser.prototype.parse = function (s) {
                        if (((typeof s === 'string') || s === null)) {
                            return this.parse$java_lang_String(s);
                        }
                        else
                            throw new Error('invalid overload');
                    };
                    /**
                     * Signals an error to the error handler.
                     * @param {string} key The message key in the resource bundle.
                     * @param {Array} args The message arguments.
                     */
                    AbstractParser.prototype.reportError = function (key, args) {
                        this.errorHandler.error(new org.apache.batik.parser.ParseException(this.createErrorMessage(key, args), this.reader.getLine(), this.reader.getColumn()));
                    };
                    /**
                     * simple api to call often reported error.
                     * Just a wrapper for reportError().
                     *
                     * @param {string} expectedChar what caller expected
                     * @param {number} currentChar what caller found
                     */
                    AbstractParser.prototype.reportCharacterExpectedError = function (expectedChar, currentChar) {
                        this.reportError("character.expected", [new String(expectedChar), new Number(currentChar).valueOf()]);
                    };
                    /**
                     * simple api to call often reported error.
                     * Just a wrapper for reportError().
                     *
                     * @param {number} currentChar what the caller found and didnt expect
                     */
                    AbstractParser.prototype.reportUnexpectedCharacterError = function (currentChar) {
                        this.reportError("character.unexpected", [new Number(currentChar).valueOf()]);
                    };
                    /**
                     * Returns a localized error message.
                     * @param {string} key The message key in the resource bundle.
                     * @param {Array} args The message arguments.
                     * @return {string}
                     */
                    AbstractParser.prototype.createErrorMessage = function (key, args) {
                        try {
                            return this.formatMessage(key, args);
                        }
                        catch (e) {
                            return key;
                        }
                        ;
                    };
                    /**
                     * Returns the resource bundle base name.
                     * @return {string} BUNDLE_CLASSNAME.
                     */
                    AbstractParser.prototype.getBundleClassName = function () {
                        return AbstractParser.BUNDLE_CLASSNAME;
                    };
                    /**
                     * Skips the whitespaces in the current reader.
                     */
                    AbstractParser.prototype.skipSpaces = function () {
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    return;
                                case 32:
                                case 9:
                                case 13:
                                case 10:
                            }
                            this.current = this.reader.read();
                        }
                        ;
                    };
                    /**
                     * Skips the whitespaces and an optional comma.
                     */
                    AbstractParser.prototype.skipCommaSpaces = function () {
                        wsp1: for (;;) {
                            switch ((this.current)) {
                                default:
                                    break wsp1;
                                case 32:
                                case 9:
                                case 13:
                                case 10:
                            }
                            this.current = this.reader.read();
                        }
                        ;
                        if (this.current == ','.charCodeAt(0)) {
                            wsp2: for (;;) {
                                switch ((this.current = this.reader.read())) {
                                    default:
                                        break wsp2;
                                    case 32:
                                    case 9:
                                    case 13:
                                    case 10:
                                }
                            }
                            ;
                        }
                    };
                    return AbstractParser;
                }());
                /**
                 * The default resource bundle base name.
                 */
                AbstractParser.BUNDLE_CLASSNAME = "org.apache.batik.parser.resources.Messages";
                parser.AbstractParser = AbstractParser;
                AbstractParser["__class"] = "org.apache.batik.parser.AbstractParser";
                AbstractParser["__interfaces"] = ["org.apache.batik.parser.Parser", "org.apache.batik.i18n.Localizable"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * This class provides an implementation of the PathHandler that initializes
                 * a Shape from the value of a path's 'd' attribute.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 */
                var AWTPathProducer = (function () {
                    function AWTPathProducer() {
                        this.path = null;
                        this.currentX = 0;
                        this.currentY = 0;
                        this.xCenter = 0;
                        this.yCenter = 0;
                        this.windingRule = 0;
                    }
                    /**
                     * Utility method for creating an ExtendedGeneralPath.
                     * @param {{ str: string, cursor: number }} r The reader used to read the path specification.
                     * @param {number} wr The winding rule to use for creating the path.
                     * @return {*}
                     */
                    AWTPathProducer.createShape = function (r, wr) {
                        var p = new org.apache.batik.parser.PathParser();
                        var ph = new AWTPathProducer();
                        ph.setWindingRule(wr);
                        p.setPathHandler(ph);
                        null;
                        return ph.getShape();
                    };
                    /**
                     * Sets the winding rule used to construct the path.
                     * @param {number} i
                     */
                    AWTPathProducer.prototype.setWindingRule = function (i) {
                        this.windingRule = i;
                    };
                    /**
                     * Returns the current winding rule.
                     * @return {number}
                     */
                    AWTPathProducer.prototype.getWindingRule = function () {
                        return this.windingRule;
                    };
                    /**
                     * Returns the Shape object initialized during the last parsing.
                     * @return {*} the shape or null if this handler has not been used by
                     * a parser.
                     */
                    AWTPathProducer.prototype.getShape = function () {
                        return this.path;
                    };
                    /**
                     * Implements {@link PathHandler#startPath()}.
                     */
                    AWTPathProducer.prototype.startPath = function () {
                        this.currentX = 0;
                        this.currentY = 0;
                        this.xCenter = 0;
                        this.yCenter = 0;
                        this.path = new org.apache.batik.ext.awt.geom.ExtendedGeneralPath(this.windingRule);
                    };
                    /**
                     * Implements {@link PathHandler#endPath()}.
                     */
                    AWTPathProducer.prototype.endPath = function () {
                    };
                    /**
                     * Implements {@link PathHandler#movetoRel(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.movetoRel = function (x, y) {
                        this.path.moveTo(this.xCenter = this.currentX += x, this.yCenter = this.currentY += y);
                    };
                    /**
                     * Implements {@link PathHandler#movetoAbs(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.movetoAbs = function (x, y) {
                        this.path.moveTo(this.xCenter = this.currentX = x, this.yCenter = this.currentY = y);
                    };
                    /**
                     * Implements {@link PathHandler#closePath()}.
                     */
                    AWTPathProducer.prototype.closePath = function () {
                        this.path.closePath();
                        var pt = this.path.getCurrentPoint();
                        this.currentX = pt.getX();
                        this.currentY = pt.getY();
                    };
                    /**
                     * Implements {@link PathHandler#linetoRel(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.linetoRel = function (x, y) {
                        this.path.lineTo(this.xCenter = this.currentX += x, this.yCenter = this.currentY += y);
                    };
                    /**
                     * Implements {@link PathHandler#linetoAbs(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.linetoAbs = function (x, y) {
                        this.path.lineTo(this.xCenter = this.currentX = x, this.yCenter = this.currentY = y);
                    };
                    /**
                     * Implements {@link PathHandler#linetoHorizontalRel(float)}.
                     * @param {number} x
                     */
                    AWTPathProducer.prototype.linetoHorizontalRel = function (x) {
                        this.path.lineTo(this.xCenter = this.currentX += x, this.yCenter = this.currentY);
                    };
                    /**
                     * Implements {@link PathHandler#linetoHorizontalAbs(float)}.
                     * @param {number} x
                     */
                    AWTPathProducer.prototype.linetoHorizontalAbs = function (x) {
                        this.path.lineTo(this.xCenter = this.currentX = x, this.yCenter = this.currentY);
                    };
                    /**
                     * Implements {@link PathHandler#linetoVerticalRel(float)}.
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.linetoVerticalRel = function (y) {
                        this.path.lineTo(this.xCenter = this.currentX, this.yCenter = this.currentY += y);
                    };
                    /**
                     * Implements {@link PathHandler#linetoVerticalAbs(float)}.
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.linetoVerticalAbs = function (y) {
                        this.path.lineTo(this.xCenter = this.currentX, this.yCenter = this.currentY = y);
                    };
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
                    AWTPathProducer.prototype.curvetoCubicRel = function (x1, y1, x2, y2, x, y) {
                        this.path.curveTo(this.currentX + x1, this.currentY + y1, this.xCenter = this.currentX + x2, this.yCenter = this.currentY + y2, this.currentX += x, this.currentY += y);
                    };
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
                    AWTPathProducer.prototype.curvetoCubicAbs = function (x1, y1, x2, y2, x, y) {
                        this.path.curveTo(x1, y1, this.xCenter = x2, this.yCenter = y2, this.currentX = x, this.currentY = y);
                    };
                    /**
                     * Implements
                     * {@link PathHandler#curvetoCubicSmoothRel(float,float,float,float)}.
                     * @param {number} x2
                     * @param {number} y2
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.curvetoCubicSmoothRel = function (x2, y2, x, y) {
                        this.path.curveTo(this.currentX * 2 - this.xCenter, this.currentY * 2 - this.yCenter, this.xCenter = this.currentX + x2, this.yCenter = this.currentY + y2, this.currentX += x, this.currentY += y);
                    };
                    /**
                     * Implements
                     * {@link PathHandler#curvetoCubicSmoothAbs(float,float,float,float)}.
                     * @param {number} x2
                     * @param {number} y2
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.curvetoCubicSmoothAbs = function (x2, y2, x, y) {
                        this.path.curveTo(this.currentX * 2 - this.xCenter, this.currentY * 2 - this.yCenter, this.xCenter = x2, this.yCenter = y2, this.currentX = x, this.currentY = y);
                    };
                    /**
                     * Implements
                     * {@link PathHandler#curvetoQuadraticRel(float,float,float,float)}.
                     * @param {number} x1
                     * @param {number} y1
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.curvetoQuadraticRel = function (x1, y1, x, y) {
                        this.path.quadTo(this.xCenter = this.currentX + x1, this.yCenter = this.currentY + y1, this.currentX += x, this.currentY += y);
                    };
                    /**
                     * Implements
                     * {@link PathHandler#curvetoQuadraticAbs(float,float,float,float)}.
                     * @param {number} x1
                     * @param {number} y1
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.curvetoQuadraticAbs = function (x1, y1, x, y) {
                        this.path.quadTo(this.xCenter = x1, this.yCenter = y1, this.currentX = x, this.currentY = y);
                    };
                    /**
                     * Implements {@link PathHandler#curvetoQuadraticSmoothRel(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.curvetoQuadraticSmoothRel = function (x, y) {
                        this.path.quadTo(this.xCenter = this.currentX * 2 - this.xCenter, this.yCenter = this.currentY * 2 - this.yCenter, this.currentX += x, this.currentY += y);
                    };
                    /**
                     * Implements {@link PathHandler#curvetoQuadraticSmoothAbs(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    AWTPathProducer.prototype.curvetoQuadraticSmoothAbs = function (x, y) {
                        this.path.quadTo(this.xCenter = this.currentX * 2 - this.xCenter, this.yCenter = this.currentY * 2 - this.yCenter, this.currentX = x, this.currentY = y);
                    };
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
                    AWTPathProducer.prototype.arcRel = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
                        this.path.arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, this.xCenter = this.currentX += x, this.yCenter = this.currentY += y);
                    };
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
                    AWTPathProducer.prototype.arcAbs = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
                        this.path.arcTo(rx, ry, xAxisRotation, largeArcFlag, sweepFlag, this.xCenter = this.currentX = x, this.yCenter = this.currentY = y);
                    };
                    return AWTPathProducer;
                }());
                parser.AWTPathProducer = AWTPathProducer;
                AWTPathProducer["__class"] = "org.apache.batik.parser.AWTPathProducer";
                AWTPathProducer["__interfaces"] = ["org.apache.batik.parser.ShapeProducer", "org.apache.batik.parser.PathHandler"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * This class provides a default implementation of ErrorHandler.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 */
                var DefaultErrorHandler = (function () {
                    function DefaultErrorHandler() {
                    }
                    /**
                     * Implements {@link ErrorHandler#error(ParseException)}.
                     * Throws the given exception.
                     * @param {org.apache.batik.parser.ParseException} e
                     */
                    DefaultErrorHandler.prototype.error = function (e) {
                        throw e;
                    };
                    return DefaultErrorHandler;
                }());
                parser.DefaultErrorHandler = DefaultErrorHandler;
                DefaultErrorHandler["__class"] = "org.apache.batik.parser.DefaultErrorHandler";
                DefaultErrorHandler["__interfaces"] = ["org.apache.batik.parser.ErrorHandler"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * The class provides an adapter for PathHandler.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 */
                var DefaultPathHandler = (function () {
                    function DefaultPathHandler() {
                    }
                    DefaultPathHandler.INSTANCE_$LI$ = function () { if (DefaultPathHandler.INSTANCE == null)
                        DefaultPathHandler.INSTANCE = new DefaultPathHandler(); return DefaultPathHandler.INSTANCE; };
                    ;
                    /**
                     * Implements {@link PathHandler#startPath()}.
                     */
                    DefaultPathHandler.prototype.startPath = function () {
                    };
                    /**
                     * Implements {@link PathHandler#endPath()}.
                     */
                    DefaultPathHandler.prototype.endPath = function () {
                    };
                    /**
                     * Implements {@link PathHandler#movetoRel(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.movetoRel = function (x, y) {
                    };
                    /**
                     * Implements {@link PathHandler#movetoAbs(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.movetoAbs = function (x, y) {
                    };
                    /**
                     * Implements {@link PathHandler#closePath()}.
                     */
                    DefaultPathHandler.prototype.closePath = function () {
                    };
                    /**
                     * Implements {@link PathHandler#linetoRel(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.linetoRel = function (x, y) {
                    };
                    /**
                     * Implements {@link PathHandler#linetoAbs(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.linetoAbs = function (x, y) {
                    };
                    /**
                     * Implements {@link PathHandler#linetoHorizontalRel(float)}.
                     * @param {number} x
                     */
                    DefaultPathHandler.prototype.linetoHorizontalRel = function (x) {
                    };
                    /**
                     * Implements {@link PathHandler#linetoHorizontalAbs(float)}.
                     * @param {number} x
                     */
                    DefaultPathHandler.prototype.linetoHorizontalAbs = function (x) {
                    };
                    /**
                     * Implements {@link PathHandler#linetoVerticalRel(float)}.
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.linetoVerticalRel = function (y) {
                    };
                    /**
                     * Implements {@link PathHandler#linetoVerticalAbs(float)}.
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.linetoVerticalAbs = function (y) {
                    };
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
                    DefaultPathHandler.prototype.curvetoCubicRel = function (x1, y1, x2, y2, x, y) {
                    };
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
                    DefaultPathHandler.prototype.curvetoCubicAbs = function (x1, y1, x2, y2, x, y) {
                    };
                    /**
                     * Implements {@link
                     * PathHandler#curvetoCubicSmoothRel(float,float,float,float)}.
                     * @param {number} x2
                     * @param {number} y2
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.curvetoCubicSmoothRel = function (x2, y2, x, y) {
                    };
                    /**
                     * Implements {@link
                     * PathHandler#curvetoCubicSmoothAbs(float,float,float,float)}.
                     * @param {number} x2
                     * @param {number} y2
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.curvetoCubicSmoothAbs = function (x2, y2, x, y) {
                    };
                    /**
                     * Implements {@link
                     * PathHandler#curvetoQuadraticRel(float,float,float,float)}.
                     * @param {number} x1
                     * @param {number} y1
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.curvetoQuadraticRel = function (x1, y1, x, y) {
                    };
                    /**
                     * Implements {@link
                     * PathHandler#curvetoQuadraticAbs(float,float,float,float)}.
                     * @param {number} x1
                     * @param {number} y1
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.curvetoQuadraticAbs = function (x1, y1, x, y) {
                    };
                    /**
                     * Implements {@link PathHandler#curvetoQuadraticSmoothRel(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.curvetoQuadraticSmoothRel = function (x, y) {
                    };
                    /**
                     * Implements {@link PathHandler#curvetoQuadraticSmoothAbs(float,float)}.
                     * @param {number} x
                     * @param {number} y
                     */
                    DefaultPathHandler.prototype.curvetoQuadraticSmoothAbs = function (x, y) {
                    };
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
                    DefaultPathHandler.prototype.arcRel = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
                    };
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
                    DefaultPathHandler.prototype.arcAbs = function (rx, ry, xAxisRotation, largeArcFlag, sweepFlag, x, y) {
                    };
                    return DefaultPathHandler;
                }());
                parser.DefaultPathHandler = DefaultPathHandler;
                DefaultPathHandler["__class"] = "org.apache.batik.parser.DefaultPathHandler";
                DefaultPathHandler["__interfaces"] = ["org.apache.batik.parser.PathHandler"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * Creates a new ParseException.
                 * @param {string} message The error or warning message.
                 * @param {number} line The line of the last parsed character.
                 * @param {number} column The column of the last parsed character.
                 * @class
                 * @extends Error
                 */
                var ParseException = (function (_super) {
                    __extends(ParseException, _super);
                    function ParseException(message, line, column) {
                        var _this = this;
                        if (((typeof message === 'string') || message === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
                            var __args = Array.prototype.slice.call(arguments);
                            _this = _super.call(this, message) || this;
                            _this.message = message;
                            _this.exception = null;
                            _this.lineNumber = 0;
                            _this.columnNumber = 0;
                            _this.exception = null;
                            _this.lineNumber = 0;
                            _this.columnNumber = 0;
                            (function () {
                                _this.exception = null;
                                _this.lineNumber = line;
                                _this.columnNumber = column;
                            })();
                        }
                        else if (((typeof message === 'string') || message === null) && ((line != null && (line["__classes"] && line["__classes"].indexOf("java.lang.Exception") >= 0) || line != null && line instanceof Error) || line === null) && column === undefined) {
                            var __args = Array.prototype.slice.call(arguments);
                            var e_1 = __args[1];
                            _this = _super.call(this, message) || this;
                            _this.message = message;
                            _this.exception = null;
                            _this.lineNumber = 0;
                            _this.columnNumber = 0;
                            _this.exception = null;
                            _this.lineNumber = 0;
                            _this.columnNumber = 0;
                            (function () {
                                _this.exception = e_1;
                            })();
                        }
                        else if (((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Exception") >= 0) || message != null && message instanceof Error) || message === null) && line === undefined && column === undefined) {
                            var __args = Array.prototype.slice.call(arguments);
                            var e_2 = __args[0];
                            _this = _super.call(this) || this;
                            _this.exception = null;
                            _this.lineNumber = 0;
                            _this.columnNumber = 0;
                            _this.exception = null;
                            _this.lineNumber = 0;
                            _this.columnNumber = 0;
                            (function () {
                                _this.exception = e_2;
                                _this.lineNumber = -1;
                                _this.columnNumber = -1;
                            })();
                        }
                        else
                            throw new Error('invalid overload');
                        return _this;
                    }
                    /**
                     * Return a detail message for this exception.
                     *
                     * <p>If there is a embedded exception, and if the ParseException
                     * has no detail message of its own, this method will return
                     * the detail message from the embedded exception.
                     * @return {string} The error or warning message.
                     */
                    ParseException.prototype.getMessage = function () {
                        var message = _super.prototype.message;
                        if (message == null && this.exception != null) {
                            return this.exception.message;
                        }
                        else {
                            return message;
                        }
                    };
                    /**
                     * Return the embedded exception, if any.
                     * @return {Error} The embedded exception, or null if there is none.
                     */
                    ParseException.prototype.getException = function () {
                        return this.exception;
                    };
                    /**
                     * Returns the line of the last parsed character.
                     * @return {number}
                     */
                    ParseException.prototype.getLineNumber = function () {
                        return this.lineNumber;
                    };
                    /**
                     * Returns the column of the last parsed character.
                     * @return {number}
                     */
                    ParseException.prototype.getColumnNumber = function () {
                        return this.columnNumber;
                    };
                    return ParseException;
                }(Error));
                parser.ParseException = ParseException;
                ParseException["__class"] = "org.apache.batik.parser.ParseException";
                ParseException["__interfaces"] = ["java.io.Serializable"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                /**
                 * This class contains utility functions to manage encodings.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 */
                var EncodingUtilities = (function () {
                    function EncodingUtilities() {
                    }
                    EncodingUtilities.__static_initialize = function () { if (!EncodingUtilities.__static_initialized) {
                        EncodingUtilities.__static_initialized = true;
                        EncodingUtilities.__static_initializer_0();
                    } };
                    EncodingUtilities.ENCODINGS_$LI$ = function () { EncodingUtilities.__static_initialize(); if (EncodingUtilities.ENCODINGS == null)
                        EncodingUtilities.ENCODINGS = ({}); return EncodingUtilities.ENCODINGS; };
                    ;
                    EncodingUtilities.__static_initializer_0 = function () {
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "UTF-8", "UTF8");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "UTF-16", "Unicode");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "US-ASCII", "ASCII");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-1", "8859_1");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-2", "8859_2");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-3", "8859_3");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-4", "8859_4");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-5", "8859_5");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-6", "8859_6");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-7", "8859_7");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-8", "8859_8");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-8859-9", "8859_9");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-2022-JP", "JIS");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "WINDOWS-31J", "MS932");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EUC-JP", "EUCJIS");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "GB2312", "GB2312");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "BIG5", "Big5");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EUC-KR", "KSC5601");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "ISO-2022-KR", "ISO2022KR");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "KOI8-R", "KOI8_R");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-US", "Cp037");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-CA", "Cp037");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-NL", "Cp037");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-WT", "Cp037");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-DK", "Cp277");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-NO", "Cp277");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-FI", "Cp278");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-SE", "Cp278");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-IT", "Cp280");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-ES", "Cp284");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-GB", "Cp285");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-FR", "Cp297");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-AR1", "Cp420");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-HE", "Cp424");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-BE", "Cp500");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-CH", "Cp500");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-ROECE", "Cp870");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-YU", "Cp870");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-IS", "Cp871");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "EBCDIC-CP-AR2", "Cp918");
                        /* put */ (function (m, k, v) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                m.entries[i].value = v;
                                return;
                            } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(EncodingUtilities.ENCODINGS_$LI$(), "CP1252", "Cp1252");
                    };
                    /**
                     * Returns the Java encoding string mapped with the given standard
                     * encoding string.
                     * @return {string} null if no mapping was found.
                     * @param {string} encoding
                     */
                    EncodingUtilities.javaEncoding = function (encoding) {
                        return (function (m, k) { if (m.entries == null)
                            m.entries = []; for (var i = 0; i < m.entries.length; i++)
                            if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                return m.entries[i].value;
                            } return null; })(EncodingUtilities.ENCODINGS_$LI$(), encoding.toUpperCase());
                    };
                    return EncodingUtilities;
                }());
                EncodingUtilities.__static_initialized = false;
                util.EncodingUtilities = EncodingUtilities;
                EncodingUtilities["__class"] = "org.apache.batik.util.EncodingUtilities";
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * This class is the superclass of all the char decoders.
                     *
                     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                     * @version $Id$
                     * @class
                     */
                    var AbstractCharDecoder = (function () {
                        function AbstractCharDecoder(is) {
                            /**
                             * The input buffer.
                             */
                            this.buffer = (function (s) { var a = []; while (s-- > 0)
                                a.push(0); return a; })(AbstractCharDecoder.BUFFER_SIZE);
                            this.inputStream = null;
                            this.position = 0;
                            this.count = 0;
                            this.inputStream = is;
                        }
                        /**
                         * Disposes the associated resources.
                         */
                        AbstractCharDecoder.prototype.dispose = function () {
                            /* close */ ;
                            this.inputStream = null;
                        };
                        /**
                         * Fills the input buffer.
                         */
                        AbstractCharDecoder.prototype.fillBuffer = function () {
                            this.count = (function (r) { return r.str.charCodeAt(r.cursor++); })(this.inputStream);
                            this.position = 0;
                        };
                        /**
                         * To throws an exception when the input stream contains an
                         * invalid character.
                         * @param {string} encoding The encoding name.
                         */
                        AbstractCharDecoder.prototype.charError = function (encoding) {
                            throw Object.defineProperty(new Error(org.apache.batik.util.io.Messages.formatMessage("invalid.char", [encoding])), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.io.IOException', 'java.lang.Object', 'java.lang.Exception'] });
                        };
                        /**
                         * To throws an exception when the end of stream was unexpected.
                         * @param {string} encoding The encoding name.
                         */
                        AbstractCharDecoder.prototype.endOfStreamError = function (encoding) {
                            throw Object.defineProperty(new Error(org.apache.batik.util.io.Messages.formatMessage("end.of.stream", [encoding])), '__classes', { configurable: true, value: ['java.lang.Throwable', 'java.io.IOException', 'java.lang.Object', 'java.lang.Exception'] });
                        };
                        return AbstractCharDecoder;
                    }());
                    /**
                     * The buffer size.
                     */
                    AbstractCharDecoder.BUFFER_SIZE = 8192;
                    io.AbstractCharDecoder = AbstractCharDecoder;
                    AbstractCharDecoder["__class"] = "org.apache.batik.util.io.AbstractCharDecoder";
                    AbstractCharDecoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    var CharDecoder;
                    (function (CharDecoder) {
                        /**
                         * This constant represents the end of stream character.
                         */
                        CharDecoder.END_OF_STREAM = -1;
                    })(CharDecoder = io.CharDecoder || (io.CharDecoder = {}));
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new GenericDecoder.
                     * @param {{ str: string, cursor: number }} is The input stream to decode.
                     * @param {string} enc The Java encoding name.
                     * @class
                     */
                    var GenericDecoder = (function () {
                        function GenericDecoder(is, enc) {
                            var _this = this;
                            if (((is != null && (is instanceof Object)) || is === null) && ((typeof enc === 'string') || enc === null)) {
                                var __args = Array.prototype.slice.call(arguments);
                                this.reader = null;
                                this.reader = null;
                                (function () {
                                    _this.reader = is;
                                    _this.reader = _this.reader;
                                })();
                            }
                            else if (((is != null && (is instanceof Object)) || is === null) && enc === undefined) {
                                var __args = Array.prototype.slice.call(arguments);
                                var r_1 = __args[0];
                                this.reader = null;
                                this.reader = null;
                                (function () {
                                    _this.reader = r_1;
                                    if (!(r_1 != null && (r_1 instanceof Object))) {
                                        _this.reader = _this.reader;
                                    }
                                })();
                            }
                            else
                                throw new Error('invalid overload');
                        }
                        /**
                         * Reads the next character.
                         * @return {number} a character or END_OF_STREAM.
                         */
                        GenericDecoder.prototype.readChar = function () {
                            return (function (r) { return r.str.charCodeAt(r.cursor++); })(this.reader);
                        };
                        /**
                         * Disposes the associated resources.
                         */
                        GenericDecoder.prototype.dispose = function () {
                            /* close */ ;
                            this.reader = null;
                        };
                        return GenericDecoder;
                    }());
                    io.GenericDecoder = GenericDecoder;
                    GenericDecoder["__class"] = "org.apache.batik.util.io.GenericDecoder";
                    GenericDecoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * This class represents a reader which normalizes the line break: \n,
                     * \r, \r\n are replaced by \n.  The methods of this reader are not
                     * synchronized.  The input is buffered.
                     *
                     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                     * @version $Id$
                     * @class
                     * @extends { str: string, cursor: number }
                     */
                    var NormalizingReader = (function () {
                        function NormalizingReader() {
                        }
                        NormalizingReader.prototype.read$char_A$int$int = function (cbuf, off, len) {
                            if (len === 0) {
                                return 0;
                            }
                            var c = this.read();
                            if (c === -1) {
                                return -1;
                            }
                            var result = 0;
                            do {
                                cbuf[result + off] = String.fromCharCode(c);
                                result++;
                                c = this.read();
                            } while ((c !== -1 && result < len));
                            return result;
                        };
                        /**
                         * Read characters into a portion of an array.
                         * @param {Array} cbuf  Destination buffer
                         * @param {number} off   Offset at which to start writing characters
                         * @param {number} len   Maximum number of characters to read
                         * @return {number} The number of characters read, or -1 if the end of the
                         * stream has been reached
                         */
                        NormalizingReader.prototype.read = function (cbuf, off, len) {
                            if (((cbuf != null && cbuf instanceof Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                                return this.read$char_A$int$int(cbuf, off, len);
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        return NormalizingReader;
                    }());
                    io.NormalizingReader = NormalizingReader;
                    NormalizingReader["__class"] = "org.apache.batik.util.io.NormalizingReader";
                    NormalizingReader["__interfaces"] = ["java.io.Closeable", "java.lang.Readable", "java.lang.AutoCloseable"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new StringDecoder.
                     * @param {string} s
                     * @class
                     */
                    var StringDecoder = (function () {
                        function StringDecoder(s) {
                            this.string = null;
                            this.length = 0;
                            this.next = 0;
                            this.string = s;
                            this.length = s.length;
                        }
                        /**
                         * Reads the next character.
                         * @return {number} a character or END_OF_STREAM.
                         */
                        StringDecoder.prototype.readChar = function () {
                            if (this.next === this.length) {
                                return org.apache.batik.util.io.CharDecoder.END_OF_STREAM;
                            }
                            return (this.string.charAt(this.next++)).charCodeAt(0);
                        };
                        /**
                         * Disposes the associated resources.
                         */
                        StringDecoder.prototype.dispose = function () {
                            this.string = null;
                        };
                        return StringDecoder;
                    }());
                    io.StringDecoder = StringDecoder;
                    StringDecoder["__class"] = "org.apache.batik.util.io.StringDecoder";
                    StringDecoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * This class manages the message for the IO utilities classes.
                     *
                     * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                     * @version $Id$
                     * @class
                     */
                    var Messages = (function () {
                        function Messages() {
                        }
                        Messages.localizableSupport_$LI$ = function () { if (Messages.localizableSupport == null)
                            Messages.localizableSupport = new org.apache.batik.i18n.LocalizableSupport(Messages.RESOURCES, null); return Messages.localizableSupport; };
                        ;
                        /**
                         * Implements {@link org.apache.batik.i18n.Localizable#setLocale(Locale)}.
                         * @param {string} l
                         */
                        Messages.setLocale = function (l) {
                            Messages.localizableSupport_$LI$().setLocale(l);
                        };
                        /**
                         * Implements {@link org.apache.batik.i18n.Localizable#getLocale()}.
                         * @return {string}
                         */
                        Messages.getLocale = function () {
                            return Messages.localizableSupport_$LI$().getLocale();
                        };
                        /**
                         * Implements {@link
                         * org.apache.batik.i18n.Localizable#formatMessage(String,Object[])}.
                         * @param {string} key
                         * @param {Array} args
                         * @return {string}
                         */
                        Messages.formatMessage = function (key, args) {
                            return Messages.localizableSupport_$LI$().formatMessage(key, args);
                        };
                        return Messages;
                    }());
                    /**
                     * The error messages bundle class name.
                     */
                    Messages.RESOURCES = "org.apache.batik.util.io.Messages";
                    io.Messages = Messages;
                    Messages["__class"] = "org.apache.batik.util.io.Messages";
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * This class represents a parser with support for numbers.
                 *
                 * @author <a href="mailto:stephane@hillion.org">Stephane Hillion</a>
                 * @version $Id$
                 * @class
                 * @extends org.apache.batik.parser.AbstractParser
                 */
                var NumberParser = (function (_super) {
                    __extends(NumberParser, _super);
                    function NumberParser() {
                        return _super.call(this) || this;
                    }
                    NumberParser.__static_initialize = function () { if (!NumberParser.__static_initialized) {
                        NumberParser.__static_initialized = true;
                        NumberParser.__static_initializer_0();
                    } };
                    /**
                     * Parses the content of the buffer and converts it to a float.
                     * @return {number}
                     */
                    NumberParser.prototype.parseFloat = function () {
                        var mant = 0;
                        var mantDig = 0;
                        var mantPos = true;
                        var mantRead = false;
                        var exp = 0;
                        var expDig = 0;
                        var expAdj = 0;
                        var expPos = true;
                        switch ((this.current)) {
                            case 45 /* '-' */:
                                mantPos = false;
                            case 43 /* '+' */:
                                this.current = this.reader.read();
                        }
                        m1: switch ((this.current)) {
                            default:
                                this.reportUnexpectedCharacterError(this.current);
                                return 0.0;
                            case 46 /* '.' */:
                                break;
                            case 48 /* '0' */:
                                mantRead = true;
                                l: for (;;) {
                                    this.current = this.reader.read();
                                    switch ((this.current)) {
                                        case 49 /* '1' */:
                                        case 50 /* '2' */:
                                        case 51 /* '3' */:
                                        case 52 /* '4' */:
                                        case 53 /* '5' */:
                                        case 54 /* '6' */:
                                        case 55 /* '7' */:
                                        case 56 /* '8' */:
                                        case 57 /* '9' */:
                                            break l;
                                        case 46 /* '.' */:
                                        case 101 /* 'e' */:
                                        case 69 /* 'E' */:
                                            break m1;
                                        default:
                                            return 0.0;
                                        case 48 /* '0' */:
                                    }
                                }
                                ;
                                ;
                            case 49 /* '1' */:
                            case 50 /* '2' */:
                            case 51 /* '3' */:
                            case 52 /* '4' */:
                            case 53 /* '5' */:
                            case 54 /* '6' */:
                            case 55 /* '7' */:
                            case 56 /* '8' */:
                            case 57 /* '9' */:
                                mantRead = true;
                                l: for (;;) {
                                    if (mantDig < 9) {
                                        mantDig++;
                                        mant = mant * 10 + (this.current - '0'.charCodeAt(0));
                                    }
                                    else {
                                        expAdj++;
                                    }
                                    this.current = this.reader.read();
                                    switch ((this.current)) {
                                        default:
                                            break l;
                                        case 48 /* '0' */:
                                        case 49 /* '1' */:
                                        case 50 /* '2' */:
                                        case 51 /* '3' */:
                                        case 52 /* '4' */:
                                        case 53 /* '5' */:
                                        case 54 /* '6' */:
                                        case 55 /* '7' */:
                                        case 56 /* '8' */:
                                        case 57 /* '9' */:
                                    }
                                }
                                ;
                                ;
                        }
                        if (this.current == '.'.charCodeAt(0)) {
                            this.current = this.reader.read();
                            m2: switch ((this.current)) {
                                default:
                                case 101 /* 'e' */:
                                case 69 /* 'E' */:
                                    if (!mantRead) {
                                        this.reportUnexpectedCharacterError(this.current);
                                        return 0.0;
                                    }
                                    break;
                                case 48 /* '0' */:
                                    if (mantDig === 0) {
                                        l: for (;;) {
                                            this.current = this.reader.read();
                                            expAdj--;
                                            switch ((this.current)) {
                                                case 49 /* '1' */:
                                                case 50 /* '2' */:
                                                case 51 /* '3' */:
                                                case 52 /* '4' */:
                                                case 53 /* '5' */:
                                                case 54 /* '6' */:
                                                case 55 /* '7' */:
                                                case 56 /* '8' */:
                                                case 57 /* '9' */:
                                                    break l;
                                                default:
                                                    if (!mantRead) {
                                                        return 0.0;
                                                    }
                                                    break m2;
                                                case 48 /* '0' */:
                                            }
                                        }
                                        ;
                                    }
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    l: for (;;) {
                                        if (mantDig < 9) {
                                            mantDig++;
                                            mant = mant * 10 + (this.current - '0'.charCodeAt(0));
                                            expAdj--;
                                        }
                                        this.current = this.reader.read();
                                        switch ((this.current)) {
                                            default:
                                                break l;
                                            case 48 /* '0' */:
                                            case 49 /* '1' */:
                                            case 50 /* '2' */:
                                            case 51 /* '3' */:
                                            case 52 /* '4' */:
                                            case 53 /* '5' */:
                                            case 54 /* '6' */:
                                            case 55 /* '7' */:
                                            case 56 /* '8' */:
                                            case 57 /* '9' */:
                                        }
                                    }
                                    ;
                                    ;
                            }
                        }
                        switch ((this.current)) {
                            case 101 /* 'e' */:
                            case 69 /* 'E' */:
                                this.current = this.reader.read();
                                switch ((this.current)) {
                                    default:
                                        this.reportUnexpectedCharacterError(this.current);
                                        return 0.0;
                                    case 45 /* '-' */:
                                        expPos = false;
                                    case 43 /* '+' */:
                                        this.current = this.reader.read();
                                        switch ((this.current)) {
                                            default:
                                                this.reportUnexpectedCharacterError(this.current);
                                                return 0.0;
                                            case 48 /* '0' */:
                                            case 49 /* '1' */:
                                            case 50 /* '2' */:
                                            case 51 /* '3' */:
                                            case 52 /* '4' */:
                                            case 53 /* '5' */:
                                            case 54 /* '6' */:
                                            case 55 /* '7' */:
                                            case 56 /* '8' */:
                                            case 57 /* '9' */:
                                        }
                                    case 48 /* '0' */:
                                    case 49 /* '1' */:
                                    case 50 /* '2' */:
                                    case 51 /* '3' */:
                                    case 52 /* '4' */:
                                    case 53 /* '5' */:
                                    case 54 /* '6' */:
                                    case 55 /* '7' */:
                                    case 56 /* '8' */:
                                    case 57 /* '9' */:
                                }
                                en: switch ((this.current)) {
                                    case 48 /* '0' */:
                                        l: for (;;) {
                                            this.current = this.reader.read();
                                            switch ((this.current)) {
                                                case 49 /* '1' */:
                                                case 50 /* '2' */:
                                                case 51 /* '3' */:
                                                case 52 /* '4' */:
                                                case 53 /* '5' */:
                                                case 54 /* '6' */:
                                                case 55 /* '7' */:
                                                case 56 /* '8' */:
                                                case 57 /* '9' */:
                                                    break l;
                                                default:
                                                    break en;
                                                case 48 /* '0' */:
                                            }
                                        }
                                        ;
                                        ;
                                    case 49 /* '1' */:
                                    case 50 /* '2' */:
                                    case 51 /* '3' */:
                                    case 52 /* '4' */:
                                    case 53 /* '5' */:
                                    case 54 /* '6' */:
                                    case 55 /* '7' */:
                                    case 56 /* '8' */:
                                    case 57 /* '9' */:
                                        l: for (;;) {
                                            if (expDig < 3) {
                                                expDig++;
                                                exp = exp * 10 + (this.current - '0'.charCodeAt(0));
                                            }
                                            this.current = this.reader.read();
                                            switch ((this.current)) {
                                                default:
                                                    break l;
                                                case 48 /* '0' */:
                                                case 49 /* '1' */:
                                                case 50 /* '2' */:
                                                case 51 /* '3' */:
                                                case 52 /* '4' */:
                                                case 53 /* '5' */:
                                                case 54 /* '6' */:
                                                case 55 /* '7' */:
                                                case 56 /* '8' */:
                                                case 57 /* '9' */:
                                            }
                                        }
                                        ;
                                        ;
                                }
                                ;
                            default:
                        }
                        if (!expPos) {
                            exp = -exp;
                        }
                        exp += expAdj;
                        if (!mantPos) {
                            mant = -mant;
                        }
                        return NumberParser.buildFloat(mant, exp);
                    };
                    /**
                     * Computes a float from mantissa and exponent.
                     * @param {number} mant
                     * @param {number} exp
                     * @return {number}
                     */
                    NumberParser.buildFloat = function (mant, exp) {
                        if (exp < -125 || mant === 0) {
                            return 0.0;
                        }
                        if (exp >= 128) {
                            return (mant > 0) ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
                        }
                        if (exp === 0) {
                            return mant;
                        }
                        if (mant >= (1 << 26)) {
                            mant++;
                        }
                        return ((exp > 0) ? mant * NumberParser.pow10_$LI$()[exp] : mant / NumberParser.pow10_$LI$()[-exp]);
                    };
                    NumberParser.pow10_$LI$ = function () { NumberParser.__static_initialize(); if (NumberParser.pow10 == null)
                        NumberParser.pow10 = (function (s) { var a = []; while (s-- > 0)
                            a.push(0); return a; })(128); return NumberParser.pow10; };
                    ;
                    NumberParser.__static_initializer_0 = function () {
                        for (var i = 0; i < NumberParser.pow10_$LI$().length; i++) {
                            NumberParser.pow10_$LI$()[i] = Math.pow(10, i);
                        }
                        ;
                    };
                    return NumberParser;
                }(org.apache.batik.parser.AbstractParser));
                NumberParser.__static_initialized = false;
                parser.NumberParser = NumberParser;
                NumberParser["__class"] = "org.apache.batik.parser.NumberParser";
                NumberParser["__interfaces"] = ["org.apache.batik.parser.Parser", "org.apache.batik.i18n.Localizable"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new ASCIIDecoder.
                     * @param {{ str: string, cursor: number }} is
                     * @class
                     * @extends org.apache.batik.util.io.AbstractCharDecoder
                     */
                    var ASCIIDecoder = (function (_super) {
                        __extends(ASCIIDecoder, _super);
                        function ASCIIDecoder(is) {
                            return _super.call(this, is) || this;
                        }
                        /**
                         * Reads the next character.
                         * @return {number} a character or END_OF_STREAM.
                         */
                        ASCIIDecoder.prototype.readChar = function () {
                            if (this.position === this.count) {
                                this.fillBuffer();
                            }
                            if (this.count === -1) {
                                return org.apache.batik.util.io.CharDecoder.END_OF_STREAM;
                            }
                            var result = this.buffer[this.position++];
                            if (result < 0) {
                                this.charError("ASCII");
                            }
                            return result;
                        };
                        return ASCIIDecoder;
                    }(org.apache.batik.util.io.AbstractCharDecoder));
                    io.ASCIIDecoder = ASCIIDecoder;
                    ASCIIDecoder["__class"] = "org.apache.batik.util.io.ASCIIDecoder";
                    ASCIIDecoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new ISO_8859_1Decoder.
                     * @param {{ str: string, cursor: number }} is
                     * @class
                     * @extends org.apache.batik.util.io.AbstractCharDecoder
                     */
                    var ISO_8859_1Decoder = (function (_super) {
                        __extends(ISO_8859_1Decoder, _super);
                        function ISO_8859_1Decoder(is) {
                            return _super.call(this, is) || this;
                        }
                        /**
                         * Reads the next character.
                         * @return {number} a character or END_OF_STREAM.
                         */
                        ISO_8859_1Decoder.prototype.readChar = function () {
                            if (this.position === this.count) {
                                this.fillBuffer();
                            }
                            if (this.count === -1) {
                                return -1;
                            }
                            return this.buffer[this.position++] & 255;
                        };
                        return ISO_8859_1Decoder;
                    }(org.apache.batik.util.io.AbstractCharDecoder));
                    io.ISO_8859_1Decoder = ISO_8859_1Decoder;
                    ISO_8859_1Decoder["__class"] = "org.apache.batik.util.io.ISO_8859_1Decoder";
                    ISO_8859_1Decoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new UTF16Decoder.
                     * @param {{ str: string, cursor: number }} is The stream to decode.
                     * @param {boolean} be Whether or not the given stream's byte-order is
                     * big-endian.
                     * @class
                     * @extends org.apache.batik.util.io.AbstractCharDecoder
                     */
                    var UTF16Decoder = (function (_super) {
                        __extends(UTF16Decoder, _super);
                        function UTF16Decoder(is, be) {
                            var _this = this;
                            if (((is != null && (is instanceof Object)) || is === null) && ((typeof be === 'boolean') || be === null)) {
                                var __args = Array.prototype.slice.call(arguments);
                                _this = _super.call(this, is) || this;
                                _this.bigEndian = false;
                                _this.bigEndian = false;
                                (function () {
                                    _this.bigEndian = be;
                                })();
                            }
                            else if (((is != null && (is instanceof Object)) || is === null) && be === undefined) {
                                var __args = Array.prototype.slice.call(arguments);
                                _this = _super.call(this, is) || this;
                                _this.bigEndian = false;
                                _this.bigEndian = false;
                                (function () {
                                    var b1 = (function (r) { return r.str.charCodeAt(r.cursor++); })(is);
                                    if (b1 === -1) {
                                        _this.endOfStreamError("UTF-16");
                                    }
                                    var b2 = (function (r) { return r.str.charCodeAt(r.cursor++); })(is);
                                    if (b2 === -1) {
                                        _this.endOfStreamError("UTF-16");
                                    }
                                    var m = (((b1 & 255) << 8) | (b2 & 255));
                                    switch ((m)) {
                                        case 65279:
                                            _this.bigEndian = true;
                                            break;
                                        case 65534:
                                            break;
                                        default:
                                            _this.charError("UTF-16");
                                    }
                                })();
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        /**
                         * Reads the next character.
                         * @return {number} a character or END_OF_STREAM.
                         */
                        UTF16Decoder.prototype.readChar = function () {
                            if (this.position === this.count) {
                                this.fillBuffer();
                            }
                            if (this.count === -1) {
                                return org.apache.batik.util.io.CharDecoder.END_OF_STREAM;
                            }
                            var b1 = this.buffer[this.position++];
                            if (this.position === this.count) {
                                this.fillBuffer();
                            }
                            if (this.count === -1) {
                                this.endOfStreamError("UTF-16");
                            }
                            var b2 = this.buffer[this.position++];
                            var c = (this.bigEndian) ? (((b1 & 255) << 8) | (b2 & 255)) : (((b2 & 255) << 8) | (b1 & 255));
                            if (c === 65534) {
                                this.charError("UTF-16");
                            }
                            return c;
                        };
                        return UTF16Decoder;
                    }(org.apache.batik.util.io.AbstractCharDecoder));
                    io.UTF16Decoder = UTF16Decoder;
                    UTF16Decoder["__class"] = "org.apache.batik.util.io.UTF16Decoder";
                    UTF16Decoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new UTF8Decoder.
                     * @param {{ str: string, cursor: number }} is
                     * @class
                     * @extends org.apache.batik.util.io.AbstractCharDecoder
                     */
                    var UTF8Decoder = (function (_super) {
                        __extends(UTF8Decoder, _super);
                        function UTF8Decoder(is) {
                            var _this = _super.call(this, is) || this;
                            /**
                             * The next char, in case of a 4 bytes sequence.
                             */
                            _this.nextChar = -1;
                            return _this;
                        }
                        UTF8Decoder.UTF8_BYTES_$LI$ = function () { if (UTF8Decoder.UTF8_BYTES == null)
                            UTF8Decoder.UTF8_BYTES = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0]; return UTF8Decoder.UTF8_BYTES; };
                        ;
                        /**
                         * Reads the next character.
                         * @return {number} a character or END_OF_STREAM.
                         */
                        UTF8Decoder.prototype.readChar = function () {
                            if (this.nextChar !== -1) {
                                var result = this.nextChar;
                                this.nextChar = -1;
                                return result;
                            }
                            if (this.position === this.count) {
                                this.fillBuffer();
                            }
                            if (this.count === -1) {
                                return org.apache.batik.util.io.CharDecoder.END_OF_STREAM;
                            }
                            var b1 = this.buffer[this.position++] & 255;
                            switch ((UTF8Decoder.UTF8_BYTES_$LI$()[b1])) {
                                default:
                                    this.charError("UTF-8");
                                case 1:
                                    return b1;
                                case 2:
                                    if (this.position === this.count) {
                                        this.fillBuffer();
                                    }
                                    if (this.count === -1) {
                                        this.endOfStreamError("UTF-8");
                                    }
                                    return ((b1 & 31) << 6) | (this.buffer[this.position++] & 63);
                                case 3:
                                    if (this.position === this.count) {
                                        this.fillBuffer();
                                    }
                                    if (this.count === -1) {
                                        this.endOfStreamError("UTF-8");
                                    }
                                    var b2 = this.buffer[this.position++];
                                    if (this.position === this.count) {
                                        this.fillBuffer();
                                    }
                                    if (this.count === -1) {
                                        this.endOfStreamError("UTF-8");
                                    }
                                    var b3 = this.buffer[this.position++];
                                    if ((b2 & 192) !== 128 || (b3 & 192) !== 128) {
                                        this.charError("UTF-8");
                                    }
                                    return ((b1 & 31) << 12) | ((b2 & 63) << 6) | (b3 & 31);
                                case 4:
                                    if (this.position === this.count) {
                                        this.fillBuffer();
                                    }
                                    if (this.count === -1) {
                                        this.endOfStreamError("UTF-8");
                                    }
                                    b2 = this.buffer[this.position++];
                                    if (this.position === this.count) {
                                        this.fillBuffer();
                                    }
                                    if (this.count === -1) {
                                        this.endOfStreamError("UTF-8");
                                    }
                                    b3 = this.buffer[this.position++];
                                    if (this.position === this.count) {
                                        this.fillBuffer();
                                    }
                                    if (this.count === -1) {
                                        this.endOfStreamError("UTF-8");
                                    }
                                    var b4 = this.buffer[this.position++];
                                    if ((b2 & 192) !== 128 || (b3 & 192) !== 128 || (b4 & 192) !== 128) {
                                        this.charError("UTF-8");
                                    }
                                    var c = ((b1 & 31) << 18) | ((b2 & 63) << 12) | ((b3 & 31) << 6) | (b4 & 31);
                                    this.nextChar = (c - 65536) % 1024 + 56320;
                                    return ((c - 65536) / 1024 | 0) + 55296;
                            }
                        };
                        return UTF8Decoder;
                    }(org.apache.batik.util.io.AbstractCharDecoder));
                    io.UTF8Decoder = UTF8Decoder;
                    UTF8Decoder["__class"] = "org.apache.batik.util.io.UTF8Decoder";
                    UTF8Decoder["__interfaces"] = ["org.apache.batik.util.io.CharDecoder"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new NormalizingReader.
                     * @param {{ str: string, cursor: number }} is The input stream to decode.
                     * @param {string} enc The standard encoding name. A null encoding means
                     * ISO-8859-1.
                     * @class
                     * @extends org.apache.batik.util.io.NormalizingReader
                     */
                    var StreamNormalizingReader = (function (_super) {
                        __extends(StreamNormalizingReader, _super);
                        function StreamNormalizingReader(is, enc) {
                            var _this = this;
                            if (((is != null && (is instanceof Object)) || is === null) && ((typeof enc === 'string') || enc === null)) {
                                var __args = Array.prototype.slice.call(arguments);
                                _this = _super.call(this) || this;
                                _this.charDecoder = null;
                                _this.column = 0;
                                _this.nextChar = -1;
                                _this.line = 1;
                                _this.charDecoder = null;
                                _this.column = 0;
                                (function () {
                                    if (enc == null) {
                                        enc = "ISO-8859-1";
                                    }
                                    _this.charDecoder = _this.createCharDecoder(is, enc);
                                })();
                            }
                            else if (((is != null && (is instanceof Object)) || is === null) && enc === undefined) {
                                var __args = Array.prototype.slice.call(arguments);
                                {
                                    var __args_4 = Array.prototype.slice.call(arguments);
                                    var enc_1 = null;
                                    _this = _super.call(this) || this;
                                    _this.charDecoder = null;
                                    _this.column = 0;
                                    _this.nextChar = -1;
                                    _this.line = 1;
                                    _this.charDecoder = null;
                                    _this.column = 0;
                                    (function () {
                                        if (enc_1 == null) {
                                            enc_1 = "ISO-8859-1";
                                        }
                                        _this.charDecoder = _this.createCharDecoder(is, enc_1);
                                    })();
                                }
                            }
                            else if (((is != null && (is instanceof Object)) || is === null) && enc === undefined) {
                                var __args = Array.prototype.slice.call(arguments);
                                var r_2 = __args[0];
                                _this = _super.call(this) || this;
                                _this.charDecoder = null;
                                _this.column = 0;
                                _this.nextChar = -1;
                                _this.line = 1;
                                _this.charDecoder = null;
                                _this.column = 0;
                                (function () {
                                    _this.charDecoder = new org.apache.batik.util.io.GenericDecoder(r_2);
                                })();
                            }
                            else if (is === undefined && enc === undefined) {
                                var __args = Array.prototype.slice.call(arguments);
                                _this = _super.call(this) || this;
                                _this.charDecoder = null;
                                _this.column = 0;
                                _this.nextChar = -1;
                                _this.line = 1;
                                _this.charDecoder = null;
                                _this.column = 0;
                            }
                            else
                                throw new Error('invalid overload');
                            return _this;
                        }
                        StreamNormalizingReader.__static_initialize = function () { if (!StreamNormalizingReader.__static_initialized) {
                            StreamNormalizingReader.__static_initialized = true;
                            StreamNormalizingReader.__static_initializer_0();
                        } };
                        StreamNormalizingReader.prototype.read = function (cbuf, off, len) {
                            if (((cbuf != null && cbuf instanceof Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                                _super.prototype.read.call(this, cbuf, off, len);
                            }
                            else if (cbuf === undefined && off === undefined && len === undefined) {
                                return this.read$();
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        StreamNormalizingReader.prototype.read$ = function () {
                            var result = this.nextChar;
                            if (result !== -1) {
                                this.nextChar = -1;
                                if (result === 13) {
                                    this.column = 0;
                                    this.line++;
                                }
                                else {
                                    this.column++;
                                }
                                return result;
                            }
                            result = this.charDecoder.readChar();
                            switch ((result)) {
                                case 13:
                                    this.column = 0;
                                    this.line++;
                                    var c = this.charDecoder.readChar();
                                    if (c === 10) {
                                        return 10;
                                    }
                                    this.nextChar = c;
                                    return 10;
                                case 10:
                                    this.column = 0;
                                    this.line++;
                            }
                            return result;
                        };
                        /**
                         * Returns the current line in the stream.
                         * @return {number}
                         */
                        StreamNormalizingReader.prototype.getLine = function () {
                            return this.line;
                        };
                        /**
                         * Returns the current column in the stream.
                         * @return {number}
                         */
                        StreamNormalizingReader.prototype.getColumn = function () {
                            return this.column;
                        };
                        /**
                         * Close the stream.
                         */
                        StreamNormalizingReader.prototype.close = function () {
                            this.charDecoder.dispose();
                            this.charDecoder = null;
                        };
                        /**
                         * Creates the CharDecoder mapped with the given encoding name.
                         * @param {{ str: string, cursor: number }} is
                         * @param {string} enc
                         * @return {*}
                         */
                        StreamNormalizingReader.prototype.createCharDecoder = function (is, enc) {
                            var cdf = (function (m, k) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    return m.entries[i].value;
                                } return null; })(StreamNormalizingReader.charDecoderFactories_$LI$(), enc.toUpperCase());
                            if (cdf != null) {
                                return cdf.createCharDecoder(is);
                            }
                            var e = org.apache.batik.util.EncodingUtilities.javaEncoding(enc);
                            if (e == null) {
                                e = enc;
                            }
                            return new org.apache.batik.util.io.GenericDecoder(is, e);
                        };
                        StreamNormalizingReader.charDecoderFactories_$LI$ = function () { StreamNormalizingReader.__static_initialize(); if (StreamNormalizingReader.charDecoderFactories == null)
                            StreamNormalizingReader.charDecoderFactories = ({}); return StreamNormalizingReader.charDecoderFactories; };
                        ;
                        StreamNormalizingReader.__static_initializer_0 = function () {
                            var cdf = new StreamNormalizingReader.ASCIIDecoderFactory();
                            /* put */ (function (m, k, v) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(StreamNormalizingReader.charDecoderFactories_$LI$(), "ASCII", cdf);
                            /* put */ (function (m, k, v) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(StreamNormalizingReader.charDecoderFactories_$LI$(), "US-ASCII", cdf);
                            /* put */ (function (m, k, v) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(StreamNormalizingReader.charDecoderFactories_$LI$(), "ISO-8859-1", new StreamNormalizingReader.ISO_8859_1DecoderFactory());
                            /* put */ (function (m, k, v) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(StreamNormalizingReader.charDecoderFactories_$LI$(), "UTF-8", new StreamNormalizingReader.UTF8DecoderFactory());
                            /* put */ (function (m, k, v) { if (m.entries == null)
                                m.entries = []; for (var i = 0; i < m.entries.length; i++)
                                if (m.entries[i].key.equals != null && m.entries[i].key.equals(k) || m.entries[i].key === k) {
                                    m.entries[i].value = v;
                                    return;
                                } m.entries.push({ key: k, value: v, getKey: function () { return this.key; }, getValue: function () { return this.value; } }); })(StreamNormalizingReader.charDecoderFactories_$LI$(), "UTF-16", new StreamNormalizingReader.UTF16DecoderFactory());
                        };
                        return StreamNormalizingReader;
                    }(org.apache.batik.util.io.NormalizingReader));
                    StreamNormalizingReader.__static_initialized = false;
                    io.StreamNormalizingReader = StreamNormalizingReader;
                    StreamNormalizingReader["__class"] = "org.apache.batik.util.io.StreamNormalizingReader";
                    StreamNormalizingReader["__interfaces"] = ["java.io.Closeable", "java.lang.Readable", "java.lang.AutoCloseable"];
                    (function (StreamNormalizingReader) {
                        /**
                         * To create an ASCIIDecoder.
                         * @class
                         */
                        var ASCIIDecoderFactory = (function () {
                            function ASCIIDecoderFactory() {
                            }
                            ASCIIDecoderFactory.prototype.createCharDecoder = function (is) {
                                return new org.apache.batik.util.io.ASCIIDecoder(is);
                            };
                            return ASCIIDecoderFactory;
                        }());
                        StreamNormalizingReader.ASCIIDecoderFactory = ASCIIDecoderFactory;
                        ASCIIDecoderFactory["__class"] = "org.apache.batik.util.io.StreamNormalizingReader.ASCIIDecoderFactory";
                        ASCIIDecoderFactory["__interfaces"] = ["org.apache.batik.util.io.StreamNormalizingReader.CharDecoderFactory"];
                        /**
                         * To create an ISO_8859_1Decoder.
                         * @class
                         */
                        var ISO_8859_1DecoderFactory = (function () {
                            function ISO_8859_1DecoderFactory() {
                            }
                            ISO_8859_1DecoderFactory.prototype.createCharDecoder = function (is) {
                                return new org.apache.batik.util.io.ISO_8859_1Decoder(is);
                            };
                            return ISO_8859_1DecoderFactory;
                        }());
                        StreamNormalizingReader.ISO_8859_1DecoderFactory = ISO_8859_1DecoderFactory;
                        ISO_8859_1DecoderFactory["__class"] = "org.apache.batik.util.io.StreamNormalizingReader.ISO_8859_1DecoderFactory";
                        ISO_8859_1DecoderFactory["__interfaces"] = ["org.apache.batik.util.io.StreamNormalizingReader.CharDecoderFactory"];
                        /**
                         * To create a UTF8Decoder.
                         * @class
                         */
                        var UTF8DecoderFactory = (function () {
                            function UTF8DecoderFactory() {
                            }
                            UTF8DecoderFactory.prototype.createCharDecoder = function (is) {
                                return new org.apache.batik.util.io.UTF8Decoder(is);
                            };
                            return UTF8DecoderFactory;
                        }());
                        StreamNormalizingReader.UTF8DecoderFactory = UTF8DecoderFactory;
                        UTF8DecoderFactory["__class"] = "org.apache.batik.util.io.StreamNormalizingReader.UTF8DecoderFactory";
                        UTF8DecoderFactory["__interfaces"] = ["org.apache.batik.util.io.StreamNormalizingReader.CharDecoderFactory"];
                        /**
                         * To create a UTF16Decoder.
                         * @class
                         */
                        var UTF16DecoderFactory = (function () {
                            function UTF16DecoderFactory() {
                            }
                            UTF16DecoderFactory.prototype.createCharDecoder = function (is) {
                                return new org.apache.batik.util.io.UTF16Decoder(is);
                            };
                            return UTF16DecoderFactory;
                        }());
                        StreamNormalizingReader.UTF16DecoderFactory = UTF16DecoderFactory;
                        UTF16DecoderFactory["__class"] = "org.apache.batik.util.io.StreamNormalizingReader.UTF16DecoderFactory";
                        UTF16DecoderFactory["__interfaces"] = ["org.apache.batik.util.io.StreamNormalizingReader.CharDecoderFactory"];
                    })(StreamNormalizingReader = io.StreamNormalizingReader || (io.StreamNormalizingReader = {}));
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var util;
            (function (util) {
                var io;
                (function (io) {
                    /**
                     * Creates a new StringNormalizingReader.
                     * @param {string} s The string to read.
                     * @class
                     * @extends org.apache.batik.util.io.NormalizingReader
                     */
                    var StringNormalizingReader = (function (_super) {
                        __extends(StringNormalizingReader, _super);
                        function StringNormalizingReader(s) {
                            var _this = _super.call(this) || this;
                            /**
                             * The current line in the stream.
                             */
                            _this.line = 1;
                            _this.string = null;
                            _this.length = 0;
                            _this.next = 0;
                            _this.column = 0;
                            _this.string = s;
                            _this.length = s.length;
                            return _this;
                        }
                        StringNormalizingReader.prototype.read = function (cbuf, off, len) {
                            if (((cbuf != null && cbuf instanceof Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                                _super.prototype.read.call(this, cbuf, off, len);
                            }
                            else if (cbuf === undefined && off === undefined && len === undefined) {
                                return this.read$();
                            }
                            else
                                throw new Error('invalid overload');
                        };
                        StringNormalizingReader.prototype.read$ = function () {
                            var result = (this.length === this.next) ? -1 : (this.string.charAt(this.next++)).charCodeAt(0);
                            if (result <= 13) {
                                switch ((result)) {
                                    case 13:
                                        this.column = 0;
                                        this.line++;
                                        var c = (this.length === this.next) ? -1 : (this.string.charAt(this.next)).charCodeAt(0);
                                        if (c === 10) {
                                            this.next++;
                                        }
                                        return 10;
                                    case 10:
                                        this.column = 0;
                                        this.line++;
                                }
                            }
                            return result;
                        };
                        /**
                         * Returns the current line in the stream.
                         * @return {number}
                         */
                        StringNormalizingReader.prototype.getLine = function () {
                            return this.line;
                        };
                        /**
                         * Returns the current column in the stream.
                         * @return {number}
                         */
                        StringNormalizingReader.prototype.getColumn = function () {
                            return this.column;
                        };
                        /**
                         * Close the stream.
                         */
                        StringNormalizingReader.prototype.close = function () {
                            this.string = null;
                        };
                        return StringNormalizingReader;
                    }(org.apache.batik.util.io.NormalizingReader));
                    io.StringNormalizingReader = StringNormalizingReader;
                    StringNormalizingReader["__class"] = "org.apache.batik.util.io.StringNormalizingReader";
                    StringNormalizingReader["__interfaces"] = ["java.io.Closeable", "java.lang.Readable", "java.lang.AutoCloseable"];
                })(io = util.io || (util.io = {}));
            })(util = batik.util || (batik.util = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
(function (org) {
    var apache;
    (function (apache) {
        var batik;
        (function (batik) {
            var parser;
            (function (parser) {
                /**
                 * Creates a new PathParser.
                 * @class
                 * @extends org.apache.batik.parser.NumberParser
                 */
                var PathParser = (function (_super) {
                    __extends(PathParser, _super);
                    function PathParser() {
                        var _this = _super.call(this) || this;
                        _this.pathHandler = null;
                        _this.pathHandler = org.apache.batik.parser.DefaultPathHandler.INSTANCE_$LI$();
                        return _this;
                    }
                    /**
                     * Allows an application to register a path handler.
                     *
                     * <p>If the application does not register a handler, all
                     * events reported by the parser will be silently ignored.
                     *
                     * <p>Applications may register a new or different handler in the
                     * middle of a parse, and the parser must begin using the new
                     * handler immediately.</p>
                     * @param {*} handler The transform list handler.
                     */
                    PathParser.prototype.setPathHandler = function (handler) {
                        this.pathHandler = handler;
                    };
                    /**
                     * Returns the path handler in use.
                     * @return {*}
                     */
                    PathParser.prototype.getPathHandler = function () {
                        return this.pathHandler;
                    };
                    PathParser.prototype.doParse = function () {
                        this.pathHandler.startPath();
                        this.current = this.reader.read();
                        loop: for (;;) {
                            try {
                                switch ((this.current)) {
                                    case 13:
                                    case 10:
                                    case 32:
                                    case 9:
                                        this.current = this.reader.read();
                                        break;
                                    case 122 /* 'z' */:
                                    case 90 /* 'Z' */:
                                        this.current = this.reader.read();
                                        this.pathHandler.closePath();
                                        break;
                                    case 109 /* 'm' */:
                                        this.parsem();
                                        break;
                                    case 77 /* 'M' */:
                                        this.parseM();
                                        break;
                                    case 108 /* 'l' */:
                                        this.parsel();
                                        break;
                                    case 76 /* 'L' */:
                                        this.parseL();
                                        break;
                                    case 104 /* 'h' */:
                                        this.parseh();
                                        break;
                                    case 72 /* 'H' */:
                                        this.parseH();
                                        break;
                                    case 118 /* 'v' */:
                                        this.parsev();
                                        break;
                                    case 86 /* 'V' */:
                                        this.parseV();
                                        break;
                                    case 99 /* 'c' */:
                                        this.parsec();
                                        break;
                                    case 67 /* 'C' */:
                                        this.parseC();
                                        break;
                                    case 113 /* 'q' */:
                                        this.parseq();
                                        break;
                                    case 81 /* 'Q' */:
                                        this.parseQ();
                                        break;
                                    case 115 /* 's' */:
                                        this.parses();
                                        break;
                                    case 83 /* 'S' */:
                                        this.parseS();
                                        break;
                                    case 116 /* 't' */:
                                        this.parset();
                                        break;
                                    case 84 /* 'T' */:
                                        this.parseT();
                                        break;
                                    case 97 /* 'a' */:
                                        this.parsea();
                                        break;
                                    case 65 /* 'A' */:
                                        this.parseA();
                                        break;
                                    case -1:
                                        break loop;
                                    default:
                                        this.reportUnexpected(this.current);
                                        break;
                                }
                            }
                            catch (e) {
                                this.errorHandler.error(e);
                                this.skipSubPath();
                            }
                            ;
                        }
                        ;
                        this.skipSpaces();
                        if (this.current !== -1) {
                            this.reportError("end.of.stream.expected", [new Number(this.current).valueOf()]);
                        }
                        this.pathHandler.endPath();
                    };
                    /**
                     * Parses a 'm' command.
                     */
                    PathParser.prototype.parsem = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var x = this.parseFloat();
                        this.skipCommaSpaces();
                        var y = this.parseFloat();
                        this.pathHandler.movetoRel(x, y);
                        var expectNumber = this.skipCommaSpaces2();
                        this._parsel(expectNumber);
                    };
                    /**
                     * Parses a 'M' command.
                     */
                    PathParser.prototype.parseM = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var x = this.parseFloat();
                        this.skipCommaSpaces();
                        var y = this.parseFloat();
                        this.pathHandler.movetoAbs(x, y);
                        var expectNumber = this.skipCommaSpaces2();
                        this._parseL(expectNumber);
                    };
                    /**
                     * Parses a 'l' command.
                     */
                    PathParser.prototype.parsel = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        this._parsel(true);
                    };
                    PathParser.prototype._parsel = function (expectNumber) {
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.linetoRel(x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'L' command.
                     */
                    PathParser.prototype.parseL = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        this._parseL(true);
                    };
                    PathParser.prototype._parseL = function (expectNumber) {
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.linetoAbs(x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'h' command.
                     */
                    PathParser.prototype.parseh = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.pathHandler.linetoHorizontalRel(x);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'H' command.
                     */
                    PathParser.prototype.parseH = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.pathHandler.linetoHorizontalAbs(x);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'v' command.
                     */
                    PathParser.prototype.parsev = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.pathHandler.linetoVerticalRel(x);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'V' command.
                     */
                    PathParser.prototype.parseV = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.pathHandler.linetoVerticalAbs(x);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'c' command.
                     */
                    PathParser.prototype.parsec = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoCubicRel(x1, y1, x2, y2, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'C' command.
                     */
                    PathParser.prototype.parseC = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoCubicAbs(x1, y1, x2, y2, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'q' command.
                     */
                    PathParser.prototype.parseq = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoQuadraticRel(x1, y1, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'Q' command.
                     */
                    PathParser.prototype.parseQ = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y1 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoQuadraticAbs(x1, y1, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 's' command.
                     */
                    PathParser.prototype.parses = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoCubicSmoothRel(x2, y2, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'S' command.
                     */
                    PathParser.prototype.parseS = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var y2 = this.parseFloat();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoCubicSmoothAbs(x2, y2, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 't' command.
                     */
                    PathParser.prototype.parset = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoQuadraticSmoothRel(x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'T' command.
                     */
                    PathParser.prototype.parseT = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.curvetoQuadraticSmoothAbs(x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'a' command.
                     */
                    PathParser.prototype.parsea = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var rx = this.parseFloat();
                            this.skipCommaSpaces();
                            var ry = this.parseFloat();
                            this.skipCommaSpaces();
                            var ax = this.parseFloat();
                            this.skipCommaSpaces();
                            var laf = void 0;
                            switch ((this.current)) {
                                default:
                                    this.reportUnexpected(this.current);
                                    return;
                                case 48 /* '0' */:
                                    laf = false;
                                    break;
                                case 49 /* '1' */:
                                    laf = true;
                                    break;
                            }
                            this.current = this.reader.read();
                            this.skipCommaSpaces();
                            var sf = void 0;
                            switch ((this.current)) {
                                default:
                                    this.reportUnexpected(this.current);
                                    return;
                                case 48 /* '0' */:
                                    sf = false;
                                    break;
                                case 49 /* '1' */:
                                    sf = true;
                                    break;
                            }
                            this.current = this.reader.read();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.arcRel(rx, ry, ax, laf, sf, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Parses a 'A' command.
                     */
                    PathParser.prototype.parseA = function () {
                        this.current = this.reader.read();
                        this.skipSpaces();
                        var expectNumber = true;
                        for (;;) {
                            switch ((this.current)) {
                                default:
                                    if (expectNumber)
                                        this.reportUnexpected(this.current);
                                    return;
                                case 43 /* '+' */:
                                case 45 /* '-' */:
                                case 46 /* '.' */:
                                case 48 /* '0' */:
                                case 49 /* '1' */:
                                case 50 /* '2' */:
                                case 51 /* '3' */:
                                case 52 /* '4' */:
                                case 53 /* '5' */:
                                case 54 /* '6' */:
                                case 55 /* '7' */:
                                case 56 /* '8' */:
                                case 57 /* '9' */:
                                    break;
                            }
                            var rx = this.parseFloat();
                            this.skipCommaSpaces();
                            var ry = this.parseFloat();
                            this.skipCommaSpaces();
                            var ax = this.parseFloat();
                            this.skipCommaSpaces();
                            var laf = void 0;
                            switch ((this.current)) {
                                default:
                                    this.reportUnexpected(this.current);
                                    return;
                                case 48 /* '0' */:
                                    laf = false;
                                    break;
                                case 49 /* '1' */:
                                    laf = true;
                                    break;
                            }
                            this.current = this.reader.read();
                            this.skipCommaSpaces();
                            var sf = void 0;
                            switch ((this.current)) {
                                default:
                                    this.reportUnexpected(this.current);
                                    return;
                                case 48 /* '0' */:
                                    sf = false;
                                    break;
                                case 49 /* '1' */:
                                    sf = true;
                                    break;
                            }
                            this.current = this.reader.read();
                            this.skipCommaSpaces();
                            var x = this.parseFloat();
                            this.skipCommaSpaces();
                            var y = this.parseFloat();
                            this.pathHandler.arcAbs(rx, ry, ax, laf, sf, x, y);
                            expectNumber = this.skipCommaSpaces2();
                        }
                        ;
                    };
                    /**
                     * Skips a sub-path.
                     */
                    PathParser.prototype.skipSubPath = function () {
                        for (;;) {
                            switch ((this.current)) {
                                case -1:
                                case 109 /* 'm' */:
                                case 77 /* 'M' */:
                                    return;
                                default:
                                    break;
                            }
                            this.current = this.reader.read();
                        }
                        ;
                    };
                    PathParser.prototype.reportUnexpected = function (ch) {
                        this.reportUnexpectedCharacterError(this.current);
                        this.skipSubPath();
                    };
                    /**
                     * Skips the whitespaces and an optional comma.
                     * @return {boolean} true if comma was skipped.
                     */
                    PathParser.prototype.skipCommaSpaces2 = function () {
                        wsp1: for (;;) {
                            switch ((this.current)) {
                                default:
                                    break wsp1;
                                case 32:
                                case 9:
                                case 13:
                                case 10:
                                    break;
                            }
                            this.current = this.reader.read();
                        }
                        ;
                        if (this.current != ','.charCodeAt(0))
                            return false;
                        wsp2: for (;;) {
                            switch ((this.current = this.reader.read())) {
                                default:
                                    break wsp2;
                                case 32:
                                case 9:
                                case 13:
                                case 10:
                                    break;
                            }
                        }
                        ;
                        return true;
                    };
                    return PathParser;
                }(org.apache.batik.parser.NumberParser));
                parser.PathParser = PathParser;
                PathParser["__class"] = "org.apache.batik.parser.PathParser";
                PathParser["__interfaces"] = ["org.apache.batik.parser.Parser", "org.apache.batik.i18n.Localizable"];
            })(parser = batik.parser || (batik.parser = {}));
        })(batik = apache.batik || (apache.batik = {}));
    })(apache = org.apache || (org.apache = {}));
})(org || (org = {}));
org.apache.batik.util.io.StreamNormalizingReader.charDecoderFactories_$LI$();
org.apache.batik.util.io.StreamNormalizingReader.__static_initialize();
org.apache.batik.util.io.UTF8Decoder.UTF8_BYTES_$LI$();
org.apache.batik.parser.NumberParser.pow10_$LI$();
org.apache.batik.parser.NumberParser.__static_initialize();
org.apache.batik.util.io.Messages.localizableSupport_$LI$();
org.apache.batik.util.EncodingUtilities.ENCODINGS_$LI$();
org.apache.batik.util.EncodingUtilities.__static_initialize();
org.apache.batik.parser.DefaultPathHandler.INSTANCE_$LI$();
org.apache.batik.i18n.LocaleGroup.DEFAULT_$LI$();

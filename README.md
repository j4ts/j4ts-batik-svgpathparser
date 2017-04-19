# Batik SVG path parser

This project contains an extraction of the Apache's Batik project for parsing SVG path and produce AWT shapes. It is compiled by JSweet and packaged as a JSweet candy (also find the TypeScript and JavaScript versions in the ``dist`` directory).

It is compiled without the J4TS runtime, which means that all the used JDK classes are erased from the generated JavaScript in order to keep only pure JavaScript code.
 
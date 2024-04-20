// Generates dart source code for a file.
//
// Usage:
// node gen-classes.js <json-defs> <fontName> <packageName> <className> <outputFile>

import path from "path";
import fs from "fs";

const file = process.argv[2];
const fontName = process.argv[3];
const packageName = process.argv[4];
const className = process.argv[5];
const output = process.argv[6];

if (!file) {
  console.error("No file provided");
  console.info("Arguments: <json-defs> <fontName> <packageName> <className> <outputFile>");
  process.exit(1);
}

if (!fontName) {
  console.error("No fontName provded");
  console.info("Arguments: <json-defs> <fontName> <packageName> <className> <outputFile>");
  process.exit(1);
}

if (!className) {
  console.error("No classname provded");
  console.info("Arguments: <json-defs> <fontName> <packageName> <className> <outputFile>");
  process.exit(1);
}

if (!className) {
  console.error("No classname provded");
  console.info("Arguments: <json-defs> <fontName> <packageName> <className> <outputFile>");
  process.exit(1);
}

const content = fs.readFileSync(file, "utf8");
const parsed = JSON.parse(content);

const indent = "  ";

const header = `
// This is auto-generated class.
// DO NOT EDIT THIS FILE MANUALLY

// ignore_for_file: constant_identifier_names

import 'package:flutter/widgets.dart';

class ${className} {
${indent}const ${className}._();

${indent}static const String _fontFamily = "${fontName}";
${indent}static const String _packageName = "${packageName}";

`;

const footer = `
}
`;

/**
 *
 * @param {string} key
 * @param {number} value
 * @returns
 */
const singleLine = (key, value) => {
  const keyNormalized = key.replace(/-/g, "_");
  const valueHex = value.toString(16);

  return `${indent}static const IconData ${keyNormalized} = IconData(0x${valueHex}, fontFamily: _fontFamily, fontPackage: _packageName);\n`;
};

const write = () => {
  let value = "";
  value += header;

  for (const key in parsed) {
    value += singleLine(key, parsed[key]);
  }

  value += footer;

  return value;
};

fs.writeFileSync(output, write(), "utf8");
console.log(`File written to ${output}`);
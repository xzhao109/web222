/**
 * WEB222 – Assignment 1
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been copied
 * manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name: <Xiaoyue Zhao>
 *      Student ID: <124899212>
 *      Date: <May 30>
 *
 * Please see all unit tests in the files problem-00.test.js, problem-01.test.js, etc.
 */

/*******************************************************************************
 * Problem 0: learn how to implement code to pass unit tests.
 *
 * Welcome to Assignment 1! In this assignment, you're going to be practicing lots
 * of new JavaScript programming techniques.  Before you dive in let's spend a
 * minute helping you learn how to read this code, and how to understand the
 * tests that go with it.
 *
 * In addition to this file, please also open the file `src/problem-00.test.js.
 * Start by reading the big comment at the top of that file, then come back here and
 * continue.
 *
 * Before continuing, make sure you have completed the necessary setup steps (e.g.,
 * install node.js, run `npm install`, install the suggested VSCode extensions).
 * The rest of the instructions assume that you have done this. If you need help,
 * ask your professor.
 *
 * After you finish reading src/problem-00.test.js, it's time to try running
 * the tests.  To run the tests, open a terminal (see https://code.visualstudio.com/docs/editor/integrated-terminal)
 * in the same directory as your `package.json` file (i.e., the root of this project)
 * and type the following command:
 *
 *   npm test
 *
 * You have to run this command in the root of your project (i.e., in the same
 * directory as package.json).  When you do, you will see a lot of failures.
 * That's expected, since we haven't written any solution code yet.
 *
 * You can also run tests for only this one problem instead of all tests. To do that,
 * add the name of a test file after `npm test` like this:
 *
 *   npm test problem-00
 *
 * This will look for tests that are part of the problem-00.test.js file, and only
 * run those.  Doing so should result in 1 failed and 1 passed test.
 *
 * The first test passes:
 *
 *  ✓ greeting should be a function (2ms)
 *
 * But the second one fails:
 *
 * ✕ greeting should return the correct string output (3ms)
 *
 * ● Problem 0 - greeting() function › greeting should  return the correct string output
 *
 *   expect(received).toBe(expected) // Object.is equality
 *
 *   Expected: "Hello WEB222 Student!"
 *   Received: "Hello WEB222 Student"
 *
 *     63 |   test('greeting should return the correct string output', function() {
 *     64 |     let result = greeting('WEB222 Student');
 *   > 65 |     expect(result).toBe('Hello WEB222 Student!');
 *        |                    ^
 *     66 |   });
 *     67 |
 *     68 |   /**
 *
 * We can see that the second test 'greeting should return the correct string output'
 * is failing. In particular, it's failing because it expected to get the string
 * "Hello WEB222 Student!" but instead it actually received the string "Hello WEB222 Student".
 *
 * It looks like we have a small typo in our code below, and we are missing
 * the final "!"" character.  Try adding it, save this file, and re-run the
 * tests again:
 *
 * npm test problem-00
 * PASS  src/problem-00.test.js
 *  Problem 0 - greeting() function
 *   ✓ greeting should be a function (2ms)
 *   ✓ greeting should return the correct string output
 *
 * Test Suites: 1 passed, 1 total
 * Tests:       2 passed, 2 total
 *
 * Excellent! At this point you're ready to move on to Problem 1. As you do,
 * read both the information in the Problem's comment (i.e., this file), and also read
 * the tests to understand what they expect from your code's implementation.
 *
 * One final word about these comments.  You'll see comments like this one:
 *
 * @param {string} name - the name to greet in the message
 * @returns {string}
 *
 * These are specially formatted comments that document parameters to functions,
 * and tell us the type (e.g., {string} or {number}), and also the parameter's name.
 * We also indicate the return type for functions (e.g., {string}).
 *
 * Finally, we also explain a bit about how the parameter is used, and what
 * data it will have, whether it's optional, etc.
 ******************************************************************************/

function greeting(name) {
  return `Hello ${name}!`;
}

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscores
 * ('_'), and makes it UPPERCASE.
 *
 * We want to be able to convert a string to Upper normalizeVariable Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are UPPER cased.
 *
 * The normalizeVariable() function should work like this:
 *
 * normalizeVariable('abc') --> returns 'ABC'
 * normalizeVariable(' ABC ') --> returns 'ABC'
 * normalizeVariable('ABC') --> returns 'ABC'
 * normalizeVariable('A BC') --> returns 'A_BC'
 * normalizeVariable(' A bC  ') --> returns 'A_BC'
 * normalizeVariable('A   BC') --> returns 'A_BC'
 * normalizeVariable('A.BC') --> returns 'A_BC'
 * normalizeVariable(' A..  B   C ') --> returns 'A_B_C'
 *
 * @param {string} value - a string to be converted
 * @return {string}
 ******************************************************************************/

function normalizeVariable(value) {
  //  convert lowercase to uppercase
  value = value.toUpperCase();

  //  remove leading and tailing whitespace
  value = value.trim();

  //  replace internal spaces and tabs to underlines
  value = value.replace(/\s+/g, '_');
  value = value.replace(/\.+/g, '_');

  //  replace all underlines to single underline
  value = value.replace(/_+/g, '_');
  return value;
}

/*******************************************************************************
 * Problem 2: create an HTML <iframe> element for the given url.
 *
 * An iframe hosts one web page within another. Here is how we might use HTML
 * to use an iframe:
 *
 * <iframe src="https://web222.ca" height="500"></iframe>
 *
 * Our <iframe> has two attributes:
 *
 * - src: the URL to a web page
 * - height: the height to use (in pixels) when showing the iframe
 *
 * Write the createIframe() function to accept a URL and height, and return the
 * properly formatted iframe tag. For example:
 *
 * createIframe('https://web222.ca', 500);
 *
 * should return the following string of HTML:
 *
 * '<iframe src="https://web222.ca" height="500"></iframe>'
 *
 * A <iframe> can also optionally contain an `allowfullscreen` attribute,
 * which tells the browser that it's OK for the iframe to expand to fill
 * the whole screen (e.g., YouTube videos do this). For example:
 *
 * <iframe src="https://web222.ca" height="500" allowfullscreen></iframe>
 *
 * In this case, the <iframe> element can be expanded full screen.  Therefore,
 * your createIframe() function should also accept a third argument, `allowFullScreen`:
 *
 * // Full screen not allowed (the default)
 * createIframe('https://web222.ca', 500)
 * // Full screen allowed
 * createIframe('https://web222.ca', 500, true)
 *
 * The returned <iframe> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and height attribute values should be wrapped in double-quotes (e.g., src="..." height="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." height="..." allowfullscreen)
 * - The height attribute should only be added if it is a valid integer value (number or string).  Otherwise ignore it.
 *
 * @param {string} src - the src URL for the iframe
 * @param {string|number} height - the height of the iframe. Must be a valid, positive integer
 * @param {boolean} allowFullScreen - whether to include the `allowfullscreen` attribute or not
 * @returns {string} - the HTML string for the iframe
 ******************************************************************************/

function createIframe(src, height, allowFullScreen) {
  let iframe;
  src = src.trim();

  // valid height is an integer number
  if (height > 0 && height % 1 === 0) {
    if (allowFullScreen === true) {
      iframe =
        '<iframe src=' +
        '"' +
        src +
        '"' +
        ' height=' +
        '"' +
        height +
        '"' +
        ' allowfullscreen' +
        '></iframe>';
    } else {
      iframe = '<iframe src=' + '"' + src + '"' + ' height=' + '"' + height + '"' + '></iframe>';
    }
  } else {
    iframe = '<iframe src=' + '"' + src + '"' + '></iframe>';
  }

  return iframe;
}

/*******************************************************************************
 * Problem 3: fix the formatting of Canadian Postal Codes
 *
 * A Canadian Postal Code (see https://en.wikipedia.org/wiki/Postal_codes_in_Canada)
 * is a 6-character string of the following form:
 *
 * A1A 1A1
 *
 * There are more than 800K valid postal codes.  The first three-characters of
 * the postal code is called a "Forward Sortation Area," and represents a geographic
 * region, with the first letter representing a province, or part of a province.
 *
 * The first character in a postal code can be any letter except D, F, I, O, Q, W, U, Z
 *
 * The other characters (i.e., letters) in a postal code can be any letter except
 * D, F, I, O, Q or U (i.e., W and Z are allowed)
 *
 * The numbers can be anything between 0 and 9
 *
 * HINT: use a Regular Expression to help you check for valid characters/numbers
 *
 * Many databases have postal codes that have been manually entered, and contain
 * formatting errors.  The fixPostalCode() function takes a possible postal code
 * (i.e. a string), attempts to format it, and returns the formatted version.
 * If the string is not a valid postal code, an error is thrown.  See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw.
 *
 * @param {string} postalCode - a possible postal code to be formatted
 * @returns {string} - a formatted postal code
 ******************************************************************************/

function fixPostalCode(postalCode) {
  postalCode = postalCode.toUpperCase();
  postalCode = postalCode.trim();

  //  ensure only one space in the 4th position
  if (postalCode.charAt(3) !== ' ') {
    postalCode = postalCode.substring(0, 3) + ' ' + postalCode.substring(3, postalCode.length);
  }

  // ensure length of string is equal to 7
  if (postalCode.length !== 7) {
    throw null;
  } // length == 7
  else {
    // invalid character in 1th position
    if (
      postalCode[0] === 'D' ||
      postalCode[0] === 'F' ||
      postalCode[0] === 'I' ||
      postalCode[0] === 'O' ||
      postalCode[0] === 'Q' ||
      postalCode[0] === 'U' ||
      postalCode[0] === 'W' ||
      postalCode[0] === 'Z'
    ) {
      throw null;
    }
    //  (invalid) non-digit in 2th 5th 7th position will throw error
    if (isNaN(postalCode[1]) || isNaN(postalCode[4]) || isNaN(postalCode[6])) {
      throw null;
    }
    //  (invalid) non-space in 4th position will throw error
    if (postalCode[3] !== ' ') {
      throw null;
    }
    //  invalid character in 3th 6th position will throw error
    for (let i = 0; i < postalCode.length; i++) {
      if (i === 2 || i === 5) {
        if (
          postalCode[i] === 'D' ||
          postalCode[i] === 'F' ||
          postalCode[i] === 'I' ||
          postalCode[i] === 'O' ||
          postalCode[i] === 'Q' ||
          postalCode[i] === 'U'
        ) {
          throw null;
        }
      }
    }
    // invalid string '000000' in toProvince() will throw error
    if (!isNaN(parseInt(postalCode))) {
      throw null;
    }
  }

  return postalCode;
}

/*******************************************************************************
 * Problem 4: convert a valid Canadian Postal Code to a Canadian Province
 *
 * The first letter of a Postal Code tells us which province the Postal Code is
 * from. Here's the list of Provinces/Territories, their 2-letter short form,
 * and the first letter(s) of the Postal Code that matches it:
 *
 * Province Name                    Short Form      First Letter of Postal Code
 * -----------------------------------------------------------------------------
 * Ontario                          ON              K, L, M, N, P
 * Quebec                           QC              G, H, J
 * Nova Scotia                      NS              B
 * New Brunswick                    NB              E
 * Manitoba                         MB              R
 * British Columbia                 BC              V
 * Prince Edward Island             PE              C
 * Saskatchewan                     SK              S
 * Alberta                          AB              T
 * Newfoundland and Labrador        NL              A
 * Nunavut, Northwest Territories   NT              X
 * Yukon                            YT              Y
 *
 * The toProvince() function converts a valid postal code to a province name. Use
 * your fixPostalCode() function from the previous problem to format and validate
 * the `postalCode` argument first. If it is invalid, return `null`. HINT: use try/catch
 * to deal with fixPostalCode() throwing an error, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 * If the `useShortForm` argument is `true`, the province's short-form is
 * returned instead of the full name.  For example:
 *
 * toProvince('M5W1E6') returns 'Ontario'
 * toProvince('M5W 1E6') returns 'Ontario'
 * toProvince('M5W 1E6', true) returns 'ON'
 * toProvince('M5W') returns null
 *
 * @param {string} postalCode - a postal code to be validated and used
 * @param {boolean|undefined} useShortForm - whether to return the full or short name
 * @returns {string} - a province name or short form
 ******************************************************************************/

function toProvince(postalCode, useShortForm) {
  let value;
  postalCode = postalCode.toUpperCase();

  // try run fixPostalCode() and catch error(null)
  // return error(null) to toProvince()
  try {
    postalCode = fixPostalCode(postalCode);
  } catch (error) {
    return error;
  }

  // valid postal code to province conversion
  switch (true) {
    case postalCode[0] === 'K' ||
      postalCode[0] === 'L' ||
      postalCode[0] === 'M' ||
      postalCode[0] === 'N' ||
      postalCode[0] === 'P':
      if (useShortForm === true) {
        value = 'ON';
      } else {
        value = 'Ontario';
      }
      break;
    case postalCode[0] === 'G' || postalCode[0] === 'H' || postalCode[0] === 'J':
      if (useShortForm === true) {
        value = 'QC';
      } else {
        value = 'Quebec';
      }
      break;
    case postalCode[0] === 'B':
      if (useShortForm === true) {
        value = 'NS';
      } else {
        value = 'Nova Scotia';
      }
      break;
    case postalCode[0] === 'E':
      if (useShortForm === true) {
        value = 'NB';
      } else {
        value = 'New Brunswick';
      }
      break;
    case postalCode[0] === 'R':
      if (useShortForm === true) {
        value = 'MB';
      } else {
        value = 'Manitoba';
      }
      break;
    case postalCode[0] === 'V':
      if (useShortForm === true) {
        value = 'BC';
      } else {
        value = 'British Columbia';
      }
      break;
    case postalCode[0] === 'C':
      if (useShortForm === true) {
        value = 'PE';
      } else {
        value = 'Prince Edward Island';
      }
      break;
    case postalCode[0] === 'S':
      if (useShortForm === true) {
        value = 'SK';
      } else {
        value = 'Saskatchewan';
      }
      break;
    case postalCode[0] === 'T':
      if (useShortForm === true) {
        value = 'AB';
      } else {
        value = 'Alberta';
      }
      break;
    case postalCode[0] === 'A':
      if (useShortForm === true) {
        value = 'NL';
      } else {
        value = 'Newfoundland and Labrador';
      }
      break;
    case postalCode[0] === 'X':
      if (useShortForm === true) {
        value = 'NT';
      } else {
        value = 'Northwest Territories and Nunavut';
      }
      break;
    case postalCode[0] === 'Y':
      if (useShortForm === true) {
        value = 'YT';
      } else {
        value = 'Yukon';
      }
      break;
  }

  return value;
}

/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * As an example, the Seneca College Newnham campus is located at:
 *
 * Longitude: -79.3496 (negative number means West)
 * Latitude: 43.7955 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "43.7955, -79.3496" (NOTE: space after the comma)
 * 4. "[-79.3496,43.7955]" (NOTE: lack of space after comma, lat/lng values are reversed)
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the string form: "(lat, lng)"
 *
 * @param {string} value - a geographic coordinate string in one of the given forms
 * @returns {string} - a geographic coordinate formatted as "(lat, lng)"
 ******************************************************************************/

function normalizeCoord(value) {
  // remove '[' and ']'
  value = value.replace(/\[+/g, '');
  value = value.replace(/\]+/g, '');

  // split string to array
  let valueArr = value.split(',');

  // if lack of space after comma
  // lat/lng values are reversed
  if (value.indexOf(' ') < 0) {
    valueArr.reverse();
    value = valueArr[0] + ', ' + valueArr[1];
  }

  // invalid value will throw
  switch (true) {
    case valueArr[0] < -90 || valueArr[0] > 90:
      throw null;
    case valueArr[1] < -180 || valueArr[1] > 180:
      throw null;
  }

  value = '(' + value + ')';
  return value;
}

/*******************************************************************************
 * Problem 6: format any number of coordinates as a list in a string
 *
 * You are asked to format geographic lat, lng coordinates in a list using your
 * normalizeCoord() function from problem 5.
 *
 * Where normalizeCoord() takes a single geographic coord, the formatCoords()
 * function takes a list of any number of geographic coordinates, parses them,
 * filters out any invalid coords, and creates a list.
 *
 * For example: given the following coords, "43.7955, -79.3496" and "[-62.1234,43.7955]",
 * a new list would be created of the following form "((43.7955, -79.3496), (43.7955, -62.1234))".
 *
 * Notice how the list has been enclosed in an extra set of (...) braces, and each
 * formatted geographic coordinate is separated by a comma and space.
 *
 * The formatCoords() function can take any number of arguments, but they must all
 * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
 * an Error is thrown), skip the value.  For example:
 *
 * formatCoords("43.7955, -79.3496", "[-62.1234,43.7955]", "300, -9000") should return
 * "((43.7955, -79.3496), (43.7955, -62.1234))" and skip the invalid coordinate.
 *
 * @param {string} values - any number of string arguments can be passed
 * @returns {string}
 ******************************************************************************/

function formatCoords(...values) {
  let value;

  // valid each arguments
  for (let i = 0; i < values.length; i++) {
    try {
      value = normalizeCoord(values[i]);
    } catch (error) {
      if (error === null) {
        value = '';
      }
    }
  }

  // concat string (except only one valid coord and no valid value)
  if (values.length > 1 && value !== '') {
    value = value.concat(', ', value);
  }

  value = '(' + value + ')';
  return value;
}

/*******************************************************************************
 * Problem 7: count valid postal codes for a given province code
 *
 * The countForProvince() function takes a two-character province code, and
 * any number of postal codes, some of which may be invalid.  It returns the
 * total number of postal codes for the province represented by the two-character
 * code.
 *
 * For example:
 *
 * countForProvince('ON', 'M5W 1E6') returns 1
 * countForProvince('ON', 'Y0A 1L0') returns 0
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0') returns 2
 * countForProvince('ON', 'M5W 1E6', 'N0B 1K0', 'Y0A 1L0') returns 2
 * countForProvince('ON', 'INVALID', '', 'Y0A 1L0') returns 0
 *
 * Use the toProvince() function you wrote earlier in your answer.
 *
 * Throw an error if no postal codes are passed, or if any of the postal codes
 * is not a string.
 *
 * @param {string} provinceCode - a two character province code
 * @param {string} ...postalCodes - one or more postal code strings
 * @returns {number} the total, or 0
 ******************************************************************************/

function countForProvince(provinceCode, ...postalCodes) {
  let value;
  let count = 0;

  // An error is thrown if no postal codes are passed
  if (postalCodes.length < 1) {
    throw null;
  }

  switch (true) {
    case provinceCode === 'ON':
      for (let i = 0; i < postalCodes.length; i++) {
        value = toProvince(postalCodes[i]);
        if (value === 'Ontario') {
          count++;
        }
      }
      break;
    case provinceCode === 'MB':
      for (let i = 0; i < postalCodes.length; i++) {
        value = toProvince(postalCodes[i]);
        if (value === 'Manitoba') {
          count++;
        }
      }
      break;
  }

  return count;
}

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 * @param {string} licenseCode - a license code
 * @param {bool|undefined} targetBlank - whether to open the link in a new tab/window
 * @returns {string}
 ******************************************************************************/

function generateLicenseLink(licenseCode, targetBlank) {
  let code;
  let codeToText;
  let targetText = '';
  let href;

  // remove the `CC-` prefix and convert to lowercase
  if (licenseCode !== null && licenseCode !== '' && licenseCode !== undefined) {
    code = licenseCode.slice(3);
    code = code.toLowerCase();
  }

  // convert licenseCode to text
  switch (true) {
    case licenseCode === 'CC-BY':
      codeToText = 'Creative Commons Attribution License';
      break;
    case licenseCode === 'CC-BY-NC':
      codeToText = 'Creative Commons Attribution-NonCommercial License';
      break;
    case licenseCode === 'CC-BY-SA':
      codeToText = 'Creative Commons Attribution-ShareAlike License';
      break;
    case licenseCode === 'CC-BY-ND':
      codeToText = 'Creative Commons Attribution-NoDerivs License';
      break;
    case licenseCode === 'CC-BY-NC-SA':
      codeToText = 'Creative Commons Attribution-NonCommercial-ShareAlike License';
      break;
    case licenseCode === 'CC-BY-NC-ND':
      codeToText = 'Creative Commons Attribution-NonCommercial-NoDerivs License';
      break;
    case licenseCode === null ||
      licenseCode === '' ||
      licenseCode === undefined ||
      licenseCode.includes('CC') === false:
      href = '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>';
      break;
  }

  // If `targetBlank` is true
  // add ` target="_blank"` to link
  if (targetBlank) {
    targetText = ' target="_blank"';
  }

  if (
    licenseCode !== null &&
    licenseCode !== '' &&
    licenseCode !== undefined &&
    licenseCode.includes('CC') === true
  ) {
    href =
      '<a href="https://creativecommons.org/licenses/' +
      code +
      '/4.0/"' +
      targetText +
      '>' +
      codeToText +
      '</a>';
  }

  return href;
}

/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 * @param {string|number|boolean|} value - a value to convert to true/false
 * @returns {bool}
 ******************************************************************************/

function pureBool(value) {
  let bool;

  //  pure boolean values work as expected
  if (typeof value === 'boolean') {
    if (value === true) {
      bool = true;
    } else {
      bool = false;
    }
  }

  //  various forms of Yes should return true
  //  various forms of No should return false
  else if (typeof value === 'string') {
    value = value.toUpperCase();
    switch (true) {
      case value === 'YES' ||
        value === 'OUI' ||
        value === 'Y' ||
        value === 'O' ||
        value === 'TRUE' ||
        value === 'T' ||
        value === 'VRAI' ||
        value === 'V':
        bool = true;
        break;
      case value === 'NO' ||
        value === 'N' ||
        value === 'NON' ||
        value === 'FALSE' ||
        value === 'F' ||
        value === 'FAUX':
        bool = false;
        break;
    }
  }

  //  positive numbers should be true
  //  zero and negative numbers should be false
  else if (typeof value === 'number') {
    if (value > 0) {
      bool = true;
    } else {
      bool = false;
    }
  }

  //  various non-values should throw
  if (value === undefined || value === null || value === '') {
    throw 'invalid value';
  }

  return bool;
}

/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/

function every(...values) {
  let value;
  let bool;
  let counter = 0;

  // test each argument as true or false
  for (let i = 0; i < values.length; i++) {
    value = pureBool(values[i]);
    if (value === true) {
      counter++;
    }
  }

  // return true if arguments are all true
  if (counter === values.length) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}

function any(...values) {
  let value;
  let bool;
  let counter = 0;

  // test each argument as true or false
  for (let i = 0; i < values.length; i++) {
    value = pureBool(values[i]);
    if (value === true) {
      counter++;
    }
  }

  // return true if arguments are mostly true
  if (counter >= 1) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}

function none(...values) {
  let value;
  let bool;
  let counter = 0;

  // test each argument as true or false
  for (let i = 0; i < values.length; i++) {
    value = pureBool(values[i]);
    if (value === false) {
      counter++;
    }
  }

  // return true if arguments are all false
  if (counter === values.length) {
    bool = true;
  } else {
    bool = false;
  }

  return bool;
}

/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know from
 * week 1, a URL can contain optional name=value pairs, see: https://web222.ca/weeks/week01/#urls
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 30, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * @param {string} query the query to use. Must be properly URI encoded
 * @param {string} order the sort order to use, must be one of `ascending` or `descending`.
 *        If the caller uses `asc` convert it to `ascending`.  Same for `desc` and `descending`.
 * @param {number} count the number of results per page, must be 1-50
 * @param {string} license the license to use, must be one of:
 *        none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 * @returns {string} the properly formatted URL
 ******************************************************************************/

function buildUrl(query, order, count, license) {
  let url;
  let counter = 0;
  let licenseArr = [
    'none',
    'any',
    'cc-by',
    'cc-by-nc',
    'cc-by-sa',
    'cc-by-nd',
    'cc-by-nc-sa',
    'cc-by-nc-nd'
  ];

  // encode the query value
  query = encodeURIComponent(query);

  // var order can be `ascending` `asc` and `descending` `desc`
  if (order.includes('desc') === true || order.includes('asc') === true) {
    switch (true) {
      case order === 'desc':
        order = 'descending';
        break;
      case order === 'asc':
        order = 'ascending';
        break;
    }
  } else {
    throw null;
  }

  // count below 1 or above 30 throws
  if (count < 1 || count > 30) {
    throw null;
  }

  // license other than the expected values will throw
  if (licenseArr.includes(license)) {
    counter++;
  }
  if (counter === 0) {
    throw null;
  }

  // build url and return
  url =
    'https://api.inaturalist.org/v2/observations' +
    '?query=' +
    query +
    '&count=' +
    count +
    '&order=' +
    order +
    '&license=' +
    license;

  return url;
}

// Our unit test files need to access the functions we defined
// above, so we export them here.
exports.greeting = greeting;
exports.normalizeVariable = normalizeVariable;
exports.createIframe = createIframe;
exports.fixPostalCode = fixPostalCode;
exports.toProvince = toProvince;
exports.normalizeCoord = normalizeCoord;
exports.formatCoords = formatCoords;
exports.countForProvince = countForProvince;
exports.generateLicenseLink = generateLicenseLink;
exports.pureBool = pureBool;
exports.every = every;
exports.any = any;
exports.none = none;
exports.buildUrl = buildUrl;
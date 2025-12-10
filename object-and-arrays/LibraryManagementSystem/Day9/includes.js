// Checking if a value exists in an array (includes)
// -------------------------------------------------
// The .includes() method is used to check whether an array contains a
// specific value. It returns TRUE or FALSE.
//
// Real-life analogy:
// Imagine your shopping bag has 2 items. You check inside the bag to see
// if an "iphone15" is there. includes() does exactly that.

// List of available products
const products = ['iphone11', 'samsungS20'];

// Check if a specific product exists
// Question: Do you have an 'iphone15'?

if (products.includes('iphone15')) {
  console.log('I have iphone15');
} else {
  console.log('iphone15 is NOT available');
}

/*
Expected output:

iphone15 is NOT available

Notes:
- products.includes('iphone11') → true
- products.includes('iphone15') → false

Common React use-case:
- Checking whether a selected value is in a list
- Determining if a tag, filter, or option is active
*/

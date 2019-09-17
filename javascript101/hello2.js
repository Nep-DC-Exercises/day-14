// Modify your hello program such that if no name is given: hello(), it will print "Hello, world!", otherwise it behaves the same as previously

function hello(name) {
  if (name == null) {
    console.log("Hello, world!");
  } else {
    console.log("Hello, " + name + "!");
  }
}

hello();
hello("Nep");

//datatype, equals, less than, greater than, contains, regex, one of our items, not equal

expect("grecia").to.be.a("string");
expect(10).to.be.above(5);
expect(10).to.be.below(1);
expect("grecia").to.not.be.empty;
expect("grecia").to.contain("grec");
expect("grecia").to.eql("gre");
//expect("grecia").to.match(/regex/);
expect("grecia").to.not.eql("gm");

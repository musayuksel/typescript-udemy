type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // WILL BE NUMBER
type Universal2 = Combinable | Numeric; // WILL BE STRING | NUMBER | BOOLEAN

क=""; // ""
ख=!क + क; // "true"
ग=!ख + क; // "false"
घ=क+{}; // "[object Object]"

शून्य=+क; // 0
एक=++शून्य; // 1
शून्य--;
दो=एक+एक; // 2
तीन=दो+एक; // 3

अ=घ[तीन+दो] + // "c"
  घ[एक] + // "o"
  (घ.घ+क)[एक] + // "n"
  ग[तीन] + // "s"
  ख[शून्य] + // "t"
  ख[एक] + // "r"
  ख[दो] + // "u"
  घ[तीन+दो] + // "c"
  ख[शून्य] + // "t"
  घ[एक] + // "o"
  ख[एक]; // "r"

क[अ][अ](
    ग[एक] + // "a"
    ग[दो] + // "l"
    ख[तीन] + // "e"
    ख[एक] + // "r"
    ख[शून्य] + // "t"
    "('नम्सते।')"
)();

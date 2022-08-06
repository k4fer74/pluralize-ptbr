const p = require("./pluralize-ptbr")

test('Palavras que terminam em a | e | i | o | u | ã | ãe | ão', () => {
    expect(p("família")).toBe("famílias");
    expect(p("utopia")).toBe("utopias");
    expect(p("expectativa")).toBe("expectativas");

    expect(p("prudente")).toBe("prudentes");
    expect(p("incidente")).toBe("incidentes");
    expect(p("importante")).toBe("importantes");

    expect(p("herói")).toBe("heróis");
    expect(p("abacaxi")).toBe("abacaxis");
    expect(p("papai")).toBe("papais");


    expect(p("significado")).toBe("significados");
    expect(p("fato")).toBe("fatos");
    expect(p("recesso")).toBe("recessos");


    expect(p("museu")).toBe("museus");
    expect(p("xampu")).toBe("xampus");
    expect(p("caju")).toBe("cajus");

    expect(p("alemã")).toBe("alemãs");
    expect(p("anã")).toBe("anãs");
    expect(p("avelã")).toBe("avelãs");

    expect(p("mãe")).toBe("mães");
    expect(p("balão")).toBe("balões");
    expect(p("questão")).toBe("questões");
});

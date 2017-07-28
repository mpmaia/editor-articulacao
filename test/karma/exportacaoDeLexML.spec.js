describe('Importação do LexML', function () {
    'use strict';

    var exportarParaLexML = window.exportarParaLexML;

    it('Deve exportar os artigos 1 a 3 da constituição federal', function () {
        var div = document.createElement('div');
        div.innerHTML = '<p data-tipo="titulo">Dos Princípios Fundamentais</p><p data-tipo="artigo">A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado democrático de direito e tem como fundamentos:</p><p data-tipo="inciso">a soberania;</p><p data-tipo="inciso">a cidadania;</p><p data-tipo="inciso">a dignidade da pessoa humana;</p><p data-tipo="inciso">os valores sociais do trabalho e da livre iniciativa;</p><p data-tipo="inciso">o pluralismo político.</p><p data-tipo="paragrafo" class="unico">Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.</p><p data-tipo="artigo">São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.</p><p data-tipo="artigo">Constituem objetivos fundamentais da República Federativa do Brasil:</p><p data-tipo="inciso">construir uma sociedade livre, justa e solidária;</p><p data-tipo="inciso">garantir o desenvolvimento nacional;</p><p data-tipo="inciso">erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;</p><p data-tipo="inciso">promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.</p>';

        var lexml = exportarParaLexML(div.firstElementChild);
        expect(lexml.outerHTML).toBe('<Articulacao><Titulo id="tit1"><Rotulo>Título I</Rotulo><NomeAgrupador>Dos Princípios Fundamentais</NomeAgrupador><Artigo id="tit1_art1"><Rotulo>Art. 1º –</Rotulo><Caput id="tit1_art1_cpt"><p>A República Federativa do Brasil, formada pela união indissolúvel dos Estados e Municípios e do Distrito Federal, constitui-se em Estado democrático de direito e tem como fundamentos:</p><Inciso id="tit1_art1_cpt_inc1"><Rotulo>I –</Rotulo><p>a soberania;</p></Inciso><Inciso id="tit1_art1_cpt_inc2"><Rotulo>II –</Rotulo><p>a cidadania;</p></Inciso><Inciso id="tit1_art1_cpt_inc3"><Rotulo>III –</Rotulo><p>a dignidade da pessoa humana;</p></Inciso><Inciso id="tit1_art1_cpt_inc4"><Rotulo>IV –</Rotulo><p>os valores sociais do trabalho e da livre iniciativa;</p></Inciso><Inciso id="tit1_art1_cpt_inc5"><Rotulo>V –</Rotulo><p>o pluralismo político.</p></Inciso></Caput><Paragrafo id="tit1_art1_par1u"><Rotulo>Parágrafo único –</Rotulo><p>Todo o poder emana do povo, que o exerce por meio de representantes eleitos ou diretamente, nos termos desta Constituição.</p></Paragrafo></Artigo><Artigo id="tit1_art2"><Rotulo>Art. 2º –</Rotulo><Caput id="tit1_art2_cpt"><p>São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.</p></Caput></Artigo><Artigo id="tit1_art3"><Rotulo>Art. 3º –</Rotulo><Caput id="tit1_art3_cpt"><p>Constituem objetivos fundamentais da República Federativa do Brasil:</p><Inciso id="tit1_art3_cpt_inc1"><Rotulo>I –</Rotulo><p>construir uma sociedade livre, justa e solidária;</p></Inciso><Inciso id="tit1_art3_cpt_inc2"><Rotulo>II –</Rotulo><p>garantir o desenvolvimento nacional;</p></Inciso><Inciso id="tit1_art3_cpt_inc3"><Rotulo>III –</Rotulo><p>erradicar a pobreza e a marginalização e reduzir as desigualdades sociais e regionais;</p></Inciso><Inciso id="tit1_art3_cpt_inc4"><Rotulo>IV –</Rotulo><p>promover o bem de todos, sem preconceitos de origem, raça, sexo, cor, idade e quaisquer outras formas de discriminação.</p></Inciso></Caput></Artigo></Titulo></Articulacao>');
    });

    it('Deve exportar citação dentro do caput', function () {
        var div = document.createElement('div');
        div.innerHTML = '<p data-tipo="artigo">Caput:</p><p data-tipo="continuacao">"Citação.".</p>';

        var lexml = exportarParaLexML(div.firstElementChild);
        expect(lexml.outerHTML).toBe('<Articulacao><Artigo id="art1"><Rotulo>Art. 1º –</Rotulo><Caput id="art1_cpt"><p>Caput:</p><p>"Citação.".</p></Caput></Artigo></Articulacao>');
    })

    it('Deve suportar dois parágrafos', function() {
        var div = document.createElement('div');
        div.innerHTML = '<p data-tipo="artigo">Este é um artigo.</p><p data-tipo="paragrafo">Este é um parágrafo.</p><p data-tipo="paragrafo">Este é outro parágrafo.</p>';

        var lexml = exportarParaLexML(div.firstElementChild);
        expect(lexml.outerHTML).toBe('<Articulacao><Artigo id="art1"><Rotulo>Art. 1º –</Rotulo><Caput id="art1_cpt"><p>Este é um artigo.</p></Caput><Paragrafo id="art1_par1"><Rotulo>§ 1º –</Rotulo><p>Este é um parágrafo.</p></Paragrafo><Paragrafo id="art1_par2"><Rotulo>§ 2º –</Rotulo><p>Este é outro parágrafo.</p></Paragrafo></Artigo></Articulacao>');
    })
});
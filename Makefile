SHELL=		/bin/sh
RM=		/bin/rm
LATEX=		latex
BIBTEX=		bibtex
DVIPS=		dvips
PS2PDF=		pstopdf
GS=		/usr/bin/gs

.SUFFIXES:      .tex .dvi .eps .ps .pdf

all: thesis.pdf

MAIN = thesis

EMAIN = ethesis

FIGDIR = figures

FIGURES = figures/*.eps

FILES = text/*.tex thesis.sty listings/* \
        /Users/erick/Recherche/photon-js/results/baseline/v8/time/table.tex \
        /Users/erick/Recherche/photon-js/results/baseline/sunspider/time/table.tex \
        /Users/erick/Recherche/photon-js/results/baseline/v8/memory/table.tex \
        /Users/erick/Recherche/photon-js/results/baseline/sunspider/memory/table.tex \
        /Users/erick/Recherche/photon-js/results/instrumented/v8/time/table.tex \



$(MAIN).dvi:    $(MAIN).tex $(FIGURES) $(FILES)
	$(LATEX) $*.tex; 
	$(BIBTEX) $*;
	$(LATEX) $*.tex;
	while grep -s 'Rerun' $*.log 2> /dev/null; do	\
		$(LATEX) $*.tex;			\
	done

# GhostScript command line options based upon:
# http://pages.cs.wisc.edu/~ghost/doc/cvs/Ps2pdf.htm#PDFA
$(EMAIN).pdf:	$(MAIN).ps
	$(GS) -sPAPERSIZE=letter -sProcessColorModel=DeviceCMYK -q \
	-dPDFA -dBATCH -dNOPAUSE -dNOOUTERSAVE -dUseCIEColor \
	-sDEVICE=pdfwrite -sOutputFile=$@ pdfa/PDFA_def.ps  $<

.dvi.ps:        $*.dvi
	$(DVIPS) -Ppdf -G0 -t letter -o $@ $<
 
.ps.pdf:       $*.dvi
	$(PS2PDF) -sPAPERSIZE=letter $< $@

thesis.pdf: $(FILES) $(FIGURES) $(MAIN).tex ref.bib
	$(LATEX) thesis.tex 
	$(BIBTEX) $*;
	$(LATEX) thesis.tex
	$(LATEX) thesis.tex
	$(DVIPS) -Ppdf -o thesis.ps thesis.dvi
	$(PS2PDF) thesis.ps 
	cp thesis.pdf dissertation.pdf 
    
#	while grep -s 'Rerun' $*.log 2> /dev/null; do	\
#		$(LATEX) $*.tex;			\
#	done

clean:
	$(RM) -f *.aux \
		$(MAIN).log $(MAIN).dvi $(MAIN).ps $(MAIN).blg $(MAIN).bbl \
		$(MAIN).lot $(MAIN).lof $(MAIN).toc $(MAIN).pdf $(EMAIN).pdf

# Suggested by Neil B.
neat:
	$(RM) -f *.aux \
		$(MAIN).log $(MAIN).blg $(MAIN).bbl \
		$(MAIN).lot $(MAIN).lof $(MAIN).toc

var DnaTranscriber = function(){

};
	DnaTranscriber.prototype.toRna = function(strand){
         var DNA = {
         	C : 'G',
         	G : 'C',
         	A : 'U',       	
            T : 'A'                                                                                                                      
         };
            
         strand = strand.split('');
         var rnastrand = '';
         
         strand.map(function(nucleotide) {

            if(DNA[nucleotide] === undefined)
               throw new Error('Invalid input');
            
            rnastrand += DNA[nucleotide];

         });
        
       return rnastrand;
    };

module.exports = DnaTranscriber;

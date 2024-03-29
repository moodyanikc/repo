﻿function convert_to_unicode1()
{

var array_one = new Array(

"¤","U",

// correct anusvAr+ekAr, ekAr+nuqta to the reverse order
"¢ð","´ð","ð¸",
   
"Ò","¥æò","¸",
"¸•", "¸¹", "¸»", "¸Á","¸Ç", "¸É", "¸È","¸Ø","¸Ú","¸Ù",
 
"A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","T","V","W","X","Y",

"`","a","b","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u",

"žæ","ž","#","%","@",
"„","¦","¨","¯","µ","º",

"Cþ","q","Ê","u","g",    
"Ÿæ","Åþ","Çþ","Éþ", 
"^","h","Ð","ý","þ",

 
"¥ô","¥æð","¥õ","¥æñ","¥æ","¥","§Z","§ü","§","©","ª","«","¬","­","°ð","°",

"€", "·", "",  "¹", "‚", "»", "ƒæ", "ƒ", "¾", 
"“","‘","¿","À","”","…","’","Á","Ûæ","Û","†æ","†",

"Å","Æ","Ç","É","‡æ","‡",
"ˆ","Ì","‰","Í","Î","¼","Š","Ï","óæ","ó","‹æ","Ù","‹",

"Œ","Â","","È","Ž","Õ","","Ö","","×",
"Ä","Ø","Ú","Ë","Ü","¶","Ý","Ã","ß",
"àæ","³æ","o","³","à","c","á","S","â","ã","±",
"ÿæ","ÿ","˜æ","˜","™æ","™","üð´",
 
"æò","æñ","æ","è","é","ê","ä","å","ë","ì","í","Ô","ñ","ô","õ",
"¢","´","¡","Ñ","¸","ò","ù","÷","ð",

"0","1","2","3","4","5","6","7","8","9",
"®","v","w","x","y","z","{","|","}","~",
"्ो","्ौ","्ाे", "्ाा","ाे","ाे","ाै","्ा","ंु","ओे","ोे","ाे","ईंं" )   


var array_two = new Array(

"","",

// correct anusvAr+ekAr, ekAr+nuqta to the reverse order
"ð¢","ð´","¸ð",

"'","ऑ","फ़्", 
"क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",

"्र","क्च","ष्ट","ष्ठ","श्व","स्न","त्र","॥","ढ्ढ","छ्व","्य","रु","रू",
"हृ","ह्र","क्क","क्त","क्र","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ",
"क्व","ड्ड","ड्ढ","स्र","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म्","ह्य","ह्ल","ह्व",
 
"त्त","त्त्","प्त","त्न","ञ्च",
"ल्ल","ष्ट्व","ङ्क्ष","ख्न","द्ब्र","ख्र",

"ष्ट्र","ह्न","ज़्","ह्व","द्द",  
"श्र","ट्र","ड्र","ढ्र",
"ट्ट","द्ध","।","्र","्र",
 
"ओ","ओ","औ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",

"क्", "क","ख्","ख","ग्","ग","घ","घ्","ङ",
"च्च्","च्","च","छ","ज्ज्","ज्","ज्","ज","झ","झ्","ञ","ञ्",
 
"ट","ठ","ड","ढ","ण","ण्",
"त्","त","थ्","थ","द","द","ध्","ध","न्न","न्न्","न","न","न्",

"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",
"य्","य","र","ल्","ल","ल","ळ","व्","व",
"श","श","श","श्","श्","ष्","ष","स्","स","ह","ह्",
"क्ष","क्ष्","त्र","त्र्","ज्ञ","ज्ञ्","ðZ",

"ॉ","ौ","ा","ी","ु","ू","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",
"ं","ं","ँ",":","़", "ॅ","ऽ","्","े",

"०","१","२","३","४","५","६","७","८","९",
"0","1","2","3","4","5","6","7","8","9",

"े", "ै", "े","ा","ो","ो","ौ","","ुं","ओ","ो","ो","ईं")   

var array_one_length = array_one.length ;

      document.getElementById("unicode_text").value = "आपके द्वारा हमें यूनीकोड में बदलने के लिए दिये गये शब्द Chanakya लिपि में नहीं हैं"  ;  

      var modified_substring = document.getElementById("legacy_text").value  ;

//****************************************************************************************
//  Break the long text into small bunches of max. max_text_size  characters each.
//****************************************************************************************
    var text_size = document.getElementById("legacy_text").value.length ;

    var processed_text = '' ;  //blank

    var sthiti1 = 0 ;  var sthiti2 = 0 ;  var chale_chalo = 1 ;
 
    var max_text_size = 4000;

    while ( chale_chalo == 1 ) 
    {
     sthiti1 = sthiti2 ;

     if ( sthiti2 < ( text_size - max_text_size ) )  
     { 
      sthiti2 +=  max_text_size ;
      while (document.getElementById("legacy_text").value.charAt ( sthiti2 ) != ' ') {sthiti2--;}
     } 
     else  { sthiti2 = text_size  ;  chale_chalo = 0 }

     var modified_substring = document.getElementById("legacy_text").value.substring ( sthiti1, sthiti2 )  ;

    Replace_Symbols( ) ;

    processed_text += modified_substring ;

//****************************************************************************************
//  Breaking part code over
//****************************************************************************************
//
//    processed_text = processed_text.replace( /Sanskrit 99/g , "mangal" ) ;   

      document.getElementById("unicode_text").value = processed_text  ;

   }


 //--------------------------------------------------

 function Replace_Symbols( )
    {
     //substitute array_two elements in place of corresponding array_one elements

     if ( modified_substring != "" )  // if string to be converted is non-blank then no need of any processing.
        {

// first replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.

modified_substring = modified_substring.replace ( /क़/ , "क़" )  ; 
modified_substring = modified_substring.replace ( /ख़‌/g , "ख़" )  ;
modified_substring = modified_substring.replace ( /ग़/g , "ग़" )  ;
modified_substring = modified_substring.replace ( /ज़/g , "ज़" )  ;
modified_substring = modified_substring.replace ( /ड़/g , "ड़" )  ;
modified_substring = modified_substring.replace ( /ढ़/g , "ढ़" )  ;
modified_substring = modified_substring.replace ( /ऩ/g , "ऩ" )  ;
modified_substring = modified_substring.replace ( /फ़/g , "फ़" )  ;
modified_substring = modified_substring.replace ( /य़/g , "य़" )  ;
modified_substring = modified_substring.replace ( /ऱ/g , "ऱ" )  ;


         for(input_symbol_idx = 0;   input_symbol_idx < array_one_length;    input_symbol_idx++ )
            {
             idx = 0  ;  // index of the symbol being searched for replacement
             
             while (idx != -1 ) //whie-00
                {
                 modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                 idx = modified_substring.indexOf( array_one[input_symbol_idx] )

                } // end of while-00 loop
            } // end of for loop
//**********************************************************************************
// Code for Replacing Special glyph : Z (reph+anusvAr)
//**********************************************************************************
   modified_substring = modified_substring.replace( /Z/g , "üं" ) ; // at some places  ì  is  used eg  in "कर्कंधु,पूर्णांक".

//=============================================================================================

// code for replacing  "ç"   with "ि" (chhotee ee kii maatraa) and correcting its position too.

var position_of_f = modified_substring.indexOf( "ç" )  ;

while ( position_of_f != -1 )  //while-02
{
var charecter_right_to_f = modified_substring.charAt( position_of_f + 1 )  ;

modified_substring = modified_substring.replace( "ç" + charecter_right_to_f  ,  charecter_right_to_f + "ि" )  ;

position_of_f = position_of_f + 1  ;

while ( ( modified_substring.charAt( position_of_f + 1 ) == "्" ) & ( position_of_f < modified_substring.length - 1 ) )
{
var string_to_be_replaced = modified_substring.charAt( position_of_f + 1 ) + modified_substring.charAt( position_of_f + 2 )  ;

modified_substring = modified_substring.replace( "ि" + string_to_be_replaced , string_to_be_replaced + "ि" )  ;

position_of_f = position_of_f + 2  ;

}

position_of_f = modified_substring.search( /ç/ , position_of_f + 1 ) ; // search for ç ahead of the current position.

} // end of while-02 loop


//=============================================================
        //Eliminating "ü"(reph) and putting 'half - r' at proper position for this.
        set_of_matras = "ा ि ी ु ू ृ े ै ो ौ ं ः ँ ॅ" 
         var position_of_Z = modified_substring.indexOf( "ü" )

        while( position_of_Z > 0 )  // while-04
            {
             probable_position_of_half_r = position_of_Z - 1 ;
             var charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r )

             // trying to find non-maatra position left to current ü (ie, half -r).

             while( set_of_matras.match( charecter_at_probable_position_of_half_r ) != null )  // while-05
                {
                 probable_position_of_half_r = probable_position_of_half_r - 1 ;
                 charecter_at_probable_position_of_half_r = modified_substring.charAt( probable_position_of_half_r ) ;

                }// end of while-05

             charecter_to_be_replaced = modified_substring.substr ( probable_position_of_half_r , ( position_of_Z - probable_position_of_half_r ) ) ;
             new_replacement_string = "र्" + charecter_to_be_replaced ; 
             charecter_to_be_replaced = charecter_to_be_replaced + "ü" ;
             modified_substring = modified_substring.replace( charecter_to_be_replaced , new_replacement_string ) ;
             position_of_Z = modified_substring.indexOf( "ü" ) ;
            }// end of while-04
        }//end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

 } // end of legacy_to_unicode function
 
 //--------------------------------------
 //--------------------------------------------
 
 
 function Convert_Unicode_to_Chanakya()

{

var array_one = new Array(

"\‘", "\’", "\“", "\”", " \'", "\' ", "\'", "ं", "ऑ",
"क्ष्","क्ष","त्र","ज्ञ","् ",
                        
"क़","ख़","ग़","ज़्","ज़","ड़","ढ़","फ़्","फ़","य़","ऱ","ऩ",      // one-byte nukta varNas
// "क़","ख़","ग़","ज़","ड़","ढ़","फ़","य़","ऱ","ऩ",    // two-byte nukta varNas

"क्च", "ष्ठ","श्व","स्न","त्र","॥","ढ्ढ","छ्व","रु","रू",
"हृ","ह्र","क्क","क्त","क्र","ञ्ज","ङ्क","ङ्ख","ङ्ग","ङ्घ","ट्ट","ट्ठ",

"क्व","ड्ड","ड्ढ","स्र","द्ग","द्घ","द्द","द्ध","द्ब","द्भ","द्म","द्य","द्व","ठ्ठ","श्च","ह्न","ह्म्","ह्य","ह्ल","ह्व",
 
"त्त","त्त्","प्त","त्न","ञ्च",
"ल्ल","ष्ट्व","ङ्क्ष","ख्न","द्ब्र","ख्र",

"ष्ट्र", "ष्ट", "ह्न", "ह्व", "द्द",  
"श्र्", "श्र", "ट्र", "ड्र", "ढ्र",
"।", "्र",
"शृ", "शॄ", "कॢ", "ह्ण",

"ओ","औ","आ","अ","ईं","ई","इ","उ","ऊ","ऋ","ॠ","ऌ","ऐ","ए",

"के","कै","फे","फै",  //"कं","फं",

"क्","क", "ख्","ख","ग्","ग","घ्","घ","ङ",
"च्च्","च्","च","छ","ज्ज्","ज्","ज","झ्","झ","ञ्","ञ",

"ट","ठ","ड","ढ","ण्","ण",
"त्","त","थ्","थ","द","ध्","ध","न्न्","न्न","न्","न",

"प्","प","फ्","फ","ब्","ब","भ्","भ","म्","म",
"य्","य","र","ल्","ल","ळ","व्","व",
"श्","श","ष्","ष","स्","स","ह्","ह",
"्य","x",

"ॉ","ा","ी","ु","ू","ृ","ॄ","ॢ","े","ै","ो","ौ",
"ं","ं","ँ","ः", '\:', "़", "ॅ","ऽ","्",

"०","१","२","३","४","५","६","७","८","९",
"0","1","2","3","4","5","6","7","8","9")

var array_two = new Array(

"Ò", "Ó", "\"", "\"", " Ò", "Ó ", "Ó", "´", "¥æò",  
"ÿ","ÿæ","˜æ","™æ","÷ ",
"·¸¤", "¹¸", "»¸", "Ê", "Á¸", "Ç¸", "É¸", "¸","È¸","Ø¸","Ú¸","Ù¸", 
// "·¸¤", "¹¸", "»¸", "Á¸","Ç¸", "É¸", "¸U","È¸¤","Ø¸","Ú¸","Ù¸", 

"B¤", "D","E","F","G","H","I","J","L¤","M¤",
"N","O","P¤","Q¤","R¤","T","V","W","X","Y","^","_",

"`¤","a","b","d","e","f","g","h","i","j","k","l","m","n","p","q","r","s","t","u",

"žæ","ž","#","%","@",
"„","¦","¨","¯","µ","º",

"Cþ", "C", "q", "u", "g",    
"Ÿ","Ÿæ","Åþ","Çþ","Éþ", 
"Ð","ý",
"oë","oì","•í","ö",

"¥ô","¥õ","¥æ","¥","§Z","§ü","§","©","ª¤","«","¬","­","°ð","°",

"·Ô¤","·ñ¤","ÈÔ¤","Èñ¤",   // "·´¤","È´¤",

"€U", "·¤", "", "¹", "\‚", "\»", "ƒ", "ƒæ", "¾", 
"“", "‘", "¿", "À", "”", "’", "Á", "Û", "Ûæ", "†", "†æ",

"ÅU","Æ","Ç","É","‡","‡æ",
"ˆ","Ì","‰","Í","Î","Š","Ï","ó","óæ","‹","Ù",

"Œ","Â","","È","Ž","Õ","","Ö","","×",
"Ä","Ø","ÚU","Ë","Ü","Ý","Ã","ß",
"à","àæ","c","á","S","â","±","ã",
"K","&",
 
"æò", "æ", "è", "é", "ê", "ë", "ì","í","ð","ñ","ô","õ",
"¢", "´", "¡", "Ñ", "Ñ", "¸", "ò", "ù", "÷",

"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"®", "v", "w", "x", "y", "z", "\{", "|", "\}", "~")


//**************************************************************************************
//  To be edited above this line
//**************************************************************************************
// The following two characters are to be replaced through proper checking of locations:
//**************************************************************************************
// "d",
// "ि",
//
// "Ê",
// "र्" (reph) 
//**************************************************************************************

var array_one_length = array_one.length ;
var array_two_length = array_two.length ;

if ( array_one_length == array_two_length ) 
  document.getElementById("legacy_text").value = "Both the arrays are of equal length"  ;  
  else document.getElementById("legacy_text").value = "Both the arrays are NOT of equal length"  ;  

  document.getElementById("legacy_text").value = "You have chosen SIMPLE TEXT in Unicode to convert into 4CGandhi. Conversion in progress.."  ;  

var modified_substring = document.getElementById("unicode_text").value  ;

    Replace_Symbols( ) ;

  //  alert(" modified substring = "+modified_substring)

    var processed_text = modified_substring ;

 //   alert(" modified substring2 = "+modified_substring)

    document.getElementById("legacy_text").value = processed_text  ;

	

//**************************************************
//--------------------------------------------------
//**************************************************



function Replace_Symbols( )
   {
// "d",
// "ि",
//
// "Ê",
// "र्" (reph) 


    // if string to be converted is non-blank then no need of any processing.
    if (modified_substring != "" )  
       {
        // code for replacing "ि" (chhotee ee kii maatraa) with "d" and correcting its position too.
        
        var position_of_f = modified_substring.indexOf( "ि" )  ;
         while ( position_of_f != -1 )  //while-02
           {
            var character_left_to_f = modified_substring.charAt( position_of_f - 1 )  ;
            modified_substring = modified_substring.replace( character_left_to_f + "ि" ,  "d" + character_left_to_f )  ;

            position_of_f = position_of_f - 1  ;

            while (( modified_substring.charAt( position_of_f - 1 ) == "्" )  &  ( position_of_f != 0  ) )
               {
                var string_to_be_replaced = modified_substring.charAt( position_of_f - 2 ) + "्"  ;
                  modified_substring = modified_substring.replace( string_to_be_replaced + "d", "d" + string_to_be_replaced ) ;

                position_of_f = position_of_f - 2  ;
               }
            position_of_f = modified_substring.search( /ि/ , position_of_f + 1 ) ; // search for f ahead of the current position.

           } // end of while-02 loop
		   
 
   //************************************************************     
        // Eliminating "र्" and putting  "Ê"   at proper position for this.
		
// before searching and replacing half-R,  replace 'tr' and 'shr' so that they  do not intrude with half-R search-and-replace activity.				
		modified_substring = modified_substring.replace( /श्र्/g  , 'ß' ) ;
		modified_substring = modified_substring.replace( /त्र्/g  , 'Â' ) ;
		

       set_of_matras = "ािीुूृेैोौं:ँॅ" 

modified_substring += '  ' ;  // add two spaces after the string to avoid UNDEFINED char in the following code.

       var position_of_half_R = modified_substring.indexOf( "र्" ) ;
        while ( position_of_half_R > 0  )  // while-04
           {
            // "र्"  is two bytes long
			 if ( modified_substring.charAt( position_of_half_R + 3 ) != '्' ) 
                  var probable_position_of_Z = position_of_half_R + 3    
			
			    else { if ( modified_substring.charAt( position_of_half_R + 5 ) != '्' ) 
			              probable_position_of_Z = position_of_half_R + 5
                         else probable_position_of_Z = position_of_half_R + 7 ;				  
					  }
			
            var character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 0 )

            // trying to find non-maatra position right to probable_position_of_Z .

            while ( set_of_matras.indexOf( character_right_to_probable_position_of_Z ) != -1 )  
               {
                probable_position_of_Z = probable_position_of_Z + 1 ;
                character_right_to_probable_position_of_Z = modified_substring.charAt( probable_position_of_Z + 1 ) ;
               } // end of while-05
			   
			  
            string_to_be_replaced = modified_substring.substr ( position_of_half_R + 2 , ( probable_position_of_Z - position_of_half_R - 2 ))  ;
            modified_substring = modified_substring.replace( "र्" + string_to_be_replaced  ,  string_to_be_replaced + "Ê" ) ;
            position_of_half_R = modified_substring.indexOf( "र्" ) ;
           } // end of while-04


        modified_substring = modified_substring.substr ( 0 , modified_substring.length - 2 )  ;



        //substitute array_two elements in place of corresponding array_one elements

   //************************************************************     
        for( input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++ )
           {
            idx = 0  ;  // index of the symbol being searched for replacement

            while (idx != -1 ) //whie-00
               {
                modified_substring = modified_substring.replace( array_one[ input_symbol_idx ] , array_two[input_symbol_idx] )
                idx = modified_substring.indexOf( array_one[input_symbol_idx] )
               } // end of while-00 loop
           } // end of for loop
//***********************************************************************
// shift the ikAr mAtrAs of nuqta characters in 4CGandhi
//***********************************************************************
        
		modified_substring = modified_substring.replace ( /È¸ý/g , "Èý¸¤" );
		modified_substring = modified_substring.replace ( /d/g , "ç" );
		modified_substring = modified_substring.replace ( /„/g , "ËÜ" );
		
		
//		in newspaper nukta used in urdu and farshi words are not in use
//		modified_substring = modified_substring.replace( /×RY/g , "RY" ) ;
//		modified_substring = modified_substring.replace( /×J/g , "J" ) ;
//		modified_substring = modified_substring.replace( /×¦f/g , "¦f" ) ;
//		modified_substring = modified_substring.replace( /×IY/g , "IY" ) ;
//		modified_substring = modified_substring.replace( /¬/g , "ª" ) ;

		
        } // end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols( )

  } // end of legacy_to_unicode  function
var shortcode = {
	
	init:function(){
		jQuery('.shortcode_selector select').val('');
		jQuery('.shortcode_selector select').change(function(){
			jQuery(".shortcode_wrap").hide();
			if(this.value !=''){
				var wrap = jQuery("#shortcode_"+this.value).show();
				if(wrap.children('.sub_shortcode_wrap').size() == 0){
					wrap.find('.toggle-button:checkbox').iphoneStyle();
				}
			}
		});
		
		jQuery('#shortcode_send').click(function(){
			shortcode.sendToEditor();
		});
		jQuery('.shortcode_sub_selector select').val('');
		jQuery('.shortcode_sub_selector select').change(function(){
			jQuery(this).closest('.shortcode_wrap').children('.sub_shortcode_wrap').hide();
			if(this.value !=''){
				jQuery("#sub_shortcode_"+this.value).show().find('.toggle-button:checkbox').iphoneStyle();
			}
		});
		var tabs_number = jQuery('[name="sc_tabs_number"]').val();
		jQuery('#shortcode_tabs table tr').each(function(i){
			if(i>(1+tabs_number*2)){
				jQuery(this).hide();
			}else{
				jQuery(this).show();
			}
		});
		jQuery('[name="sc_tabs_number"]').change(function(){
			var tabs_number = jQuery(this).val();
			jQuery('#shortcode_tabs table tr').each(function(i){
				if(i>(1+tabs_number*2)){
					jQuery(this).hide();
				}else{
					jQuery(this).show();
				}
			});
		});
		
		jQuery('#shortcode_accordion table tr').each(function(i){
			if(i>(tabs_number*2)){
				jQuery(this).hide();
			}else{
				jQuery(this).show();
			}
		});
		jQuery('[name="sc_accordion_number"]').change(function(){
			var tabs_number = jQuery(this).val();
			jQuery('#shortcode_accordion table tr').each(function(i){
				if(i>(tabs_number*2)){
					jQuery(this).hide();
				}else{
					jQuery(this).show();
				}
			});
		});
	},
	
	generate:function(){
		var type = jQuery('.shortcode_selector select').val();
		switch( type ){
		case 'columns':
			var type = shortcode.getVal('columns', 'type');
			if(type != ''){
				return '\n['+type+']\n'+shortcode.getVal('columns', 'content')+'\n[/'+type+']\n';
			}else{
				return '';
			}
			break;
		case 'layouts':
			var sub_type = shortcode.getVal('layouts','selector');
			switch(sub_type){
			case 'one_half_layout':
				return '\n[one_half]\n'+shortcode.getVal('layouts', 'one_half_layout', '1')+'\n[/one_half]\n\n[one_half_last]\n'+shortcode.getVal('layouts', 'one_half_layout', '2')+'\n[/one_half_last]\n';
				break;
			case 'one_third_layout':
				return '\n[one_third]\n'+shortcode.getVal('layouts', 'one_third_layout', '1')+'\n[/one_third]\n\n[one_third]\n'+shortcode.getVal('layouts', 'one_third_layout', '2')+'\n[/one_third]\n\n[one_third_last]\n'+shortcode.getVal('layouts', 'one_third_layout', '3')+'\n[/one_third_last]\n';
				break;
			case 'one_fourth_layout':
				return '\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_layout', '1')+'\n[/one_fourth]\n\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_layout', '2')+'\n[/one_fourth]\n\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_layout', '3')+'\n[/one_fourth]\n\n[one_fourth_last]\n'+shortcode.getVal('layouts', 'one_fourth_layout', '4')+'\n[/one_fourth_last]\n';
				break;
			case 'one_fifth_layout':
				return '\n[one_fifth]\n'+shortcode.getVal('layouts', 'one_fifth_layout', '1')+'\n[/one_fifth]\n\n[one_fifth]\n'+shortcode.getVal('layouts', 'one_fifth_layout', '2')+'\n[/one_fifth]\n\n[one_fifth]\n'+shortcode.getVal('layouts', 'one_fifth_layout', '3')+'\n[/one_fifth]\n\n[one_fifth]\n'+shortcode.getVal('layouts', 'one_fifth_layout', '4')+'\n[/one_fifth]\n\n[one_fifth_last]\n'+shortcode.getVal('layouts', 'one_fifth_layout', '5')+'\n[/one_fifth_last]\n';
				break;
			case 'one_sixth_layout':
				return '\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_layout', '1')+'\n[/one_sixth]\n\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_layout', '2')+'\n[/one_sixth]\n\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_layout', '3')+'\n[/one_sixth]\n\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_layout', '4')+'\n[/one_sixth]\n\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_layout', '5')+'\n[/one_sixth]\n\n[one_sixth_last]\n'+shortcode.getVal('layouts', 'one_sixth_layout', '6')+'\n[/one_sixth_last]\n';
				break;
			case 'one_third_two_third':
				return '\n[one_third]\n'+shortcode.getVal('layouts', 'one_third_two_third', '1')+'\n[/one_third]\n\n[two_third_last]\n'+shortcode.getVal('layouts', 'one_third_two_third', '2')+'\n[/two_third_last]\n';
				break;
			case 'two_third_one_third':
				return '\n[two_third]\n'+shortcode.getVal('layouts', 'two_third_one_third', '1')+'\n[/two_third]\n\n[one_third_last]\n'+shortcode.getVal('layouts', 'two_third_one_third', '2')+'\n[/one_third_last]\n';
				break;
			case 'one_fourth_three_fourth':
				return '\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_three_fourth', '1')+'\n[/one_fourth]\n\n[three_fourth_last]\n'+shortcode.getVal('layouts', 'one_fourth_three_fourth', '2')+'\n[/three_fourth_last]\n';
				break;
			case 'three_fourth_one_fourth':
				return '\n[three_fourth]\n'+shortcode.getVal('layouts', 'three_fourth_one_fourth', '1')+'\n[/three_fourth]\n\n[one_fourth_last]\n'+shortcode.getVal('layouts', 'three_fourth_one_fourth', '2')+'\n[/one_fourth_last]\n';
				break;
			case 'one_fourth_one_fourth_one_half':
				return '\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_one_fourth_one_half', '1')+'\n[/one_fourth]\n\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_one_fourth_one_half', '2')+'\n[/one_fourth]\n\n[one_half_last]\n'+shortcode.getVal('layouts', 'one_fourth_one_fourth_one_half', '3')+'\n[/one_half_last]\n';
				break;
			case 'one_fourth_one_half_one_fourth':
				return '\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_fourth_one_half_one_fourth', '1')+'\n[/one_fourth]\n\n[one_half]\n'+shortcode.getVal('layouts', 'one_fourth_one_half_one_fourth', '2')+'\n[/one_half]\n\n[one_fourth_last]\n'+shortcode.getVal('layouts', 'one_fourth_one_half_one_fourth', '3')+'\n[/one_fourth_last]\n';
				break;
			case 'one_half_one_fourth_one_fourth':
				return '\n[one_half]\n'+shortcode.getVal('layouts', 'one_half_one_fourth_one_fourth', '1')+'\n[/one_half]\n\n[one_fourth]\n'+shortcode.getVal('layouts', 'one_half_one_fourth_one_fourth', '2')+'\n[/one_fourth]\n\n[one_fourth_last]\n'+shortcode.getVal('layouts', 'one_half_one_fourth_one_fourth', '3')+'\n[/one_fourth_last]\n';
				break;
			case 'four_fifth_one_fifth':
				return '\n[four_fifth]\n'+shortcode.getVal('layouts', 'four_fifth_one_fifth', '1')+'\n[/four_fifth]\n\n[one_fifth_last]\n'+shortcode.getVal('layouts', 'four_fifth_one_fifth', '2')+'\n[/one_fifth_last]\n';
				break;
			case 'one_fifth_four_fifth':
				return '\n[one_fifth]\n'+shortcode.getVal('layouts', 'one_fifth_four_fifth', '1')+'\n[/one_fifth]\n\n[four_fifth_last]\n'+shortcode.getVal('layouts', 'one_fifth_four_fifth', '2')+'\n[/four_fifth_last]\n';
				break;
			case 'two_fifth_three_fifth':
				return '\n[two_fifth]\n'+shortcode.getVal('layouts', 'two_fifth_three_fifth', '1')+'\n[/two_fifth]\n\n[three_fifth_last]\n'+shortcode.getVal('layouts', 'two_fifth_three_fifth', '2')+'\n[/three_fifth_last]\n';
				break;
			case 'three_fifth_two_fifth':
				return '\n[three_fifth]\n'+shortcode.getVal('layouts', 'three_fifth_two_fifth', '1')+'\n[/three_fifth]\n\n[two_fifth_last]\n'+shortcode.getVal('layouts', 'three_fifth_two_fifth', '2')+'\n[/two_fifth_last]\n';
				break;
			case 'one_sixth_five_sixth':
				return '\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_five_sixth', '1')+'\n[/one_sixth]\n\n[five_sixth_last]\n'+shortcode.getVal('layouts', 'one_sixth_five_sixth', '2')+'\n[/five_sixth_last]\n';
				break;
			case 'five_sixth_one_sixth':
				return '\n[five_sixth]\n'+shortcode.getVal('layouts', 'five_sixth_one_sixth', '1')+'\n[/five_sixth]\n\n[one_sixth_last]\n'+shortcode.getVal('layouts', 'five_sixth_one_sixth', '2')+'\n[/one_sixth_last]\n';
				break;
			case 'one_sixth_one_sixth_one_sixth_one_half':
				return '\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_one_sixth_one_sixth_one_half', '1')+'\n[/one_sixth]\n\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_one_sixth_one_sixth_one_half', '2')+'\n[/one_sixth]\n\n[one_sixth]\n'+shortcode.getVal('layouts', 'one_sixth_one_sixth_one_sixth_one_half', '3')+'\n[/one_sixth]\n\n[one_half_last]\n'+shortcode.getVal('layouts', 'one_sixth_one_sixth_one_sixth_one_half', '4')+'\n[/one_half_last]\n';
				break;
			}
			break;
		case 'typography':
			var sub_type = shortcode.getVal('typography','selector');
			switch(sub_type){
			case 'dropcap1':
			case 'dropcap2':
			case 'dropcap3':
			case 'dropcap4':
				var color = shortcode.getVal('typography',sub_type,'color');
				if(color !== ''){
					color = ' color="'+color+'"';
				}
				return '['+sub_type+color+']'+shortcode.getVal('typography',sub_type,'text')+'[/'+sub_type+']';
				break;
			case 'blockquote':
				var align = shortcode.getVal('typography','blockquote','align');
				var cite = shortcode.getVal('typography','blockquote','cite');
				if(align !== ''){
					align = ' align="'+align+'"';
				}
				if(cite !== ''){
					cite = ' cite="'+cite+'"';
				}
				return '[blockquote'+align+cite+']'+ shortcode.getVal('typography','blockquote','content') +'[/blockquote]\n';
				break;
			case 'pre_code':
				var s = shortcode.getVal('typography','pre_code','type');
				if(s == ''){
					s='code';
				}
				return '\n['+s+']\n'+shortcode.getVal('typography','pre_code','content')+'\n[/'+s+']\n';
			case 'styledlist':
				var style = shortcode.getVal('typography','styledlist','style');
				var color = shortcode.getVal('typography','styledlist','color');
				if(style !== ''){
					style= ' style="'+style+'"';
				}
				if(color !== ''){
					color = ' color="'+color+'"';
				}
				return '\n[list'+style+color+']\n'+shortcode.getVal('typography','styledlist','content')+'\n[/list]\n';
			case 'icon':
				var style = shortcode.getVal('typography','icon','style');
				var color = shortcode.getVal('typography','icon','color');
				if(style !== ''){
					style= ' style="'+style+'"';
				}
				if(color !== ''){
					color = ' color="'+color+'"';
				}
				return '\n[icon'+style+color+']'+shortcode.getVal('typography','icon','text')+'[/icon]\n';
			case 'icon_link':
				var style = shortcode.getVal('typography','icon_link','style');
				var href = shortcode.getVal('typography','icon_link','href');
				var color = shortcode.getVal('typography','icon_link','color');
				if(style !== ''){
					style= ' style="'+style+'"';
				}
				if(href !== ''){
					href= ' href="'+href+'"';
				}
				if(color !== ''){
					color = ' color="'+color+'"';
				}
				return '\n[icon_link'+style+href+color+']'+shortcode.getVal('typography','icon_link','text')+'[/icon_link]\n';
			case 'highlight':
				var t = shortcode.getVal('typography','highlight','type');
				if(t!==''){
					t = ' type="'+t+'"';
				}
				return '[highlight'+t+']'+shortcode.getVal('typography','highlight','content')+'[/highlight]';
			}
			break;
		case 'styledboxes':
			var sub_type = shortcode.getVal('styledboxes','selector');
			switch(sub_type){
			case 'messageboxes':
				var t = shortcode.getVal('styledboxes','messageboxes','type');
				if(t == ''){
					t='info';
				}
				return '\n['+t+']\n'+shortcode.getVal('styledboxes','messageboxes','content')+'\n[/'+t+']\n';
			case 'framed_box':
				var width = shortcode.getVal('styledboxes','framed_box','width');
				var height = shortcode.getVal('styledboxes','framed_box','height');
				var bgColor = shortcode.getVal('styledboxes','framed_box','bgColor');
				var textColor = shortcode.getVal('styledboxes','framed_box','textColor');
				var rounded = shortcode.getVal('styledboxes','framed_box','rounded');

				if(width!=0){
					width = ' width="'+width+'"';
				}else{
					width ='';
				}

				if(height!=0){
					height = ' height="'+height+'"';
				}else{
					height ='';
				}

				if(bgColor != ''){
					bgColor = ' bgColor="'+ bgColor +'"';
				}
				if(textColor != ''){
					textColor = ' textColor="'+ textColor +'"';
				}

				if(rounded===true){
					rounded = ' rounded="true"';
				}else{
					rounded = '';
				}
				return '\n[framed_box'+width+height+bgColor+textColor+rounded+']\n'+shortcode.getVal('styledboxes','framed_box','content')+'\n[/framed_box]\n';
			case 'note_box':
				var title = shortcode.getVal('styledboxes','note_box','title');
				var align = shortcode.getVal('styledboxes','note_box','align');
				var width = shortcode.getVal('styledboxes','note_box','width');

				if(title != ''){
					title = ' title="'+title+'"';
				}
				if(align !== ''){
					align = ' align="'+align+'"';
				}
				if(width!=0){
					width = ' width="'+width+'"';
				}else{
					width ='';
				}
				return '\n[note'+title+align+width+']\n'+shortcode.getVal('styledboxes','note_box','content')+'\n[/note]\n';
			}
			break;
		case 'tables':
			return '\n[table]\n'+shortcode.getVal('tables','content')+'\n[/table]\n';
			break;
		case 'buttons':
			var id = shortcode.getVal('buttons','id');
			var c = shortcode.getVal('buttons','class');
			var size = shortcode.getVal('buttons','size');
			var align = shortcode.getVal('buttons','align');
			var full = shortcode.getVal('buttons','full');
			var link = shortcode.getVal('buttons','link');
			var linkTarget = shortcode.getVal('buttons','linkTarget');
			var color = shortcode.getVal('buttons','color');
			var text = shortcode.getVal('buttons','text');
			var bgColor = shortcode.getVal('buttons','bgColor');
			var textColor = shortcode.getVal('buttons','textColor');

			if(id != ''){
				id = ' id="'+ id +'"';
			}
			if(c != ''){
				c = ' class="'+ c +'"';
			}
			if(size!=''){
				size =' size="'+size+'"';
			}
			if(align!=''){
				align =' align="'+align+'"';
			}
			if(full===true){
				full = ' full="true"';
			}else{
				full = '';
			}
			if(link!= ''){
				link = ' link="'+link+'"';
			}
			if(linkTarget!= ''){
				linkTarget = ' linkTarget="'+linkTarget+'"';
			}
			if(color!=''){
				color = ' color="'+color+'"';
			}
			if(bgColor != ''){
				bgColor = ' bgColor="'+ bgColor +'"';
			}
			if(textColor != ''){
				textColor = ' textColor="'+ textColor +'"';
			}
			return '[button'+id+c+size+align+full+link+linkTarget+color+bgColor+textColor+']'+text+'[/button]';
			break;
		case 'tabs':
			var type = shortcode.getVal('tabs','type');
			var number = shortcode.getVal('tabs','number');
			if(type == ''){
				type = 'tabs';
			}
			var ret = '\n['+type+']\n';
			for(var i=1;i<=number;i++){
				ret +='[tab title="'+shortcode.getVal('tabs','title_'+i)+'"]\n'+shortcode.getVal('tabs','content_'+i)+'\n[/tab]\n';
			}
			ret +='[/'+type+']\n';
			return ret;
			break;
		case 'accordion':
			var number = shortcode.getVal('accordion','number');
			var ret = '\n[accordions]\n';
			for(var i=1;i<=number;i++){
				ret +='[accordion title="'+shortcode.getVal('accordion','title_'+i)+'"]\n'+shortcode.getVal('accordion','content_'+i)+'\n[/accordion]\n';
			}
			ret +='[/accordions]\n';
			return ret;
			break;
		case 'toggle':
			return '\n[toggle title="'+shortcode.getVal('toggle','title')+'"]\n'+shortcode.getVal('toggle','content')+'\n[/toggle]\n';
			break;
		case 'divider':
			return '\n['+shortcode.getVal('divider','type')+']\n';
			break;
		case 'images':
			var sub_type = shortcode.getVal('images','selector');
			switch(sub_type){
				case 'picture_frame':
					var title = shortcode.getVal('images','picture_frame','title');
					if(title!=''){
						title = ' title="'+title+'"';
					}
					return '[picture_frame'+title+']'+shortcode.getVal('images','picture_frame','src')+'[/picture_frame]';
					break;
				case 'image':
					var src = shortcode.getVal('images','image','src');
					var title = shortcode.getVal('images','image','title');
					var size = shortcode.getVal('images','image','size');
					var align = shortcode.getVal('images','image','align');
					var icon = shortcode.getVal('images','image','icon');
					var lightbox = shortcode.getVal('images','image','lightbox');
					var group = shortcode.getVal('images','image','group');
					var width = shortcode.getVal('images','image','width');
					var height = shortcode.getVal('images','image','height');
					var link = shortcode.getVal('images','image','link');

					if(size!=''){
						size =' size="'+size+'"';
					}
					if(align!=''){
						align =' align="'+align+'"';
					}
					if(icon!=''){
						icon =' icon="'+icon+'"';
					}
					if(lightbox===true){
						lightbox = ' lightbox="true"';
					}else{
						lightbox = '';
					}
					if(link!= ''){
						link = ' link="'+link+'"';
					}
					if(group!=''){
						group = ' group="'+group+'"';
					}
					if(width!=0){
						width = ' width="'+width+'"';
					}else{
						width ='';
					}
					if(height!=0){
						height = ' height="'+height+'"';
					}else{
						height ='';
					}
					if(title!=''){
						title = ' title="'+title+'"';
					}
					return '[image'+title+size+align+icon+lightbox+group+link+width+height+']'+src+'[/image]';
					break;
			};
			break;

		case 'video':
			var sub_type = shortcode.getVal('video','selector');
			switch(sub_type){
				case 'flash':
					var src = shortcode.getVal('video','flash','src');
					var width = shortcode.getVal('video','flash','width');
					var height = shortcode.getVal('video','flash','height');
					var play = shortcode.getVal('video','flash','play');
					var flashvars = shortcode.getVal('video','flash','flashvars');

					if(src !=""){
						src = ' src="'+src+'"';
					}
					if(width!=0){
						width = ' width="'+width+'"';
					}else{
						width ='';
					}
					if(height!=0){
						height = ' height="'+height+'"';
					}else{
						height ='';
					}
					if(play===true){
						play = ' play="true"';
					}else{
						play = '';
					}
					if(flashvars !=""){
						flashvars = ' flashvars="'+flashvars+'"';
					}
					
					return '[video type="flash"'+src+width+height+play+flashvars+']';
					break;
				case 'youtube':
					var clip_id = shortcode.getVal('video','youtube','clip_id');
					var width = shortcode.getVal('video','youtube','width');
					var height = shortcode.getVal('video','youtube','height');

					if(clip_id !=""){
						clip_id = ' clip_id="'+clip_id+'"';
					}
					if(width!=0){
						width = ' width="'+width+'"';
					}else{
						width ='';
					}
					if(height!=0){
						height = ' height="'+height+'"';
					}else{
						height ='';
					}
					
					return '[video type="youtube"'+clip_id+width+height+']';
					break;
				case 'vimeo':
					var clip_id = shortcode.getVal('video','vimeo','clip_id');
					var width = shortcode.getVal('video','vimeo','width');
					var height = shortcode.getVal('video','vimeo','height');

					if(clip_id !=""){
						clip_id = ' clip_id="'+clip_id+'"';
					}
					if(width!=0){
						width = ' width="'+width+'"';
					}else{
						width ='';
					}
					if(height!=0){
						height = ' height="'+height+'"';
					}else{
						height ='';
					}
					
					return '[video type="vimeo"'+clip_id+width+height+']';
					break;
				case 'dailymotion':
					var clip_id = shortcode.getVal('video','dailymotion','clip_id');
					var width = shortcode.getVal('video','dailymotion','width');
					var height = shortcode.getVal('video','dailymotion','height');

					if(clip_id !=""){
						clip_id = ' clip_id="'+clip_id+'"';
					}
					if(width!=0){
						width = ' width="'+width+'"';
					}else{
						width ='';
					}
					if(height!=0){
						height = ' height="'+height+'"';
					}else{
						height ='';
					}
					
					return '[video type="dailymotion"'+clip_id+width+height+']';
					break;
			};
			break;
		case 'blog':
			var count = shortcode.getVal('blog','count');
			var posts = shortcode.getVal('blog','posts');
			var cat = shortcode.getVal('blog','cat');
			var image = shortcode.getVal('blog','image');
			var meta = shortcode.getVal('blog','meta');
			var full = shortcode.getVal('blog','full');
			var nopaging = shortcode.getVal('blog','nopaging');

			if(count!==''){
				count = ' count="'+count+'"';
			}else{
				count = '';
			}
			if(posts!=undefined){
				posts = ' posts="'+posts+'"';
			}else{
				posts = '';
			}
			if(cat!=undefined){
				cat = ' cat="'+cat+'"';
			}else{
				cat = '';
			}
			if(image===false){
				image = ' image="false"';
			} else {
				image = '';
			}
			if(meta===false){
				meta = ' meta="false"';
			} else {
				meta = '';
			}
			if(full===true){
				full = ' full="true"';
			} else {
				full = '';
			}
			if(nopaging===false){
				nopaging = ' nopaging="false"';
			}else{
				nopaging = '';
			}

			return '[blog'+count+posts+cat+image+meta+full+nopaging+']';
			break;
		}
		return '';
	},
	getVal:function(a,b,c){
		if(b == undefined){
			var target = jQuery('[name="sc_'+a+'"]');
			if(target.is('.toggle-button')){
				if(target.is(':checked')){
					return true;
				}else{
					return false;
				}
			}
			if(target.size() == 0){
				return jQuery('[name="sc_'+a+'[]"]').val();
			}else{
				return target.val();
			}
		}else if(c == undefined){
			var target = jQuery('[name="sc_'+a+'_'+b+'"]');
			if(target.is('.toggle-button')){
				if(target.is(':checked')){
					return true;
				}else{
					return false;
				}
			}
			if(target.size() == 0){
				return jQuery('[name="sc_'+a+'_'+b+'[]"]').val();
			}else{
				return target.val();
			}
		}else {
			var target = jQuery('[name="sc_'+a+'_'+b+'_'+c+'"]');
			if(target.is('.toggle-button')){
				if(target.is(':checked')){
					return true;
				}else{
					return false;
				}
			}
			if(target.size() == 0){
				return jQuery('[name="sc_'+a+'_'+b+'_'+c+'[]"]').val();
			}else{
				return target.val();
			}
		}
		
	},
	sendToEditor :function(){
		 send_to_editor(shortcode.generate());
	}
		
}

jQuery(document).ready( function($) {
	shortcode.init();
});
$(document).on("ready",function()
{
	$('#nextbutton').on('click',function(e)
	{
		e.preventDefault();
		$('#employment-status input').each(function(i,el)
		{
			if ($(el).is(':checked'))
			{
				var dest = $(el).data('dest');
				window.location.href = dest;
			}
			
		});
	});
});
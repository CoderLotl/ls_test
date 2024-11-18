document.addEventListener('DOMContentLoaded', () =>
{
    let btn_store = document.getElementById('btn_store');
    let btn_retrieve = document.getElementById('btn_retrieve');
    let btn_clear = document.getElementById('btn_clear');
    let text_area_input = document.getElementById('txt_area_input');
    let text_area_output = document.getElementById('text_area_output');    

    btn_store.addEventListener('click', ()=>
    {
        let content_input = text_area_input.value;        
        if(content_input != '' && content_input.trim() != '')
        {
            localStorage.setItem('content', content_input);
            text_area_input.value = '';
        }
    });

    btn_retrieve.addEventListener('click', ()=>
    {
        text_area_output.value = '';
        let content_output = localStorage.getItem('content');
        if(content_output)
        {
            text_area_output.value = content_output;
        }
    });

    btn_clear.addEventListener('click', ()=>
    {
        text_area_output.value = '';
    });
});
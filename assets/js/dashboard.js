function Edit(e){let t=e.target.getAttribute("data-id"),l=e.target.getAttribute("data-app"),a=e.target.getAttribute("data-email"),r=e.target.getAttribute("data-password"),o=document.createElement("div");o.classList.add("MODAL","absolute","w-[450px]","h-[330px]","bg-[#222222]","shadow-xl","rounded-lg","z-40","left-1/2","top-1/2","transform","-translate-x-1/2","-translate-y-1/2"),o.innerHTML=`<form action="" method="POST"> <div class="flex justify-center items-center mt-4"> <p class="truncate w-[180px] text-center">Editing   ${l}</p> </div> <input id="editId" type="hidden" name="id" value="${t}"><div class="flex flex-col justify-around items-center mt-4 space-y-4"><div class="relative"><input autocomplete="off" class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent" id="app" name="app" type="text" placeholder=" " value="${l}"><label for="app" class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4">App</label></div><div class="relative"><input autocomplete="off" class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent" id="email" name="email" type="email" placeholder=" " value="${a}"><label for="email" class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4">Email</label></div><div class="relative"><input autocomplete="off" class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent" id="password" name="password" type="text" placeholder=" " value="${r}"><label for="password" class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4">Password</label></div></div><div class="flex justify-around items-center mt-6"><button type="submit" name="edit" class="w-[80px] h-[35px] bg-green-700 border-green-800 border-2 rounded-md">Save</button><button type="button" onclick="cancelModal()" class="w-[80px] h-[35px] bg-gray-700 border-gray-800 border-2 rounded-md">Cancel</button></div></form>`,document.getElementById("section").style.filter="blur(4px)",document.getElementById("section").style.pointerEvents="none",document.body.appendChild(o)}function cancelModal(){let e=document.querySelector(".MODAL");document.getElementById("section").style.filter="",document.getElementById("section").style.pointerEvents="",e&&e.remove()}
function open_add_modal(){const modal=document.createElement('div');modal.classList.add('ADD_MODAL','absolute','w-[450px]','h-[330px]','bg-[#222222]','shadow-xl','rounded-lg','z-40','left-1/2','top-1/2','transform','-translate-x-1/2','-translate-y-1/2');modal.innerHTML=`<form action="" method="POST"><div class="flex justify-center items-center mt-4"><p class="truncate w-[180px] text-center">Add New</p></div><input type="hidden" value=""><div class="flex flex-col justify-around items-center mt-4 space-y-4"><div class="relative"><input autocomplete="off" class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent" id="app" name="app" type="text" placeholder=" " /><label for="app" class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4">App</label></div><div class="relative"><input autocomplete="off" class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent" id="email" name="email" type="email" placeholder=" " /><label for="email" class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4">Email</label></div><div class="relative"><input autocomplete="off" class="peer p-4 placeholder-transparent outline-none text-white w-[390px] h-[55px] border-[#ffffff] border rounded-xl bg-transparent" id="password" name="password" type="text" placeholder=" " /><label for="password" class="absolute pl-1 pr-1 transition-all text-white bg-[#222222] peer-placeholder-shown:top-4 peer-placeholder-shown:left-4 peer-focus:-top-3 peer-focus:left-4 -top-3 left-4">Password</label></div></div><div class="flex justify-around items-center mt-6"><button type="submit" name="add" class="w-[80px] h-[35px] bg-green-700 border-green-800 border-2 rounded-md">Add</button><button type="button" onclick="closeModal()" class="w-[80px] h-[35px] bg-gray-700 border-gray-800 border-2 rounded-md">Cancel</button></div></form>`;document.getElementById("section").style.filter="blur(4px)";document.getElementById("section").style.pointerEvents="none";document.body.appendChild(modal)}function closeModal(){document.getElementById("section").style.filter="";document.getElementById("section").style.pointerEvents="";const modal=document.querySelector('.ADD_MODAL');modal&&modal.remove()}
function open_regenerate_modal() {
    const modal = document.createElement('div');
    modal.classList.add('REGENERATE_MODAL', 'bg-[#222222]', 'flex', 'flex-col', 'rounded-lg', 'p-4', 'justify-center', 'items-center', 'absolute', 'top-1/2', 'left-1/2', 'translate-x-[-50%]', 'translate-y-[-50%]');
    
    modal.innerHTML = `
        <p><span class="text-red-500">Warning:</span> Regenerating the key will result in the deletion of all your data from our database. This action is irreversible and cannot be undone. Please proceed with caution and ensure you have backed up any important information before continuing.</p>
        <form id="regenerate-form" action="/dashboard/" class="mt-4 space-x-8" method="POST">   
            <button type="submit" name="regenerate-key" class="pl-4 pr-4 h-[35px] bg-red-700 border-red-800 border-2 rounded-md">Regenerate</button>
            <button type="button" onclick="cancelRegenerateModal()" class="w-[80px] h-[35px] bg-gray-600 border-gray-700 border-2 rounded-md">Cancel</button>
        </form>
    `;
    
    document.body.appendChild(modal);

    const form = document.getElementById('regenerate-form');
    form.addEventListener('submit', function(event) {
        setTimeout(function() {
            location.reload();
        }, 1000); 
    });
}

function cancelRegenerateModal() {
    const modal = document.querySelector('.REGENERATE_MODAL');
    if (modal) {
        modal.remove();
    }
}

function open_change_key_modal() {

    const modal = document.createElement('div');
    modal.classList.add("CHANGE_KEY_MODAL", "rounded-lg", "absolute", "top-1/2", "left-1/2", "translate-x-[-50%]", "translate-y-[-50%]", "bg-[#222222]", "flex", "flex-col" ,"justify-center", "items-center");
    
    modal.innerHTML = `
        <form action="" method="POST" enctype="multipart/form-data" id="key_upload">
            <input type="file" hidden name="key" id="key" accept=".key">
            <label for="key" class="flex flex-col  justify-center items-center cursor-pointer space-y-2 rounded-lg min-w-[290px] min-h-[180px] bg-[#222222]">
                <p class="text-xl font-semibold">Upload Key</p>
                <img class="w-[100px] h-[100px]" src="/static/upload.svg" alt="upload logo">
            </label>
        </form>
        <div class="space-x-4">
        <button onclick="document.getElementById('key_upload').submit();" class="w-[80px] h-[35px] mb-4 text-base bg-green-700 border-green-800 border-2 rounded-md" >Submit</button>
        <button onclick="close_change_key_modal()" class="w-[80px] h-[35px] mb-4 text-base bg-gray-700 border-gray-800 border-2 rounded-md" >Cancel</button>
        
        </div>
    `;

    document.body.appendChild(modal);

}

function close_change_key_modal() {
    const modal = document.querySelector('.CHANGE_KEY_MODAL');
    if (modal) {
        modal.remove();
    }
}
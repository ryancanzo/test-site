window.onload = function(){
graphite = {};
graphite.panels = [
    {
        name: "Toolbar",
        x: 50,
        y: 100,
        width: 100,
        height: 300,
        visible: true
    },
    {
        name: "View Panel",
        x: 100,
        y: 500,
        width: 250,
        height: 400,
        visible: true
    },
    {
        name: "Element Properties",
        x: 100,
        y: 500,
        width: 250,
        height: 400,
        visible: true
    }
];

graphite.tools = [
	{
        name: "Select",
        description: "Select items on the drawing window",
        icon: "newview.svg",
        visible: true
    },
    {
        name: "Create View",
        description: "Create a new plan, section, elevation or perspective view",
        icon: "newview.svg",
        visible: true
    },
    {
        name: "Place Component",
        description: "Place doors, windows, furniture etc.",
        icon: "newview.svg"
    },
	{
        name: "Create Component",
        description: "Creates component from selection",
        icon: "newview.svg"
    },
    {
        name: "Create Sheet View",
        description: "Creates new sheet view from working view",
        icon: "newview.svg"
    },
	{
		name: "Element",
        description: "Creates new elements, 3D objects like walls, floors and roofs which have a build up of layers. Elements have a consistent thickness to ensure",
        icon: "newview.svg"
	},{
		name: "Delete",
        description: "Deletes selected items",
        icon: "newview.svg"
	},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}
];

graphite.lines = [
    {
        id: 12543,
        type: "line"
    },
];
graphite.views = [
    {
        id: 54780,
        name: "Level 0 Plan",
        type: "view",
        style: {
            renderType: "hiddenLine"
        }
    },
    {
        name: "Level 1 Plan",
        id: 6789,
        type: "view",
        style: "ambientOcclusion"
    },
    {
        name: "RCP Level 0",
        id: 6789,
        type: "view",
        style: "ambientOcclusion"
    }
];
graphite.lines = {};
graphite.materials = [
    {
        id: 1230,
        name: "Granite Herringbone",
        maps: {
            texture: "",
            bump:  "",
            displacement: "",
            reflection: "",
            hatch:  "",
            cutStyle: ""
        }
    }
];


function renderUi(){
    // Create the panel container
    var panelContainer = document.createElement("div");
    panelContainer.id = "panel-container";
    document.body.append(panelContainer);
    // Render the panels
    graphite.panels.forEach(function(panel,i){
        if (panel.visible) {
            var panelElement = document.createElement("div");
            panelElement.setAttribute("style", "top:"+panel.y+"px;left:"+panel.x+"px;width:"+panel.width+"px;height:"+panel.height+"px;");
            panelElement.setAttribute("class", "panel");
            if (panel.name == "Toolbar"){
                // Add the tool buttons
                graphite.tools.forEach(function(v,i){
                    var tool = document.createElement("div");
                    tool.setAttribute("class","tool-button panel-item");
                    var toolIcon = document.createElement("img");
                    toolIcon.setAttribute("class","tool-icon");
                    tool.append(toolIcon);
                    panelElement.append(tool);
                })
            }
            if (panel.name == "View Panel"){
                // Add the tool buttons
                graphite.views.forEach(function(view,i){
                    var listItem = document.createElement("div");
                    listItem.setAttribute("class","panel-list-item panel-item");
                    listItem.innerHTML = view.name;
                    panelElement.append(listItem);
                })
            }
            panelContainer.append(panelElement);
        }
    });
}


function renderModel(){
    
}

renderUi();
	
}
import{_ as d}from"./gallery-lazy.9238549d.js";import{a as p}from"./gallery-search.8aedb8f0.js";import{_ as u,c as m,d as f,a as h,F as x,i as v,n as g,e as y,r as C,b as $,o as l,h as b,j as w,t as I,w as T,u as B}from"./lodash.4793ee9f.js";import"./gallery-page-title.3a2b50a5.js";import"./content-script-helpers.caeeb6e9.js";import"./jquery.fca3dd19.js";import"./jszip.f74de32f.js";import"./fuse.esm.249bd5bb.js";import"./gallery-makeCoverUrl.52ce2441.js";import"./index.ff69ba6a.js";import"./howler.45f3c8a6.js";import"./tippy.0141f121.js";

const _={
  name:"aleLibrary",
  components:{},
  mixins:[],
  data:function(){
    return{
      collectionSource:"libraryJSON",
      filtersOpen:true,
      filters:{},
      pageTitle:"Library",
      pageSubTitle:null
    }
  },
  computed:{},
  methods:{
    updateListRenderingOptions:function(){
      const r=this;
      const a={
        scope:[
          {active:!0,key:"title",tippy:"Search by title",weight:5},
          {active:!0,key:"authors",tippy:"Search by authors",weight:2},
          {active:!0,key:"narrators",tippy:"Search by narrators",weight:2},
          {active:!0,key:"series",tippy:"Search by series",weight:1},
          {active:!0,key:"tags",tippy:"Search by tags",weight:1}
        ],
        filter:[
          {
            active: true,
            type: "tags",
            label: "Tags (Include/Exclude)",
            key: "tags",
            options: [],
            includeKey: "includeTags",
            excludeKey: "excludeTags",
            condition: function(book) {
              return this.include.every(tag => book.tags?.includes(tag)) &&
                     this.exclude.every(tag => !book.tags?.includes(tag));
            }
          }
        ],
        sort:[
          {active:!1,key:"randomize",label:"Randomize",type:"sortExtras",tippy:"Ignores sorting and randomizes instead unless there's an active search."},
          {type:"divider",key:"divider1"},
          {active:!0,current:!0,key:"added",label:"Added",type:"sort",tippy:'<div style="text-align: left;"><small>&#9650;</small> Old at the top <br><small style="display: inline-block; transform: rotate(180deg);">&#9650;</small> New at the top</div>'},
          {active:!0,current:!1,key:"title",label:"Title",type:"sort",tippy:"Sort by title"}
        ]
      };
      this.$setListRenderingOpts(a);
    }
  },
  mounted(){
    this.updateListRenderingOptions();
  }
};

function N(r,a,t,e,n,o){
  const s=p,i=C("gallery-search"),c=d;
  return l(),m("div",{id:"ale-library",class:"box-layout-wrapper",ref:"wrapper"},[f(s,{collectionSource:r.collectionSource,filters:r.filters,filtersOpen:r.filtersOpen},null,8,["collectionSource","filters","filtersOpen"]),h("div",{class:"page-content"},[(l(!0),m(x,null,v(r.$store.getters.collection,(S,j)=>(l(),b(c,{key:S.asin,"data-asin":S.asin,class:"single-box"},{default:w(()=>[h("h2",null,I(S.title),1),h("p",null,I(S.authors?.join(", ")),1)]),_:2},1032,["data-asin"]))),128))])],512)
}

const k=u(_,[["render",N]]);
export{k as default};

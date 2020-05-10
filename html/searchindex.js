Search.setIndex({docnames:["index","source/kfp","source/kfp.cli","source/kfp.client","source/kfp.compiler","source/kfp.components","source/kfp.components.structures","source/kfp.components.structures.kubernetes","source/kfp.containers","source/kfp.dsl","source/kfp.dsl.types","source/kfp.extensions","source/kfp.notebook","source/modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":2,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","source/kfp.rst","source/kfp.cli.rst","source/kfp.client.rst","source/kfp.compiler.rst","source/kfp.components.rst","source/kfp.components.structures.rst","source/kfp.components.structures.kubernetes.rst","source/kfp.containers.rst","source/kfp.dsl.rst","source/kfp.dsl.types.rst","source/kfp.extensions.rst","source/kfp.notebook.rst","source/modules.rst"],objects:{"":{kfp:[1,0,0,"-"]},"kfp.Client":{IN_CLUSTER_DNS_NAME:[3,2,1,""],KUBE_PROXY_PATH:[3,2,1,""],LOCAL_KFP_CONTEXT:[3,2,1,""],api_models:[3,2,1,""],create_experiment:[3,3,1,""],create_recurring_run:[3,3,1,""],create_run_from_pipeline_func:[3,3,1,""],create_run_from_pipeline_package:[3,3,1,""],delete_pipeline:[3,3,1,""],experiments:[3,2,1,""],get_experiment:[3,3,1,""],get_pipeline:[3,3,1,""],get_recurring_run:[3,3,1,""],get_run:[3,3,1,""],get_user_namespace:[3,3,1,""],jobs:[3,2,1,""],list_experiments:[3,3,1,""],list_pipelines:[3,3,1,""],list_recurring_runs:[3,3,1,""],list_runs:[3,3,1,""],pipeline_uploads:[3,2,1,""],pipelines:[3,2,1,""],run_pipeline:[3,3,1,""],runs:[3,2,1,""],set_user_namespace:[3,3,1,""],upload_pipeline:[3,3,1,""],wait_for_run_completion:[3,3,1,""]},"kfp.Client.api_models":{ApiCronSchedule:[3,3,1,""],ApiExperiment:[3,3,1,""],ApiGetTemplateResponse:[3,3,1,""],ApiJob:[3,3,1,""],ApiListExperimentsResponse:[3,3,1,""],ApiListJobsResponse:[3,3,1,""],ApiListPipelineVersionsResponse:[3,3,1,""],ApiListPipelinesResponse:[3,3,1,""],ApiListRunsResponse:[3,3,1,""],ApiParameter:[3,3,1,""],ApiPeriodicSchedule:[3,3,1,""],ApiPipeline:[3,3,1,""],ApiPipelineRuntime:[3,3,1,""],ApiPipelineSpec:[3,3,1,""],ApiPipelineVersion:[3,3,1,""],ApiReadArtifactResponse:[3,3,1,""],ApiRelationship:[3,3,1,""],ApiReportRunMetricsRequest:[3,3,1,""],ApiReportRunMetricsResponse:[3,3,1,""],ApiResourceKey:[3,3,1,""],ApiResourceReference:[3,3,1,""],ApiResourceType:[3,3,1,""],ApiRun:[3,3,1,""],ApiRunDetail:[3,3,1,""],ApiRunMetric:[3,3,1,""],ApiStatus:[3,3,1,""],ApiTrigger:[3,3,1,""],ApiUrl:[3,3,1,""],JobMode:[3,3,1,""],ProtobufAny:[3,3,1,""],ReportRunMetricsResponseReportRunMetricResult:[3,3,1,""],ReportRunMetricsResponseReportRunMetricResultStatus:[3,3,1,""],RunMetricFormat:[3,3,1,""],RunStorageState:[3,3,1,""]},"kfp.Client.experiments":{api_client:[3,3,1,""],create_experiment:[3,3,1,""],delete_experiment:[3,3,1,""],get_experiment:[3,3,1,""],list_experiment:[3,3,1,""]},"kfp.Client.jobs":{api_client:[3,3,1,""],create_job:[3,3,1,""],delete_job:[3,3,1,""],disable_job:[3,3,1,""],enable_job:[3,3,1,""],get_job:[3,3,1,""],list_jobs:[3,3,1,""]},"kfp.Client.pipeline_uploads":{api_client:[3,3,1,""],upload_pipeline:[3,3,1,""],upload_pipeline_version:[3,3,1,""]},"kfp.Client.pipelines":{api_client:[3,3,1,""],create_pipeline:[3,3,1,""],create_pipeline_version:[3,3,1,""],delete_pipeline:[3,3,1,""],delete_pipeline_version:[3,3,1,""],get_pipeline:[3,3,1,""],get_pipeline_version:[3,3,1,""],get_pipeline_version_template:[3,3,1,""],get_template:[3,3,1,""],list_pipeline_versions:[3,3,1,""],list_pipelines:[3,3,1,""]},"kfp.Client.runs":{api_client:[3,3,1,""],archive_run:[3,3,1,""],create_run:[3,3,1,""],delete_run:[3,3,1,""],get_run:[3,3,1,""],list_runs:[3,3,1,""],read_artifact:[3,3,1,""],report_run_metrics:[3,3,1,""],retry_run:[3,3,1,""],terminate_run:[3,3,1,""],unarchive_run:[3,3,1,""]},"kfp.aws":{use_aws_secret:[11,4,1,""]},"kfp.azure":{use_azure_secret:[11,4,1,""]},"kfp.cli.cli":{cli:[2,4,1,""]},"kfp.cli.diagnose_me_cli":{diagnose_me:[2,4,1,""],print_to_sdtout:[2,4,1,""]},"kfp.cli.pipeline":{"delete":[2,4,1,""],get:[2,4,1,""],list:[2,4,1,""],upload:[2,4,1,""],upload_version:[2,4,1,""]},"kfp.cli.run":{get:[2,4,1,""],list:[2,4,1,""],submit:[2,4,1,""]},"kfp.compiler":{Compiler:[4,1,1,""],VersionedDependency:[4,1,1,""],build_docker_image:[4,4,1,""],build_python_component:[4,4,1,""]},"kfp.compiler.Compiler":{compile:[4,3,1,""],create_workflow:[4,3,1,""],get_arguments_for_sub_group:[4,3,1,""]},"kfp.compiler.VersionedDependency":{has_max_version:[4,3,1,""],has_min_version:[4,3,1,""],has_versions:[4,3,1,""],max_version:[4,3,1,""],min_version:[4,3,1,""],name:[4,3,1,""]},"kfp.components":{ComponentStore:[5,1,1,""],InputBinaryFile:[5,1,1,""],InputPath:[5,1,1,""],InputTextFile:[5,1,1,""],OutputBinaryFile:[5,1,1,""],OutputPath:[5,1,1,""],OutputTextFile:[5,1,1,""],create_component_from_airflow_op:[5,4,1,""],create_component_from_func:[5,4,1,""],create_graph_component_from_pipeline_func:[5,4,1,""],func_to_component_text:[5,4,1,""],func_to_container_op:[5,4,1,""],get_default_base_image:[5,4,1,""],load_component:[5,4,1,""],load_component_from_file:[5,4,1,""],load_component_from_text:[5,4,1,""],load_component_from_url:[5,4,1,""],set_default_base_image:[5,4,1,""],structures:[6,0,0,"-"]},"kfp.components.ComponentStore":{default_store:[5,2,1,""],load_component:[5,3,1,""],load_component_from_file:[5,3,1,""],load_component_from_url:[5,3,1,""]},"kfp.components.structures":{AndPredicate:[6,1,1,""],CachingStrategySpec:[6,1,1,""],ComponentReference:[6,1,1,""],ComponentSpec:[6,1,1,""],ConcatPlaceholder:[6,1,1,""],ContainerImplementation:[6,1,1,""],ContainerSpec:[6,1,1,""],EqualsPredicate:[6,1,1,""],ExecutionOptionsSpec:[6,1,1,""],GraphImplementation:[6,1,1,""],GraphInputArgument:[6,1,1,""],GraphInputReference:[6,1,1,""],GraphSpec:[6,1,1,""],GreaterThanOrEqualPredicate:[6,1,1,""],GreaterThanPredicate:[6,1,1,""],IfPlaceholder:[6,1,1,""],IfPlaceholderStructure:[6,1,1,""],InputPathPlaceholder:[6,1,1,""],InputSpec:[6,1,1,""],InputValuePlaceholder:[6,1,1,""],IsPresentPlaceholder:[6,1,1,""],LessThenOrEqualPredicate:[6,1,1,""],LessThenPredicate:[6,1,1,""],NotEqualsPredicate:[6,1,1,""],NotPredicate:[6,1,1,""],OrPredicate:[6,1,1,""],OutputPathPlaceholder:[6,1,1,""],OutputSpec:[6,1,1,""],PipelineRunSpec:[6,1,1,""],RetryStrategySpec:[6,1,1,""],TaskOutputArgument:[6,1,1,""],TaskOutputReference:[6,1,1,""],TaskSpec:[6,1,1,""]},"kfp.components.structures.ComponentSpec":{save:[6,3,1,""]},"kfp.components.structures.GraphInputReference":{as_argument:[6,3,1,""],with_type:[6,3,1,""],without_type:[6,3,1,""]},"kfp.components.structures.TaskOutputArgument":{construct:[6,3,1,""],with_type:[6,3,1,""],without_type:[6,3,1,""]},"kfp.components.structures.TaskOutputReference":{with_type:[6,3,1,""],without_type:[6,3,1,""]},"kfp.components.structures.kubernetes":{v1:[7,0,0,"-"]},"kfp.components.structures.kubernetes.v1":{Container:[7,1,1,""],PodArgoSubset:[7,1,1,""]},"kfp.containers":{ContainerBuilder:[8,1,1,""],build_image_from_working_dir:[8,4,1,""]},"kfp.containers.ContainerBuilder":{build:[8,3,1,""]},"kfp.dsl":{Condition:[9,1,1,""],ContainerOp:[9,1,1,""],ExitHandler:[9,1,1,""],InputArgumentPath:[9,1,1,""],ParallelFor:[9,1,1,""],PipelineConf:[9,1,1,""],PipelineParam:[9,1,1,""],PipelineVolume:[9,1,1,""],ResourceOp:[9,1,1,""],Sidecar:[9,1,1,""],UserContainer:[9,1,1,""],VolumeOp:[9,1,1,""],VolumeSnapshotOp:[9,1,1,""],component:[9,4,1,""],get_pipeline_conf:[9,4,1,""],graph_component:[9,4,1,""],pipeline:[9,4,1,""],python_component:[9,4,1,""],types:[10,0,0,"-"]},"kfp.dsl.ContainerOp":{add_pvolumes:[9,3,1,""],arguments:[9,3,1,""],command:[9,3,1,""],container:[9,3,1,""],env_variables:[9,3,1,""],image:[9,3,1,""]},"kfp.dsl.ParallelFor":{TYPE_NAME:[9,2,1,""]},"kfp.dsl.PipelineConf":{add_op_transformer:[9,3,1,""],set_default_pod_node_selector:[9,3,1,""],set_image_pull_policy:[9,3,1,""],set_image_pull_secrets:[9,3,1,""],set_parallelism:[9,3,1,""],set_timeout:[9,3,1,""],set_ttl_seconds_after_finished:[9,3,1,""]},"kfp.dsl.PipelineParam":{full_name:[9,3,1,""],ignore_type:[9,3,1,""],to_struct:[9,3,1,""]},"kfp.dsl.PipelineVolume":{after:[9,3,1,""]},"kfp.dsl.ResourceOp":{"delete":[9,3,1,""],resource:[9,3,1,""]},"kfp.dsl.UserContainer":{attribute_map:[9,2,1,""],inputs:[9,3,1,""],set_mirror_volume_mounts:[9,3,1,""],swagger_types:[9,2,1,""]},"kfp.dsl.types":{BaseType:[10,1,1,""],Bool:[10,1,1,""],Dict:[10,1,1,""],Float:[10,1,1,""],GCPProjectID:[10,1,1,""],GCPRegion:[10,1,1,""],GCRPath:[10,1,1,""],GCSPath:[10,1,1,""],InconsistentTypeException:[10,5,1,""],InconsistentTypeWarning:[10,5,1,""],Integer:[10,1,1,""],List:[10,1,1,""],LocalPath:[10,1,1,""],String:[10,1,1,""],check_types:[10,4,1,""],verify_type_compatibility:[10,4,1,""]},"kfp.dsl.types.BaseType":{to_dict:[10,3,1,""]},"kfp.gcp":{add_gpu_toleration:[11,4,1,""],use_gcp_secret:[11,4,1,""],use_preemptible_nodepool:[11,4,1,""],use_tpu:[11,4,1,""]},"kfp.onprem":{mount_pvc:[11,4,1,""]},kfp:{Client:[3,1,1,""],aws:[11,0,0,"-"],azure:[11,0,0,"-"],compiler:[4,0,0,"-"],components:[5,0,0,"-"],containers:[8,0,0,"-"],dsl:[9,0,0,"-"],gcp:[11,0,0,"-"],notebook:[12,0,0,"-"],onprem:[11,0,0,"-"],run_pipeline_func_on_cluster:[1,4,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","attribute","Python attribute"],"3":["py","method","Python method"],"4":["py","function","Python function"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:class","2":"py:attribute","3":"py:method","4":"py:function","5":"py:exception"},terms:{"10a7f95435c0b94a6d949ba98375f8cc85a70e5a":9,"32mb":3,"793c":8,"86c1":8,"boolean":[6,9],"case":9,"catch":3,"class":[0,1,4,5,6,7,8,9,10,13],"default":[3,4,5,6,8,9,11],"final":4,"float":[5,6,9,10],"function":[1,3,4,5,6,8,9,11],"import":[3,5,9],"int":[3,4,5,6,8,9,11],"new":[2,3,6,8],"return":[3,4,5,8,9],"static":[6,9],"throw":3,"true":[2,3,4,9,11],"while":3,AWS:11,And:9,For:[3,5,8,9,10,11],GCS:4,The:[3,4,5,6,8,9,10,11],There:2,These:5,Use:[4,5],Used:6,With:11,__module__:5,_client:[1,3],_component_stor:5,_container_build:8,_container_op:[4,9],_ops_group:[4,9],_pipelin:[1,3,4],_pipeline_param:[4,9],_resource_op:9,_structur:6,about:[2,8],accept:[3,5],access:[3,5,11],account:[8,11],accuraci:5,across:[3,11],action:9,activ:3,actual:[5,9],add:[1,3,5,9],add_env_vari:9,add_gpu_toler:11,add_initcontain:9,add_multiply_op:5,add_multiply_task:5,add_multiply_two_numb:5,add_op:5,add_op_transform:9,add_pvolum:9,add_sidecar:9,add_task:5,addit:[5,9,11],admin:9,after:[5,9],afterward:3,airflow:5,algorithm:5,all:[3,5,8,9,10],allow_telemetri:4,along:11,alpha:9,alpin:9,also:[5,6,9],altern:[5,11],alwai:9,andpred:6,ani:[4,9],annot:[5,6,9],anonym:5,anoth:[5,6],apach:5,api:[3,9,11],api_cli:3,api_model:[0,1,13],apicronschedul:3,apiexperi:3,apigettemplaterespons:3,apijob:3,apilistexperimentsrespons:3,apilistjobsrespons:3,apilistpipelinesrespons:3,apilistpipelineversionsrespons:3,apilistrunsrespons:3,apiparamet:3,apiperiodicschedul:3,apipipelin:3,apipipelineruntim:3,apipipelinespec:3,apipipelinevers:3,apireadartifactrespons:3,apirelationship:3,apireportrunmetricsrequest:3,apireportrunmetricsrespons:3,apiresourcekei:3,apiresourcerefer:3,apiresourcetyp:3,apirun:3,apirundetail:3,apirunmetr:3,apistatu:3,apitrigg:3,apiurl:3,apivers:11,appear:9,append:4,appli:[6,9,11],applic:3,arbitrari:5,archiv:3,archive_run:3,arg:[2,4,6,7,9],argo:9,argoproj:9,argument:[1,3,5,6,8,9,10],artifact:[3,5,9,10],artifact_argument_path:9,artifact_nam:3,as_argu:6,asc:3,ascend:3,associ:3,async_req:3,asynchron:3,attach:4,attribut:[5,9,10],attribute_map:9,attribute_output:9,authent:11,author:[3,5],auto:3,automat:4,avoid:3,awesom:9,aws:[0,1,13],aws_access_key_id:11,aws_access_key_id_nam:11,aws_secret_access_kei:11,aws_secret_access_key_nam:11,azcr:11,azur:[0,1,13],back:5,backend:[3,6],backfil:3,bar:9,base64_your_aws_access_key_id:11,base64_your_aws_secret_access_kei:11,base:[3,4,5,6,7,8,9,10],base_imag:[4,5,8,9],baseop:[4,9],basetyp:10,bashoper:5,befor:5,behind:3,belong:3,better:[5,11],between:[3,5,9],bigger:5,binari:5,binarypred:6,bind:9,blob:[3,4,9],bodi:3,bool:[2,3,4,5,6,7,9,10,11],both:[3,9],branch:5,buffer:3,build:[3,4,8],build_compon:4,build_docker_imag:4,build_image_from_working_dir:[4,8],build_python_compon:4,builder:8,busybox:9,bytesio:5,cach:9,caching_strategi:[6,9],cachingstrategyspec:6,call:[1,3,5,9],callabl:[1,3,4,5],caller:6,can:[1,3,4,5,6,8,9,11],captur:[5,8],care:9,catboost:5,catboost_train_classifi:5,catboostmodel:5,catchup:3,caus:4,chang:[3,5,6],check:[4,5,9,10,11],check_typ:10,checked_typ:10,choos:4,claim:11,classif:5,cli:[0,1,13],client:[0,1,9,11,13],client_id:3,cloud:[6,8,11],cluster:[1,3,8,9,11],code:[0,3,5],code_source_url:3,codegen:3,collect:9,com:[0,3,6,9,11],come:[6,9],command:[0,1,3,5,6,7,9,13],commun:3,comparison:6,compat:[8,10],compil:[0,1,3,9,13],complet:3,compon:[0,1,3,4,9,10,13],componen:5,component_func:4,component_ref:6,component_spec:5,componentrefer:6,componentspec:6,componentstor:5,compos:[1,3],comput:5,concaten:6,concatplacehold:6,cond:6,condit:[5,6,9],config:3,configur:[1,3,4,6,8,9,11],conflict:4,connect:[5,6],consist:[5,10],constraint:[9,11],construct:[5,6],constructor:5,consum:5,contain:[0,1,3,4,5,6,7,9,10,11,13],container_kwarg:9,containerbuidl:8,containerbuild:8,containerimplement:6,containerop:[4,5,9],containerport:7,containerspec:6,containop:9,content:0,context:[3,8],continu:3,convers:5,convert:5,cooki:3,copi:8,core:11,correspond:5,could:10,cpu:8,creat:[1,3,4,5,8,9,11],create_component_from_airflow_op:5,create_component_from_func:5,create_experi:3,create_graph_component_from_pipeline_func:5,create_job:3,create_pipelin:3,create_pipeline_vers:3,create_recurring_run:3,create_run:3,create_run_from_pipeline_func:3,create_run_from_pipeline_packag:3,create_workflow:4,created_at:3,creation:5,credenti:11,cron:3,cron_express:3,csv:5,current:[4,5,8,9],custom:[5,8],daemon:9,data:[3,5,6,8,11],data_sourc:9,decid:8,declar:[5,10],decor:[4,5,9],deep:8,def:[4,5,9],default_base_image_or_build:5,default_image_nam:8,default_stor:5,default_vers:3,defin:[5,9],definit:[5,6,9],delet:[2,3,9],delete_experi:3,delete_job:3,delete_pipelin:3,delete_pipeline_vers:3,delete_run:3,delimit:2,depend:[4,5,6,8,9],dependeci:[5,9],dependencyvers:4,dependenic:9,deploy:[3,11],deprec:[4,5,9],des:3,describ:[1,3,6,10],descript:[3,4,5,6,9],desir:1,detail:[2,3,8,9,11],diagnose_m:[0,1,13],diagnose_me_cli:2,diagnost:2,dict:[1,2,3,4,6,9,10],dictionari:[2,3,9,10],differ:8,digest:[5,6,8],dind:9,directori:8,disabl:3,disable_job:3,displai:2,doc:[0,8,9,11],docker:[4,5,9],docker_filenam:8,dockerfil:[4,8],dockerfile_path:4,docstr:5,document:0,doe:[9,10],doesn:11,download:5,downstream:[5,10],dsl:[0,1,3,4,5,13],dummynam:5,duplic:[3,9],dure:5,e501:3,each:[3,9,10],echo:9,edit:3,editor:8,effect:11,either:[3,4,6],elig:9,else_valu:6,emailoper:5,emb:5,embed:5,embed_component_spec:5,empti:[3,4],enabl:[1,3,4,9,11],enable_job:3,encod:3,end:3,end_tim:3,engin:11,env:[6,7,9],env_from:9,env_vari:9,envfrom:9,environ:[2,5],envvar:7,equal:[6,11],equalspred:6,error:3,error_message_prefix:10,etc:11,everi:5,exampl:[3,4,5,9,11],example_pipelin:9,except:[3,10],exclud:9,execut:[1,2,3,5,9],execution_opt:[6,9],executionoptionsspec:6,executorrespons:2,exist:9,existing_token:3,exit:[5,9],exit_op:9,exithandl:9,expand:6,expect:[5,10],expected_typ:10,experi:[0,1,13],experiment:5,experiment_id:3,experiment_nam:[1,3],expos:[2,9],express:[3,8],extend:9,extens:[0,1,13],extent:9,extra:5,extra_cod:5,factori:5,fail:3,failur:3,failure_condit:9,fals:[2,3,4,5,6,9,11],featur:[2,5,9],field:[3,9],field_nam:3,file:[3,4,5,6,8,9],file_filter_r:8,file_output:[6,9],file_path:6,filenam:[3,5],filesystem:9,filter:3,find:3,finish:9,finished_at:3,first:3,flag:9,flip_a:9,flip_compon:9,flip_result:9,flipcoinop:9,follow:[3,5,8,9],foo:9,foo_pipelin:9,foobar:9,for_loop:9,form:5,format:[2,3,9],found:[3,9],from:[3,4,5,6,8,9,10],full:[4,8],full_nam:9,func:[5,9],func_to_component_text:5,func_to_container_op:[4,5],futur:[3,5,9],garbag:9,gcp:[0,1,10,13],gcpprojectid:10,gcpregion:10,gcr:[4,8],gcrpath:10,gcs_stage:8,gcspath:10,gener:[3,8],get:[1,2,3],get_arguments_for_sub_group:4,get_default_base_imag:5,get_experi:3,get_job:3,get_pipelin:3,get_pipeline_conf:9,get_pipeline_vers:3,get_pipeline_version_templ:3,get_recurring_run:3,get_run:3,get_templ:3,get_user_namespac:3,github:[0,3,9],given:[4,5,10],given_typ:10,gke:[4,11],googl:[6,8,11],gpu:11,graph:[1,3,5,6,9],graph_compon:9,graph_input:6,graphimplement:6,graphinputargu:6,graphinputrefer:6,graphspec:6,greater:6,greaterthanorequalpred:6,greaterthanpred:6,group:[5,9],handl:3,handler:9,hard:11,hard_constraint:11,has:[3,5,6,9,11],has_max_vers:4,has_min_vers:4,has_vers:4,hash:[5,8],have:[5,9],head:9,header:3,header_nam:3,header_valu:3,hello:9,help:8,host:[3,9],how:[3,8],howev:10,http:[0,3,8,9,11],human:[2,9],human_read:2,identifi:3,if_structur:6,ifnotpres:9,ifplacehold:6,ifplaceholderstructur:6,ignor:[3,9],ignore_typ:9,imag:[1,4,5,6,7,8,9],image_nam:8,image_or_factori:5,image_pull_polici:[7,9],image_pull_secret:9,imagepullpolici:9,imagepullsecret:9,immediate_value_pipelin:9,implement:[3,6,9],in_cluster_dns_nam:3,includ:[3,4,8,9],inconsistencytypeexcept:10,inconsistenttypeexcept:10,inconsistenttypewarn:10,index:0,indic:3,individu:5,infinit:9,info:9,inform:[2,3,6,9],inherit:9,init:9,init_contain:9,initcontain:9,initi:[3,5],input:[3,4,5,6,9,10],input_nam:6,inputargumentpath:9,inputbinaryfil:5,inputpath:5,inputpathplacehold:6,inputspec:6,inputtextfil:5,inputvalueplacehold:6,insid:[3,9],instal:[5,8,9],instanc:[1,4,5,8,10],instead:[4,5],integ:[3,5,10],interfac:[0,1,6,13],intermedi:9,intern:3,interv:3,interval_second:3,invari:3,invok:[4,9],involv:9,is_en:6,is_exit_handl:9,is_recursive_subgroup:4,ispresentplacehold:6,issu:[9,10],item:[6,9],its:[3,5,6,9],itself:[3,9],jeffreymclarti:3,job:[0,1,4,13],job_id:3,job_nam:3,jobmod:3,joburi:5,json:[3,5,9],just:5,k8s:[4,9],k8s_resourc:9,kaniko:4,kei:[2,3,9,11],kfp:0,kfp_client:1,kind:[5,11],kube_proxy_path:3,kubeflow:[3,8,9,11],kubernet:[1,3,4,5,6,9,11],kubernetes_opt:6,kubernetesexecutionoptionsspec:6,kwarg:[2,3,9],label:[4,6,9,11],label_nam:9,lack:5,later:6,latest:[3,9],learn:8,leav:3,less:6,lessthenorequalpred:6,lessthenpred:6,let:9,level:[1,4,9],librari:3,lifecycl:[7,9],lightweight:5,like:5,line:[2,5,6],list:[2,3,4,5,6,7,9,10],list_experi:3,list_job:3,list_pipelin:3,list_pipeline_vers:3,list_recurring_run:3,list_run:3,liveness_prob:[7,9],livenessprob:9,load:[5,6],load_compon:[5,6],load_component_from_fil:5,load_component_from_text:5,load_component_from_uri:5,load_component_from_url:5,local:[3,4,5,6,8,9],local_dir:8,local_kfp_context:3,local_search_path:5,localpath:10,locat:[5,6],logic:6,loop:[5,9],loop_arg:9,mai:[4,8,9],main:[0,9],make:[3,5],mani:3,manipul:5,manual:[3,5,11],map:[1,3,5,6],marketplac:8,master:[3,5,9],match:5,max:9,max_cache_stal:[6,9],max_concurr:3,max_num_pod:9,max_retri:6,max_vers:4,maximum:3,mean:5,merge_strategi:9,messag:3,metadata:[3,4,6,7,9,11],metadataspec:6,metagcpprojectid:10,method:3,metric:3,metric_node_id:3,min_vers:4,mirror_volume_mount:9,mirrorvolumemount:9,mismatch:5,miss:3,mlstep:9,mnt:11,mode:[3,9],model:[3,5,9,11],modelbas:[6,7],modifi:11,modul:[0,1,5,6,9,13],modules_to_captur:5,more:[3,8,9,10,11],most:3,mount:[9,11],mount_pvc:11,mountpath:9,multi:3,multipl:5,must:[5,9],my_compon:9,my_pipelin:[4,9],name:[1,2,3,4,5,6,7,8,9,11],namedtupl:5,namespac:[3,4,8],necessari:8,need:[5,8,9],neither:4,never:9,next:3,next_page_token:3,nginx:9,no_catchup:3,node:[3,9,11],node_id:3,nodepool:11,nodeselector:9,none:[1,3,4,5,6,7,8,9,11],noqa:3,nor:4,noschedul:11,note:[3,9],notebook:[0,1,8,13],notequalspred:6,notpred:6,number:[9,11],number_of_tre:5,number_valu:3,nvidia:11,object:[3,4,5,6,8,9,10],objectmetaargosubset:7,off:3,omit:8,onc:[5,9],one:[3,5,9],onli:[3,5],onlin:6,onprem:[0,1,13],op1:9,op2:9,op_class:5,op_nam:9,op_transform:9,opaqu:11,openapi:9,oper:[5,6,9,11],operand:6,oppos:5,ops:[9,11],ops_group:9,opsgroup:[4,9],option:[1,3,4,5,6,7,8,9],order:9,ordereddict:5,org:[0,8,11],origin:5,orpred:6,other:[1,3,4,5,6],other_client_id:3,other_client_secret:3,otherwis:[3,5],out:8,output:[4,5,6,9,10],output_artifact_path:9,output_component_fil:5,output_nam:6,output_valu:6,outputbinaryfil:5,outputpath:5,outputpathplacehold:6,outputspec:6,outputtextfil:5,over:9,overrid:4,overridden:8,overview:8,own:3,p0d:9,packag:[0,2,3,13],package_path:4,package_url:3,packages_to_instal:5,page:3,page_s:3,page_token:3,pair:9,panda:5,parallel:[3,9],parallelfor:9,param1:9,param:[3,4,9,10],param_typ:9,paramet:[1,2,3,4,5,8,9,11],parameter:9,params_list:4,parent:[3,9],part:11,partial:[3,9],pass:[3,4,5,6,8,9,10],path:[3,4,5,6,8,9],pattern:9,paus:3,period:3,periodic_schedul:3,permiss:11,pickl:5,pip:5,pipelin:[1,4,5,6,8,9,11,13],pipeline1:5,pipeline_conf:[1,3,4],pipeline_descript:4,pipeline_fil:3,pipeline_func:[1,3,4,5],pipeline_id:3,pipeline_manifest:3,pipeline_nam:[3,4],pipeline_package_path:3,pipeline_param_1:5,pipeline_runtim:3,pipeline_spec:3,pipeline_upload:[0,1,13],pipelineconf:[1,3,4,9],pipelineid:3,pipelineparam:[4,9],pipelinerunspec:6,pipelinevers:3,pipelinevolum:9,piplein:3,pizza:9,place:8,placehold:6,plai:9,pleas:[3,9],pod:[4,9,11],podargosubset:7,podspecargosubset:7,point:6,polici:9,port:[7,9],precend:3,precis:5,predic:6,preemptibl:11,prefix:5,prepar:5,present:8,previous:3,princip:11,print:[2,9],print_flip:9,print_to_sdtout:2,printop:9,probe:7,processor:5,processor_op:5,processor_task:5,produc:5,producer_op:5,producer_task:5,product:5,program:[3,6],project:10,proper:[9,11],properti:[4,9],proto:3,protobufani:3,protocol:3,provid:[1,3],proxi:3,publish:5,pull:[1,4,9],pull_image_polici:9,push:[4,8],pvc:9,pvc_name:11,pvolum:9,py3:[5,9],python2:4,python3:[4,5],python:[4,5,8,9,10],python_compon:[4,9],python_vers:4,rais:[4,10],random:4,rang:11,read:5,read_artifact:3,readabl:[2,9],readi:3,readiness_prob:[7,9],readinessprob:9,realli:9,recal:5,recent:2,recommend:3,recur:3,recurring_run:3,recurs:[8,9],redefin:9,redi:9,redund:9,ref:3,refer:[3,5,6,8],referenc:5,regular:8,rel:8,relationship:3,replac:6,repo:8,report:3,report_run_metr:3,reportrunmetr:3,reportrunmetricsresponsereportrunmetricresult:3,reportrunmetricsresponsereportrunmetricresultstatu:3,repres:[3,5,6,9],represent:5,reproduc:5,request:3,requir:[3,5,8,9,11],resolv:6,resourc:[3,7,9,11],resource_key_id:3,resource_key_typ:3,resource_nam:9,resource_refer:3,resource_reference_key_id:3,resource_reference_key_typ:3,resourceop:[5,9],resourcerefer:3,resourcerequir:7,respons:[2,3],restart:3,restor:3,result:[2,3,5],retriev:3,retry_run:3,retry_strategi:6,retrystrategyspec:6,reus:11,rfc3339:3,root:8,root_task:6,rtype:3,run:[0,1,4,5,6,9,13],run_id:3,run_nam:[1,3],run_pipelin:3,run_pipeline_func_on_clust:1,runmetricformat:3,runstoragest:3,runtim:5,same:[5,9,10],save:[5,6],scalar:10,scan:[5,8],schedul:[3,11],scheduled_at:3,scope:6,sdk:[4,8],search:5,sec:4,second:[3,4,8,9],secret:[1,4,11],secret_file_path_in_volum:11,secret_nam:11,secret_volume_mount_path:11,security_context:[7,9],securitycontext:[7,9],see:[3,9],seem:9,self:[5,9],sensit:5,sent:6,separ:[3,5],serial:[3,5,9,10],server:3,servic:[2,3,8,11],service_account:8,set:[2,3,4,5,8,9],set_default_base_imag:5,set_default_pod_node_selector:9,set_image_pull_polici:9,set_image_pull_secret:9,set_mirror_volume_mount:9,set_parallel:9,set_timeout:9,set_ttl_seconds_after_finish:9,set_user_namespac:3,setup:11,sha256:[5,8],share:[5,6,9],should:[3,5,6,8,9],show:9,shown:[1,3],sidecar:9,signatur:[4,5],simplifi:11,sinc:[4,5,9],singl:[3,5,6],size:[3,9],small:5,snapshot_class:9,some:[5,6,9],sort_bi:3,sourc:[0,1,2,3,4,5,6,7,8,9,10,11],space:3,spawn:4,spec:[4,5,6,7,9,11],specif:[3,4,5,6],specifi:[1,2,3,4,5,6,8,9],staging_gcs_path:4,standalon:8,start:[3,5,6,8],start_tim:3,state:5,statu:3,stdin:[7,9],stdin_onc:[7,9],stdinonc:9,stdout:2,step:9,stop:3,storag:5,storage_class:9,storage_st:3,store:[4,8,9,11],str:[1,2,3,4,5,6,7,8,9,10,11],stream:5,strict:5,string:[3,5,9,10],strongli:5,struct:[0,1,13],structur:[0,1,13],style:4,sub_group:4,subgroup:5,submissio:6,submit:[1,2,3],subpackag:[0,1,13],success_condit:9,sum:5,sum_output_ref:5,suppli:6,support:[3,5,11],svc:3,swagger:[3,9],swagger_typ:9,synchron:3,syntax:5,system:[5,9],tag:[5,6,8,9],take:[3,9],taken:5,tar:[3,4],target:4,target_component_fil:[4,9],target_imag:[4,8],task2:5,task:[5,6],task_id:6,task_output:6,taskoutputargu:6,taskoutputrefer:6,taskspec:6,tell:5,templat:[3,9],temporari:4,tensorflow:[5,8,9,11],termin:3,terminate_run:3,termination_message_path:[7,9],termination_message_polici:[7,9],terminationmessagepath:9,terminationmessagepolici:9,text:5,textiowrapp:5,textual:5,tf_version:11,tfmodel:9,tgz:3,than:[3,6],thei:9,them:[1,3,5],then_valu:6,thi:[1,3,4,5,8,9,11],thread:3,through:[2,5],time:[3,6,8,9],timeout:[3,4,8,9],to_dict:10,to_struct:9,token:3,toler:11,toleration_second:11,total:9,total_s:3,tpu:11,tpu_cor:11,tpu_resourc:11,train:[5,11],train_op:11,trained_model_path:5,training_data_path:5,transact:3,transform:[1,4,9],translat:9,travers:5,tricki:9,trigger:3,ttl:9,tty:[7,9],tupl:4,turn:3,twice:9,two:[3,4,5,10],twobooleanoperand:6,twooperand:6,txt:8,type:[0,1,3,4,5,6,8,9,11,13],type_check:4,type_nam:9,type_spec:6,unarchive_run:3,under:2,underli:4,union:[4,5,6,9,10],uniqu:[3,9],updat:9,updated_at:3,upload:[2,3,5],upload_pipelin:3,upload_pipeline_vers:3,upload_vers:2,uploadfil:3,upon:[3,4,9],upstream:[6,10],uri:[4,5],url:[3,5,6],url_search_prefix:5,usag:[4,9,11],use:[3,4,5,8,9,11],use_aws_secret:11,use_azure_secret:11,use_code_pickl:5,use_gcp_secret:11,use_preemptible_nodepool:11,use_tpu:11,used:[3,5,6,8,9],useful:9,user:[3,5,8,9,11],usercontain:9,uses:[5,8],using:[3,5,6,8,11],usual:[3,5],util:2,v1_toler:11,v1_volum:9,v1alpha1:9,v1contain:9,v1containerport:9,v1envfromsourc:9,v1envvar:9,v1lifecycl:9,v1localobjectrefer:9,v1probe:9,v1resourcerequir:9,v1secretkeyselector:9,v1securitycontext:9,v1toler:11,v1volum:9,v1volumedevic:9,v1volumemount:9,val:2,valu:[3,4,5,6,9,10,11],valueerror:4,variabl:5,variable_output_nam:5,varieti:2,verifi:10,verify_type_compat:10,version:[2,3,4,5,6,8,9,11],version_id:3,versioneddepend:4,viewer:2,visual:2,volum:[9,11],volume_devic:[7,9],volume_mount:[7,9],volume_mount_path:11,volume_nam:[9,11],volumedevic:[7,9],volumemount:[7,9],volumeop:9,volumesnapshot:9,volumesnapshotop:9,wait:3,wait_for_run_complet:3,want:5,warn:10,wasn:3,when:[3,5,8,9,10],where:[3,4,5,6,8],whether:[3,4,5,6],which:[4,8,9],win:3,with_typ:6,within:4,without_typ:6,work:8,workaround:5,workflow:[4,9],workflow_manifest:3,working_dir:[7,8,9],workingdir:9,world:9,would:9,write:[5,6],written:[5,9],www:[0,8,11],xcom:5,xcom_output_nam:5,yaml:[3,4,5,9],yml:3,you:[3,5,8,9],your:[3,8,9],zip:3},titles:["Welcome to Kubeflow Pipelines SDK API reference","kfp package","kfp.cli interface","kfp.Client class","kfp.compiler package","kfp.components package","kfp.components.structures package","kfp.components.structures.kubernetes package","kfp.containers package","kfp.dsl package","kfp.dsl.types module","KFP extension modules","kfp.notebook package","kfp"],titleterms:{"class":3,api:0,api_model:3,aws:11,azur:11,cli:2,client:3,command:2,compil:4,compon:[5,6,7],contain:8,diagnose_m:2,dsl:[9,10],experi:3,extens:11,gcp:11,interfac:2,job:3,kfp:[1,2,3,4,5,6,7,8,9,10,11,12,13],kubeflow:0,kubernet:7,modul:[7,10,11],notebook:12,onprem:11,packag:[1,4,5,6,7,8,9,12],pipelin:[0,2,3],pipeline_upload:3,refer:0,run:[2,3],sdk:0,struct:3,structur:[5,6,7],subpackag:5,type:10,welcom:0}})
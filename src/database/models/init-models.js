import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _AssistantCategories from  "./assistant_categories.js";
import _AssistantCategorySections from  "./assistant_category_sections.js";
import _AssistantJobs from  "./assistant_jobs.js";
import _AssistantTools from  "./assistant_tools.js";
import _Assistants from  "./assistants.js";
import _AssistantsProfileToolSections from  "./assistants_profile_tool_sections.js";
import _AssistantsProfileTools from  "./assistants_profile_tools.js";
import _AssistantsProfiles from  "./assistants_profiles.js";
import _BgwJob from  "./bgw_job.js";
import _BgwJobStat from  "./bgw_job_stat.js";
import _BgwPolicyChunkStats from  "./bgw_policy_chunk_stats.js";
import _CaCategories from  "./ca_categories.js";
import _CaCategorySections from  "./ca_category_sections.js";
import _CaJobDays from  "./ca_job_days.js";
import _Categories from  "./categories.js";
import _Chats from  "./chats.js";
import _Chunk from  "./chunk.js";
import _ChunkConstraint from  "./chunk_constraint.js";
import _ChunkCopyOperation from  "./chunk_copy_operation.js";
import _ChunkDataNode from  "./chunk_data_node.js";
import _ChunkIndex from  "./chunk_index.js";
import _ClientAssistantStatuses from  "./client_assistant_statuses.js";
import _ClientJobs from  "./client_jobs.js";
import _Clients from  "./clients.js";
import _ClientsProfiles from  "./clients_profiles.js";
import _CompressionAlgorithm from  "./compression_algorithm.js";
import _CompressionChunkSize from  "./compression_chunk_size.js";
import _ContinuousAgg from  "./continuous_agg.js";
import _ContinuousAggsBucketFunction from  "./continuous_aggs_bucket_function.js";
import _ContinuousAggsHypertableInvalidationLog from  "./continuous_aggs_hypertable_invalidation_log.js";
import _ContinuousAggsInvalidationThreshold from  "./continuous_aggs_invalidation_threshold.js";
import _ContinuousAggsMaterializationInvalidationLog from  "./continuous_aggs_materialization_invalidation_log.js";
import _CustomerCategories from  "./customer_categories.js";
import _CustomerCategoryPoints from  "./customer_category_points.js";
import _CustomerCategorySections from  "./customer_category_sections.js";
import _CustomerProfileTasks from  "./customer_profile_tasks.js";
import _CustomerTaskMessages from  "./customer_task_messages.js";
import _CustomersAssistants from  "./customers_assistants.js";
import _Dimension from  "./dimension.js";
import _DimensionSlice from  "./dimension_slice.js";
import _ExpertProductCases from  "./expert_product_cases.js";
import _ExpertProductItems from  "./expert_product_items.js";
import _ExpertProductStatuses from  "./expert_product_statuses.js";
import _ExpertProducts from  "./expert_products.js";
import _Experts from  "./experts.js";
import _FailedJobs from  "./failed_jobs.js";
import _Files from  "./files.js";
import _Hypertable from  "./hypertable.js";
import _HypertableCompression from  "./hypertable_compression.js";
import _HypertableDataNode from  "./hypertable_data_node.js";
import _JobTransactions from  "./job_transactions.js";
import _MessageRoles from  "./message_roles.js";
import _Metadata from  "./metadata.js";
import _Migrations from  "./migrations.js";
import _PasswordResets from  "./password_resets.js";
import _PersonalAccessTokens from  "./personal_access_tokens.js";
import _ProductTypes from  "./product_types.js";
import _RemoteTxn from  "./remote_txn.js";
import _States from  "./states.js";
import _Statuses from  "./statuses.js";
import _SubscriptionTypes from  "./subscription_types.js";
import _Subscriptions from  "./subscriptions.js";
import _Tablespace from  "./tablespace.js";
import _TaskManagerSections from  "./task_manager_sections.js";
import _TaskMessageTypes from  "./task_message_types.js";
import _TaskMessages from  "./task_messages.js";
import _Tasks from  "./tasks.js";
import _TimerTypes from  "./timer_types.js";
import _Timers from  "./timers.js";
import _TmSectionItems from  "./tm_section_items.js";
import _TransactionTypes from  "./transaction_types.js";
import _Transactions from  "./transactions.js";
import _UserRoles from  "./user_roles.js";
import _Users from  "./users.js";

export default function initModels(sequelize) {
  const AssistantCategories = _AssistantCategories.init(sequelize, DataTypes);
  const AssistantCategorySections = _AssistantCategorySections.init(sequelize, DataTypes);
  const AssistantJobs = _AssistantJobs.init(sequelize, DataTypes);
  const AssistantTools = _AssistantTools.init(sequelize, DataTypes);
  const Assistants = _Assistants.init(sequelize, DataTypes);
  const AssistantsProfileToolSections = _AssistantsProfileToolSections.init(sequelize, DataTypes);
  const AssistantsProfileTools = _AssistantsProfileTools.init(sequelize, DataTypes);
  const AssistantsProfiles = _AssistantsProfiles.init(sequelize, DataTypes);
  const BgwJob = _BgwJob.init(sequelize, DataTypes);
  const BgwJobStat = _BgwJobStat.init(sequelize, DataTypes);
  const BgwPolicyChunkStats = _BgwPolicyChunkStats.init(sequelize, DataTypes);
  const CaCategories = _CaCategories.init(sequelize, DataTypes);
  const CaCategorySections = _CaCategorySections.init(sequelize, DataTypes);
  const CaJobDays = _CaJobDays.init(sequelize, DataTypes);
  const Categories = _Categories.init(sequelize, DataTypes);
  const Chats = _Chats.init(sequelize, DataTypes);
  const Chunk = _Chunk.init(sequelize, DataTypes);
  const ChunkConstraint = _ChunkConstraint.init(sequelize, DataTypes);
  const ChunkCopyOperation = _ChunkCopyOperation.init(sequelize, DataTypes);
  const ChunkDataNode = _ChunkDataNode.init(sequelize, DataTypes);
  const ChunkIndex = _ChunkIndex.init(sequelize, DataTypes);
  const ClientAssistantStatuses = _ClientAssistantStatuses.init(sequelize, DataTypes);
  const ClientJobs = _ClientJobs.init(sequelize, DataTypes);
  const Clients = _Clients.init(sequelize, DataTypes);
  const ClientsProfiles = _ClientsProfiles.init(sequelize, DataTypes);
  const CompressionAlgorithm = _CompressionAlgorithm.init(sequelize, DataTypes);
  const CompressionChunkSize = _CompressionChunkSize.init(sequelize, DataTypes);
  const ContinuousAgg = _ContinuousAgg.init(sequelize, DataTypes);
  const ContinuousAggsBucketFunction = _ContinuousAggsBucketFunction.init(sequelize, DataTypes);
  const ContinuousAggsHypertableInvalidationLog = _ContinuousAggsHypertableInvalidationLog.init(sequelize, DataTypes);
  const ContinuousAggsInvalidationThreshold = _ContinuousAggsInvalidationThreshold.init(sequelize, DataTypes);
  const ContinuousAggsMaterializationInvalidationLog = _ContinuousAggsMaterializationInvalidationLog.init(sequelize, DataTypes);
  const CustomerCategories = _CustomerCategories.init(sequelize, DataTypes);
  const CustomerCategoryPoints = _CustomerCategoryPoints.init(sequelize, DataTypes);
  const CustomerCategorySections = _CustomerCategorySections.init(sequelize, DataTypes);
  const CustomerProfileTasks = _CustomerProfileTasks.init(sequelize, DataTypes);
  const CustomerTaskMessages = _CustomerTaskMessages.init(sequelize, DataTypes);
  const CustomersAssistants = _CustomersAssistants.init(sequelize, DataTypes);
  const Dimension = _Dimension.init(sequelize, DataTypes);
  const DimensionSlice = _DimensionSlice.init(sequelize, DataTypes);
  const ExpertProductCases = _ExpertProductCases.init(sequelize, DataTypes);
  const ExpertProductItems = _ExpertProductItems.init(sequelize, DataTypes);
  const ExpertProductStatuses = _ExpertProductStatuses.init(sequelize, DataTypes);
  const ExpertProducts = _ExpertProducts.init(sequelize, DataTypes);
  const Experts = _Experts.init(sequelize, DataTypes);
  const FailedJobs = _FailedJobs.init(sequelize, DataTypes);
  const Files = _Files.init(sequelize, DataTypes);
  const Hypertable = _Hypertable.init(sequelize, DataTypes);
  const HypertableCompression = _HypertableCompression.init(sequelize, DataTypes);
  const HypertableDataNode = _HypertableDataNode.init(sequelize, DataTypes);
  const JobTransactions = _JobTransactions.init(sequelize, DataTypes);
  const MessageRoles = _MessageRoles.init(sequelize, DataTypes);
  const Metadata = _Metadata.init(sequelize, DataTypes);
  const Migrations = _Migrations.init(sequelize, DataTypes);
  const PasswordResets = _PasswordResets.init(sequelize, DataTypes);
  const PersonalAccessTokens = _PersonalAccessTokens.init(sequelize, DataTypes);
  const ProductTypes = _ProductTypes.init(sequelize, DataTypes);
  const RemoteTxn = _RemoteTxn.init(sequelize, DataTypes);
  const States = _States.init(sequelize, DataTypes);
  const Statuses = _Statuses.init(sequelize, DataTypes);
  const SubscriptionTypes = _SubscriptionTypes.init(sequelize, DataTypes);
  const Subscriptions = _Subscriptions.init(sequelize, DataTypes);
  const Tablespace = _Tablespace.init(sequelize, DataTypes);
  const TaskManagerSections = _TaskManagerSections.init(sequelize, DataTypes);
  const TaskMessageTypes = _TaskMessageTypes.init(sequelize, DataTypes);
  const TaskMessages = _TaskMessages.init(sequelize, DataTypes);
  const Tasks = _Tasks.init(sequelize, DataTypes);
  const TimerTypes = _TimerTypes.init(sequelize, DataTypes);
  const Timers = _Timers.init(sequelize, DataTypes);
  const TmSectionItems = _TmSectionItems.init(sequelize, DataTypes);
  const TransactionTypes = _TransactionTypes.init(sequelize, DataTypes);
  const Transactions = _Transactions.init(sequelize, DataTypes);
  const UserRoles = _UserRoles.init(sequelize, DataTypes);
  const Users = _Users.init(sequelize, DataTypes);

  AssistantsProfileTools.belongsToMany(AssistantsProfiles, { as: 'userIdAssistantsProfilesAssistantTools', through: AssistantTools, foreignKey: "toolId", otherKey: "userId" });
  AssistantsProfiles.belongsToMany(AssistantsProfileTools, { as: 'toolIdAssistantsProfileTools', through: AssistantTools, foreignKey: "userId", otherKey: "toolId" });
  AssistantsProfiles.belongsToMany(CaCategories, { as: 'categoryIdCaCategories', through: AssistantCategories, foreignKey: "userId", otherKey: "categoryId" });
  AssistantsProfiles.belongsToMany(CaCategorySections, { as: 'sectionIdCaCategorySections', through: AssistantCategorySections, foreignKey: "userId", otherKey: "sectionId" });
  CaCategories.belongsToMany(AssistantsProfiles, { as: 'userIdAssistantsProfiles', through: AssistantCategories, foreignKey: "categoryId", otherKey: "userId" });
  CaCategories.belongsToMany(ClientsProfiles, { as: 'userIdClientsProfiles', through: CustomerCategories, foreignKey: "categoryId", otherKey: "userId" });
  CaCategories.belongsToMany(ClientsProfiles, { as: 'userIdClientsProfilesCustomerCategoryPoints', through: CustomerCategoryPoints, foreignKey: "categoryId", otherKey: "userId" });
  CaCategorySections.belongsToMany(AssistantsProfiles, { as: 'userIdAssistantsProfilesAssistantCategorySections', through: AssistantCategorySections, foreignKey: "sectionId", otherKey: "userId" });
  ClientsProfiles.belongsToMany(CaCategories, { as: 'categoryIdCaCategoriesCustomerCategories', through: CustomerCategories, foreignKey: "userId", otherKey: "categoryId" });
  ClientsProfiles.belongsToMany(CaCategories, { as: 'categoryIdCaCategoriesCustomerCategoryPoints', through: CustomerCategoryPoints, foreignKey: "userId", otherKey: "categoryId" });
  CaJobDays.belongsTo(AssistantJobs, { as: "job", foreignKey: "jobId"});
  AssistantJobs.hasMany(CaJobDays, { as: "caJobDays", foreignKey: "jobId"});
  AssistantJobs.belongsTo(Assistants, { as: "assistant", foreignKey: "assistantId"});
  Assistants.hasMany(AssistantJobs, { as: "assistantJobs", foreignKey: "assistantId"});
  AssistantsProfiles.belongsTo(Assistants, { as: "tg", foreignKey: "tgId"});
  Assistants.hasOne(AssistantsProfiles, { as: "assistantsProfile", foreignKey: "tgId"});
  AssistantsProfileTools.belongsTo(AssistantsProfileToolSections, { as: "section", foreignKey: "sectionId"});
  AssistantsProfileToolSections.hasMany(AssistantsProfileTools, { as: "assistantsProfileTools", foreignKey: "sectionId"});
  AssistantTools.belongsTo(AssistantsProfileTools, { as: "tool", foreignKey: "toolId"});
  AssistantsProfileTools.hasMany(AssistantTools, { as: "assistantTools", foreignKey: "toolId"});
  AssistantCategories.belongsTo(AssistantsProfiles, { as: "user", foreignKey: "userId"});
  AssistantsProfiles.hasMany(AssistantCategories, { as: "assistantCategories", foreignKey: "userId"});
  AssistantCategorySections.belongsTo(AssistantsProfiles, { as: "user", foreignKey: "userId"});
  AssistantsProfiles.hasMany(AssistantCategorySections, { as: "assistantCategorySections", foreignKey: "userId"});
  AssistantTools.belongsTo(AssistantsProfiles, { as: "user", foreignKey: "userId"});
  AssistantsProfiles.hasMany(AssistantTools, { as: "assistantTools", foreignKey: "userId"});
  AssistantCategories.belongsTo(CaCategories, { as: "category", foreignKey: "categoryId"});
  CaCategories.hasMany(AssistantCategories, { as: "assistantCategories", foreignKey: "categoryId"});
  CaCategorySections.belongsTo(CaCategories, { as: "category", foreignKey: "categoryId"});
  CaCategories.hasMany(CaCategorySections, { as: "caCategorySections", foreignKey: "categoryId"});
  CustomerCategories.belongsTo(CaCategories, { as: "category", foreignKey: "categoryId"});
  CaCategories.hasMany(CustomerCategories, { as: "customerCategories", foreignKey: "categoryId"});
  CustomerCategoryPoints.belongsTo(CaCategories, { as: "category", foreignKey: "categoryId"});
  CaCategories.hasMany(CustomerCategoryPoints, { as: "customerCategoryPoints", foreignKey: "categoryId"});
  AssistantCategorySections.belongsTo(CaCategorySections, { as: "section", foreignKey: "sectionId"});
  CaCategorySections.hasMany(AssistantCategorySections, { as: "assistantCategorySections", foreignKey: "sectionId"});
  CustomerCategorySections.belongsTo(CaCategorySections, { as: "section", foreignKey: "sectionId"});
  CaCategorySections.hasMany(CustomerCategorySections, { as: "customerCategorySections", foreignKey: "sectionId"});
  ExpertProducts.belongsTo(Categories, { as: "category", foreignKey: "categoryId"});
  Categories.hasMany(ExpertProducts, { as: "expertProducts", foreignKey: "categoryId"});
  Tasks.belongsTo(Categories, { as: "category", foreignKey: "categoryId"});
  Categories.hasMany(Tasks, { as: "tasks", foreignKey: "categoryId"});
  AssistantJobs.belongsTo(Chats, { as: "chat", foreignKey: "chatId"});
  Chats.hasMany(AssistantJobs, { as: "assistantJobs", foreignKey: "chatId"});
  ClientJobs.belongsTo(Chats, { as: "chat", foreignKey: "chatId"});
  Chats.hasMany(ClientJobs, { as: "clientJobs", foreignKey: "chatId"});
  Clients.belongsTo(ClientAssistantStatuses, { as: "status", foreignKey: "statusId"});
  ClientAssistantStatuses.hasMany(Clients, { as: "clients", foreignKey: "statusId"});
  AssistantJobs.belongsTo(Clients, { as: "client", foreignKey: "clientId"});
  Clients.hasMany(AssistantJobs, { as: "assistantJobs", foreignKey: "clientId"});
  ClientJobs.belongsTo(Clients, { as: "client", foreignKey: "clientId"});
  Clients.hasMany(ClientJobs, { as: "clientJobs", foreignKey: "clientId"});
  ClientsProfiles.belongsTo(Clients, { as: "user", foreignKey: "userId"});
  Clients.hasOne(ClientsProfiles, { as: "clientsProfile", foreignKey: "userId"});
  Tasks.belongsTo(Clients, { as: "client", foreignKey: "clientId"});
  Clients.hasMany(Tasks, { as: "tasks", foreignKey: "clientId"});
  CustomerCategories.belongsTo(ClientsProfiles, { as: "user", foreignKey: "userId"});
  ClientsProfiles.hasMany(CustomerCategories, { as: "customerCategories", foreignKey: "userId"});
  CustomerCategoryPoints.belongsTo(ClientsProfiles, { as: "user", foreignKey: "userId"});
  ClientsProfiles.hasMany(CustomerCategoryPoints, { as: "customerCategoryPoints", foreignKey: "userId"});
  CustomerCategorySections.belongsTo(ClientsProfiles, { as: "user", foreignKey: "userId"});
  ClientsProfiles.hasMany(CustomerCategorySections, { as: "customerCategorySections", foreignKey: "userId"});
  CustomerTaskMessages.belongsTo(CustomerProfileTasks, { as: "task", foreignKey: "taskId"});
  CustomerProfileTasks.hasMany(CustomerTaskMessages, { as: "customerTaskMessages", foreignKey: "taskId"});
  TaskManagerSections.belongsTo(CustomersAssistants, { as: "ca", foreignKey: "caId"});
  CustomersAssistants.hasMany(TaskManagerSections, { as: "taskManagerSections", foreignKey: "caId"});
  ExpertProductCases.belongsTo(ExpertProducts, { as: "product", foreignKey: "productId"});
  ExpertProducts.hasMany(ExpertProductCases, { as: "expertProductCases", foreignKey: "productId"});
  ExpertProductItems.belongsTo(ExpertProducts, { as: "product", foreignKey: "productId"});
  ExpertProducts.hasMany(ExpertProductItems, { as: "expertProductItems", foreignKey: "productId"});
  Tasks.belongsTo(Experts, { as: "expert", foreignKey: "expertId"});
  Experts.hasMany(Tasks, { as: "tasks", foreignKey: "expertId"});
  Tasks.belongsTo(Statuses, { as: "status", foreignKey: "statusId"});
  Statuses.hasMany(Tasks, { as: "tasks", foreignKey: "statusId"});
  Subscriptions.belongsTo(SubscriptionTypes, { as: "subscriptionType", foreignKey: "subscriptionTypeId"});
  SubscriptionTypes.hasMany(Subscriptions, { as: "subscriptions", foreignKey: "subscriptionTypeId"});
  TmSectionItems.belongsTo(TaskManagerSections, { as: "tmSection", foreignKey: "tmSectionId"});
  TaskManagerSections.hasMany(TmSectionItems, { as: "tmSectionItems", foreignKey: "tmSectionId"});
  CustomerTaskMessages.belongsTo(TaskMessageTypes, { as: "type", foreignKey: "typeId"});
  TaskMessageTypes.hasMany(CustomerTaskMessages, { as: "customerTaskMessages", foreignKey: "typeId"});
  Timers.belongsTo(TimerTypes, { as: "type", foreignKey: "typeId"});
  TimerTypes.hasMany(Timers, { as: "timers", foreignKey: "typeId"});
  Transactions.belongsTo(TransactionTypes, { as: "type", foreignKey: "typeId"});
  TransactionTypes.hasMany(Transactions, { as: "transactions", foreignKey: "typeId"});

  return {
    AssistantCategories,
    AssistantCategorySections,
    AssistantJobs,
    AssistantTools,
    Assistants,
    AssistantsProfileToolSections,
    AssistantsProfileTools,
    AssistantsProfiles,
    BgwJob,
    BgwJobStat,
    BgwPolicyChunkStats,
    CaCategories,
    CaCategorySections,
    CaJobDays,
    Categories,
    Chats,
    Chunk,
    ChunkConstraint,
    ChunkCopyOperation,
    ChunkDataNode,
    ChunkIndex,
    ClientAssistantStatuses,
    ClientJobs,
    Clients,
    ClientsProfiles,
    CompressionAlgorithm,
    CompressionChunkSize,
    ContinuousAgg,
    ContinuousAggsBucketFunction,
    ContinuousAggsHypertableInvalidationLog,
    ContinuousAggsInvalidationThreshold,
    ContinuousAggsMaterializationInvalidationLog,
    CustomerCategories,
    CustomerCategoryPoints,
    CustomerCategorySections,
    CustomerProfileTasks,
    CustomerTaskMessages,
    CustomersAssistants,
    Dimension,
    DimensionSlice,
    ExpertProductCases,
    ExpertProductItems,
    ExpertProductStatuses,
    ExpertProducts,
    Experts,
    FailedJobs,
    Files,
    Hypertable,
    HypertableCompression,
    HypertableDataNode,
    JobTransactions,
    MessageRoles,
    Metadata,
    Migrations,
    PasswordResets,
    PersonalAccessTokens,
    ProductTypes,
    RemoteTxn,
    States,
    Statuses,
    SubscriptionTypes,
    Subscriptions,
    Tablespace,
    TaskManagerSections,
    TaskMessageTypes,
    TaskMessages,
    Tasks,
    TimerTypes,
    Timers,
    TmSectionItems,
    TransactionTypes,
    Transactions,
    UserRoles,
    Users,
  };
}

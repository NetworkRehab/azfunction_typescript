module "resource_group" {
  source = "./modules/resource_group"
  resource_group_name = var.resource_group_name
  location = var.location
}

module "azure_function" {
  source = "./modules/azure_function"
  resource_group_name = module.resource_group.resource_group_name
  location = var.location
  function_app_name = var.function_app_name
  storage_account_name = var.storage_account_name
  app_service_plan_id = var.app_service_plan_id
}
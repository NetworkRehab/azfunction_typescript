resource "azurerm_storage_account" "main" {
  name                     = var.storage_account_name
  resource_group_name      = var.resource_group_name
  location                 = var.location
  account_tier             = "Standard"
  account_replication_type = "LRS"
  min_tls_version           = "TLS1_2"
}

resource "azurerm_function_app" "main" {
  name                       = var.function_app_name
  resource_group_name        = var.resource_group_name
  location                   = var.location
  storage_account_name       = azurerm_storage_account.main.name
  storage_account_access_key = azurerm_storage_account.main.primary_access_key
  os_type                    = "linux"
  app_service_plan_id        = var.app_service_plan_id
  version                    = "~4"
  app_settings = {
    FUNCTIONS_WORKER_RUNTIME = "node"
  }
  https_only = true
  identity {
    type = "SystemAssigned"
  }
}
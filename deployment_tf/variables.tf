variable "resource_group_name" {
  description = "The name of the resource group"
  type        = string
}

variable "location" {
  description = "The location of the resource group"
  type        = string
  default     = "West Europe"
}

variable "function_app_name" {
  description = "The name of the Azure Function App"
  type        = string
}

variable "storage_account_name" {
  description = "The name of the Storage Account"
  type        = string
}

variable "app_service_plan_id" {
  description = "The ID of the App Service Plan"
  type        = string
}
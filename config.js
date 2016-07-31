var config = module.exports = {}
config.asset = 'BTC'
config.currency = 'USD'
config.reducer_report_interval = 30000
config.enabled_plugins = [
  'bitfinex',
  'gdax'
]
config.sim_chunk_size = '90d'
config.max_slug_length = 22
config.backfill_status_check = '30s'
config.backfill_status_timeout = 35000
config.reducer_limit = 100
config.tick_sizes = ["10s"] // each tick size has its own map/reduce job
# Voila.id Performance Test

JMeter performance testing for Voila.id website.

## Requirements
- Java 8+
- JMeter 5.6.3

## Usage

```bash
# Run test
jmeter -n -t voila.id.jmx -l results.jtl -e -o report

# View results
open report/index.html
```

## Export Results

```bash
# Generate new report
jmeter -g results.jtl -o new_report

# CSV export: Open GUI → Summary Report → Save Table Data
```

## Files
- `voila.id.jmx` - Test plan
- `results.jtl` - Results data  
- `report/` - HTML dashboard

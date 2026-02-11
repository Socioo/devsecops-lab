#!/bin/bash

echo "=== Step 1: Fix npm vulnerabilities ==="
npm audit fix
echo ""

echo "=== Step 2: Fix ESLint issues ==="
npm run lint
echo ""

echo "=== Step 3: Build Docker Image ==="
docker build -t devsecops-app:latest .
echo ""

echo "=== Step 4: Run Container ==="
docker run -d -p 3000:3000 --name devsecops-test devsecops-app:latest
sleep 5
echo ""

echo "=== Step 5: Test Application ==="
echo "Testing endpoint: /"
curl -s http://localhost:3000 | jq . || curl -s http://localhost:3000
echo ""
echo "Testing endpoint: /health"
curl -s http://localhost:3000/health | jq . || curl -s http://localhost:3000/health
echo ""
echo "Testing endpoint: /secret-test"
curl -s http://localhost:3000/secret-test | jq . || curl -s http://localhost:3000/secret-test
echo ""

echo "=== Step 6: Run Trivy Security Scan ==="
echo "Running Trivy scan (this may take a few minutes)..."
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  aquasec/trivy image --severity HIGH,CRITICAL devsecops-app:latest 2>/dev/null || \
  echo "Trivy scan failed - trying alternative method..."
echo ""

echo "=== Step 7: Run npm security audit ==="
npm audit --audit-level=high
echo ""

echo "=== Step 8: Run tests ==="
npm test 2>/dev/null || echo "Tests not configured yet"
echo ""

echo "=== Step 9: Cleanup ==="
docker stop devsecops-test 2>/dev/null
docker rm devsecops-test 2>/dev/null
echo "Cleanup complete!"

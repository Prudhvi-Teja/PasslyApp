import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { router } from 'expo-router';
import Header from '../../src/components/Header';
import FilterChips from '../../src/components/FilterChips';
import Card from '../../src/components/Card';
import { trips } from '../../src/data/mockData';
import { colors } from '../../src/theme/colors';

export default function Feed() {
  const [filter, setFilter] = useState('All');
  const data = filter === 'All' ? trips : trips.filter(t => t.type === filter);
  return (
    <View style={styles.container}>
      <Header title="Feed" />
      <FilterChips options={['All', 'Trip', 'Parcel']} value={filter} onChange={setFilter} />
      <FlatList
        contentContainerStyle={{ padding: 16 }}
        data={data}
        keyExtractor={i => i.id}
        renderItem={({ item }) => (
          <Card title={`${item.from} → ${item.to}`} subtitle={`${item.date} • ${item.traveler}`} onPress={() => router.push(`/details/${item.id}`)} />
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: colors.background } });
